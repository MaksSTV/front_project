import Counter from "./Counter";
import React, { useState } from "react";

const MenuItem = function (props) {

    const [count, setCount] = useState(0)
    let [disable, setDisable] = useState(true);

    function increment() {
      setCount(count + 1)
      setDisable(disable = false)
    }
  
    function decrement() {
        
      if(count !== 0){
        setCount(count - 1)
        if(count - 1 === 0){
            setDisable(disable = true)
            
        }
      }
      
    }

    

    let product = {
        id: props.item.id,
        title: props.item.title,
        price: props.item.price,
        amount: count

    };

    let json = JSON.stringify(product);

    return (
        <div className="menu__item">
            <div className="img__menu">
                <img className="img__item" src={props.item.img} alt="" />
            </div>
            <h1 className="title__item">{props.item.title}</h1>
            <p className="description__item">{props.item.body}</p>
            <div className="buy_item">
                <p className="price">{props.item.price}</p>
                <div className="counter__container">


                    <button className="button__buy-food" onClick={increment} ><svg width="20" height="25" viewBox="0 0 402 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M394 154.175C388.669 148.845 382.194 146.181 374.583 146.181H255.811V27.406C255.811 19.795 253.145 13.322 247.817 7.992C242.488 2.666 236.02 0 228.398 0H173.586C165.974 0 159.502 2.663 154.172 7.993C148.842 13.323 146.178 19.796 146.178 27.407V146.182H27.407C19.796 146.182 13.323 148.846 7.993 154.176C2.663 159.506 0 165.973 0 173.589V228.408C0 236.026 2.662 242.494 7.992 247.819C13.322 253.151 19.795 255.813 27.406 255.813H146.177V374.59C146.177 382.201 148.841 388.679 154.171 394.007C159.501 399.332 165.973 401.994 173.585 401.994H228.401C236.018 401.994 242.487 399.332 247.818 394.007C253.15 388.676 255.812 382.201 255.812 374.59V255.813H374.582C382.2 255.813 388.671 253.151 393.999 247.819C399.328 242.494 401.993 236.026 401.993 228.408V173.589C401.991 165.973 399.332 159.502 394 154.175Z" fill="#E5E5E5" />
                    </svg>
                    </button>
                    <h1 className="counter__title">{count}{disable}</h1>
                    <button className="button__buy-food" onClick={decrement}><svg width="20" height="25" viewBox="0 0 402 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M363.406 0H37.5937C16.8295 0 0 24.398 0 54.5C0 84.6021 16.8295 109 37.5937 109H363.406C384.17 109 401 84.6021 401 54.5C401 24.398 384.17 0 363.406 0Z" fill="#E5E5E5" />
                    </svg>

                    </button>
                </div>
                {/*<Counter count={num}/>*/}
                <button disabled={disable} className="buy_item-btn" onClick={() => props.add(json)}>Add</button>
            </div>
        </div>
    );
}

export default MenuItem