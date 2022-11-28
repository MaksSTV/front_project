

const Footer = function(){
      
      return (
        <div className="footer__container">
            <div className="footer__lists">
                <div className="footer__nav">
                    <ul className="list__nav">
                        <li className="list__nav-item">Главная</li>
                        <li className="list__nav-item">Меню</li>
                        <li className="list__nav-item">Отзывы</li>
                        <li className="list__nav-item">О нас</li>
                        <li className="list__nav-item">Доставка</li>
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