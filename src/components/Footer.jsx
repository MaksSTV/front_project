import { Link } from "react-router-dom";

const Footer = function(){
      
      return (
        <div className="footer__container">
            <div className="footer__lists">
                <div className="footer__nav">
                    <ul className="list__nav">
                        <li className="list__nav-item"><Link className="nav--list-item-link" to='/main'>Главная</Link></li>
                        <li className="list__nav-item"><Link className="nav--list-item-link" to='/menu'>Меню</Link></li>
                        <li className="list__nav-item"><Link className="nav--list-item-link" to='/reviews'>Отзывы</Link></li>
                        <li className="list__nav-item"><Link className="nav--list-item-link" to='/about'>О нас</Link></li>
                        <li className="list__nav-item"><Link className="nav--list-item-link" to='/delivery'>Доставка</Link></li>
                    </ul>
                </div>
                <div className="footer__contact">
                    <ul className="list__contact">
                        <li className="list__contact-item">Адрес: Улица профессора Попова, д.5</li>
                        <li className="list__contact-item">Телефон: +7-800-555-35-55</li>
                        <li className="list__contact-item">Круглосуточно</li>
                        <li className="list__contact-item">Email: fop0302@mail.ru</li>
                        <li className="list__contact-item">Санкт-Петербург</li>
                    </ul>
                </div>
            </div>
            <div className="policy">
                <p className="policy__text">© 2022, Food Order Picker 0302</p>
            </div>
        </div>
      );
}

export default Footer