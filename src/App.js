import './App.css';
import About from './components/about';
import All from './components/all';
import { Routes, Route } from 'react-router-dom';
import Product from './components/product';
import Service from './components/service';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<All/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contactus' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
