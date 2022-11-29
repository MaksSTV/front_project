import { Link } from "react-router-dom";


const Nav = function(){
  
      return (
        <div className="navigation">
          <ul className="nav--list">
            <li className="nav--list-item">Киров Big city <br /> +7-880-555-35-55</li>
            <li className="nav--list-item"><Link className="nav--list-item-link" to='/main'>Главная</Link></li>
            <li className="nav--list-item"><Link className="nav--list-item-link" to='/menu'>Меню</Link></li>
            <li className="nav--list-item"><Link className="nav--list-item-link" to='/reviews'>Отзывы</Link></li>
            <li className="nav--list-item"><Link className="nav--list-item-link" to='/about'>О нас</Link></li>
            <li className="nav--list-item"><Link className="nav--list-item-link" to='/delivery'>Доставка</Link></li>
            <li className="nav--list-item"><a href="/" className="nav--list-item-link">+7-880-555-35-55</a></li>
          </ul>
        </div>
      );
}

export default Nav