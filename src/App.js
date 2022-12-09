import { useEffect } from 'react';
import RouteNav from './components/RouteNav';
import './styles/App.css';
import './styles/reset.css';
const tg = window.Telegram.WebApp;

function App() {

  useEffect(()=>{
    tg.ready();
  }, [])

  return (
    <div className="App">
      <RouteNav/>
    </div>
  );
}

export default App;


