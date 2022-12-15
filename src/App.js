import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Computing from './components/categories/Computing';
import Mobile from './components/categories/Mobile';
import Mobiles from './components/categories/Mobiles';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import Product from './components/products/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/mobiles' element={<Mobiles />} />
        <Route exact path='/computings' element={<Computing />} />
        <Route exact path='/products/:id' element={<Product />} />
        <Route exact path='/mobiles/:id' element={<Mobile />} />
        <Route exact path='/computings/:id' element={<Product />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;