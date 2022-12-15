import { Route, Routes } from 'react-router-dom';
import './App.css';
import Mobiles from './components/categories/Mobiles';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import Product from './components/products/Product';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/mobiles' element={<Mobiles />} />
        <Route exact path='/products/:id' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
