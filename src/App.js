import './styles/App.css';
import './styles/reset.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Menu from './pages/Menu';
import Delivery from './pages/Delivery';
import Main from './pages/Main';
import Reviews from './pages/Reviews';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <div className='header'>
          <Nav/>
        </div>
        <Routes>
          <Route path='/' element={<Menu/>}/>
          <Route path='/main' element={<Main/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/delivery' element={<Delivery/>}/>
        </Routes>
        <div className="footer">
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


