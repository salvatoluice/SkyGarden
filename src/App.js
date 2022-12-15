import { Route, Routes } from 'react-router-dom';
import './App.css';
import Mobiles from './components/categories/Mobiles';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/mobiles' element={<Mobiles />} />
      </Routes>
    </div>
  );
}

export default App;
