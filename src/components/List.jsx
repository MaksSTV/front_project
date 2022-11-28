import MenuItem from "./MenuItem";

const List = function({items, title, anchor}){
      
      return (
        <div className="menu" id={anchor}>
          <h1 className="menu__title">{title}</h1>
            <div className="grid__item">
            {items.map((item)=>
                <MenuItem item={item} key={item.id}/>
              )}
            </div>
          </div>
      );
}

export default List