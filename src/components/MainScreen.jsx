import List from "./List"
import p1 from "../images/pizza/1p.png"
import p2 from "../images/pizza/2p.png"
import p3 from "../images/pizza/3p.png"
import p4 from "../images/pizza/4p.png"
import p5 from "../images/pizza/5p.png"
import p6 from "../images/pizza/6p.png"
import p7 from "../images/pizza/7p.png"
import p8 from "../images/pizza/8p.png"
import b1 from "../images/burger/b1.png"
import b2 from "../images/burger/b2.png"
import b3 from "../images/burger/b3.png"
import b4 from "../images/burger/b4.png"
import b5 from "../images/burger/b5.png"
import b6 from "../images/burger/b6.png"
import b7 from "../images/burger/b7.png"
import b8 from "../images/burger/b8.png"
import s1 from "../images/soup/s1.png"
import s2 from "../images/soup/s2.png"
import s3 from "../images/soup/s3.png"
import s4 from "../images/soup/s4.png"
import s5 from "../images/soup/s5.png"
import s6 from "../images/soup/s6.png"
import w1 from "../images/wok/w1.png"
import w2 from "../images/wok/w2.png"
import w3 from "../images/wok/w3.png"
import w4 from "../images/wok/w4.png"
import { useState } from "react";



const MainScreen = function(){

      const [pizza, setPizza] = useState([
        {id:1, title: 'Пицца', body: 'Оливки, перец, листья, сыр, помидор, грибы, мясо', price: '450р', img: p1},
        {id:2, title: 'Пицца', body: 'Пеперони, сыр', price: '450р', img: p2},
        {id:3, title: 'Пицца', body: 'Лук, руккола, грибы, помидор', price: '450р', img: p3},
        {id:4, title: 'Пицца', body: 'Лук, грибы, сыр, ветчина, помидор', price: '450р', img: p4},
        {id:5, title: 'Пицца', body: 'Пеперони, грибы, ветчин, сыр', price: '450р', img: p5},
        {id:6, title: 'Пицца', body: 'Цезарь, листья салата, помидор, курица, сыр, соус', price: '450р', img: p6},
        {id:7, title: 'Пицца', body: 'Грибы, сыр, бекон, пеперони', price: '450р', img: p7},
        {id:8, title: 'Пицца', body: 'Халапеньо, сыр, бекон, помидор', price: '450р', img: p8}
      ])

      const [burger, setBurger] = useState([
        {id:1, title: 'Бургер', body: 'Описание', price: '450р', img: b1},
        {id:2, title: 'Бургер', body: 'Описание', price: '450р', img: b2},
        {id:3, title: 'Бургер', body: 'Описание', price: '450р', img: b3},
        {id:4, title: 'Бургер', body: 'Описание', price: '450р', img: b4},
        {id:5, title: 'Бургер', body: 'Описание', price: '450р', img: b5},
        {id:6, title: 'Бургер', body: 'Описание', price: '450р', img: b6},
        {id:7, title: 'Бургер', body: 'Описание', price: '450р', img: b7},
        {id:8, title: 'Бургер', body: 'Описание', price: '450р', img: b8}
      ])

      const [soup, setSoup] = useState([
        {id:1, title: 'Суп', body: 'Описание', price: '450р', img: s1},
        {id:2, title: 'Суп', body: 'Описание', price: '450р', img: s2},
        {id:3, title: 'Суп', body: 'Описание', price: '450р', img: s3},
        {id:4, title: 'Суп', body: 'Описание', price: '450р', img: s4},
        {id:5, title: 'Суп', body: 'Описание', price: '450р', img: s5},
        {id:6, title: 'Суп', body: 'Описание', price: '450р', img: s6}
      ])

      const [wok, setWok] = useState([
        {id:1, title: 'Вок', body: 'Описание', price: '450р', img: w1},
        {id:2, title: 'Вок', body: 'Описание', price: '450р', img: w2},
        {id:3, title: 'Вок', body: 'Описание', price: '450р', img: w3},
        {id:4, title: 'Вок', body: 'Описание', price: '450р', img: w4}
      ])

      return (
        <div className='main--container'>
          
          <List items={burger} title="Бургеры"/>
          <List items={wok} title="ВОК"/>
          <List items={pizza} title="Пиццы"/>
          <List items={soup} title="Супы"/>
          
        </div>
      );
}

export default MainScreen