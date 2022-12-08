import { Link } from "react-router-dom";


const Nav = function(){
  
      return (
        <div className="navigation">
          <input className="side-menu" type="checkbox" id="side-menu"/>
          <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
          <nav className="nav">
            <ul className="nav--list">
              <li className="nav--list-item">Киров Big city <br /> +7-880-555-35-55</li>
              <li className="nav--list-item"><Link className="nav--list-item-link" to='/main'>Главная</Link></li>
              <li className="nav--list-item"><Link className="nav--list-item-link" to='/menu'>Меню</Link></li>
              <li className="nav--list-item"><Link className="nav--list-item-link" to='/reviews'>Отзывы</Link></li>
              <li className="nav--list-item"><Link className="nav--list-item-link" to='/about'>О нас</Link></li>
              <li className="nav--list-item"><Link className="nav--list-item-link" to='/delivery'>Доставка</Link></li>
              <li className="nav--list-item"><Link className="nav--list-item-link" to='/menu'>+7-880-555-35-55</Link></li>
            </ul>
          </nav>
        </div>
      );
}

export default Nav