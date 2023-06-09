import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import NotificationBanner from './components/NotificationBanner/NotificationBanner';
import Spinner from './components/Spinner/Spinner';
import Error from './routes/Error/Error';
import { onForegroundMessage } from './utils/firebase/firebase.utils';
import Notifications from './components/Notifications/Notifications';

const Navigation = lazy(() => import('./routes/Navigation/Navigation'));
const Home = lazy(() => import('./routes/Home/Home'));
const Shop = lazy(() => import('./routes/Shop/Shop'));
const Checkout = lazy(() => import('./routes/Checkout/Checkout'));

function App() {
  useEffect(() => {
    onForegroundMessage()
      .then((payload) => {
        console.log('Received foreground message: ', payload);
        const {
          notification: { title, body },
        } = payload;
        toast(<Notifications title={title} body={body} />);
      })
      .catch((err) =>
        console.log(
          'An error occured while retrieving foreground message. ',
          err
        )
      );
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <NotificationBanner />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
      <ToastContainer position='bottom-left' />
    </Suspense>
  );
}

export default App;
