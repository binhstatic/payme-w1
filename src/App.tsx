import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Spinner from './components/Spinner/Spinner';
import Categories from './routes/Categories/Categories';
import Category from './routes/Category/Category';
import Checkout from './routes/Checkout/Checkout';

const Navigation = lazy(() => import('./routes/Navigation/Navigation'));
const Home = lazy(() => import('./routes/Home/Home'));
const Shop = lazy(() => import('./routes/Shop/Shop'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  );
}

export default App;
