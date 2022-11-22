import './styles/App.css';
import './styles/reset.css';
import MainScreen from './components/MainScreen';
import Nav from './components/Nav';

import SideBar from "./components/SideBar";

function App() {


  return (
    <div className="App">
      <div>
        <Nav/>
      </div>
      <div className="main">
        <SideBar />
        <MainScreen />
      </div>
    </div>
  );
}

export default App;
