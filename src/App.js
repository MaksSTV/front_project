import './styles/App.css';
import './styles/reset.css';
import MainScreen from './components/MainScreen';
import Nav from './components/Nav';

import SideBar from "./components/SideBar";

function App() {


  return (//body == App
    <div className="App">
      <div className='header'>
        <Nav/>
      </div>
      <div className="main">
        <SideBar />
        <MainScreen />
      </div>
      <div className="footer">
        
      </div>
    </div>
  );
}

export default App;
