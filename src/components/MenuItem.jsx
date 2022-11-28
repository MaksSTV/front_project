import Counter from "./Counter";

const MenuItem = function(props){
      
      return (
        <div className="menu__item">
            <div className="img__menu">
                <img className="img__item" src={props.item.img} alt="" />
            </div>
            <h1 className="title__item">{props.item.title}</h1>
            <p className="description__item">{props.item.body}</p>
            <div className="buy_item">
                <p className="price">{props.item.price}</p>
                <Counter/>
                <button className="buy_item-btn">Добавить</button>
            </div>
        </div>
      );
}

export default MenuItem