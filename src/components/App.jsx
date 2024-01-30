import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './path/to/pages/Home/Home';
import { About } from './path/to/pages/About/About';
import { Products } from './path/to/pages/Products/Products';
import { NotFound } from './path/to/pages/NotFound/NotFound';
import { ProductDetails } from './path/to/pages/ProductDetails/ProductDetails';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
