import { useEffect } from 'react';
import RouteNav from './components/RouteNav';
import './styles/App.css';
import './styles/reset.css';
const tg = window.Telegram.WebApp;

function App() {

  useEffect(()=>{
    tg.ready();
  }, [])

  const onClose = () =>{
    tg.close();
  }

  return (
    <div className="App">
      <button onClick={onClose}>Закрыть</button>
      <RouteNav/>
    </div>
  );
}

export default App;


