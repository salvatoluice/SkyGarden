import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Computer from './components/categories/Computer';
import Computing from './components/categories/Computing';
import Mobile from './components/categories/Mobile';
import Mobiles from './components/categories/Mobiles';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Reset from './components/Login/Reset';
import Dashboard from './components/Login/Dashboard';
import Product from './components/products/Product';
import Footer from './components/footer/Footer';

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
        <Route exact path='/computings/:id' element={<Computer />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;