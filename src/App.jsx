import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Spinner from './components/Spinner/Spinner';
import Categories from './routes/Categories/Categories';
import Category from './routes/Category/Category';
import Checkout from './routes/Checkout/Checkout';
import {
  getFirebaseToken,
  onForegroundMessage,
} from './utils/firebase/firebase.utils';
import { ToastContainer } from 'react-toastify';

const Navigation = lazy(() => import('./routes/Navigation/Navigation'));
const Home = lazy(() => import('./routes/Home/Home'));
const Shop = lazy(() => import('./routes/Shop/Shop'));

function App() {
  const [showNotificationBanner, setShowNotificationBanner] = useState(
    Notification.permission === 'default'
  );

  useEffect(() => {
    onForegroundMessage()
      .then((payload) => {
        console.log('Received foreground message: ', payload);
        const {
          notification: { title, body },
        } = payload;
        toast(<ToastifyNotification title={title} body={body} />);
      })
      .catch((err) =>
        console.log(
          'An error occured while retrieving foreground message. ',
          err
        )
      );
  }, []);

  const handleGetFirebaseToken = () => {
    getFirebaseToken()
      .then((firebaseToken) => {
        console.log('Firebase token: ', firebaseToken);
        if (firebaseToken) {
          setShowNotificationBanner(false);
        }
      })
      .catch((err) =>
        console.error('An error occured while retrieving firebase token. ', err)
      );
  };

  const ToastifyNotification = ({ title, body }) => (
    <div className='push-notification'>
      <h2 className='push-notification-title'>{title}</h2>
      <p className='push-notification-text'>{body}</p>
    </div>
  );

  return (
    <Suspense fallback={<Spinner />}>
      {showNotificationBanner && (
        <div className='notification-banner'>
          <a
            href='#'
            className='notification-banner__link'
            onClick={handleGetFirebaseToken}
          >
            Click here to enable push notifications
          </a>
        </div>
      )}
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />}>
            <Route index element={<Categories />} />
            <Route path=':category' element={<Category />} />
          </Route>
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
      <ToastContainer position='bottom-left' />
    </Suspense>
  );
}

export default App;
