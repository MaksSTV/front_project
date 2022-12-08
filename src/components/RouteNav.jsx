import Nav from './Nav'
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Menu from '../pages/Menu';
import Delivery from '../pages/Delivery';
import Main from '../pages/Main';
import Reviews from '../pages/Reviews';

const RouteNav = function(){
  
    return (
      <BrowserRouter>
        <div className='header'>
          <Nav/>
        </div>
        <div className="main__container">
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
        </div>
      </BrowserRouter>
    );
}

export default RouteNav