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
import d1 from "../images/desserts/d1.png"
import d2 from "../images/desserts/d2.png"
import d3 from "../images/desserts/d3.png"
import d4 from "../images/desserts/d4.png"
import d5 from "../images/desserts/d5.png"
import { useState } from "react";



const MainScreen = function(){

      const [pizza, setPizza] = useState([
        {id:1, title: 'Ассорти', body: 'Оливки, перец, листья, сыр, помидор, грибы, мясо', price: '450р', img: p1},
        {id:2, title: 'Пепперони', body: 'Пепперони, сыр', price: '450р', img: p2},
        {id:3, title: 'Сезонная', body: 'Лук, руккола, грибы, помидор', price: '450р', img: p3},
        {id:4, title: 'Домашняя', body: 'Лук, грибы, сыр, ветчина, помидор', price: '450р', img: p4},
        {id:5, title: '4 сезона', body: 'Пепперони, грибы, ветчина, сыр', price: '450р', img: p5},
        {id:6, title: 'Цезарь', body: 'Цезарь, листья салата, помидор, курица, сыр, соус', price: '450р', img: p6},
        {id:7, title: 'Ветчина грибы', body: 'Грибы, сыр, ветчина, пепперони', price: '450р', img: p7},
        {id:8, title: 'Мексиканская', body: 'Халапеньо, сыр, бекон, помидор', price: '450р', img: p8}
      ])

      const [burger, setBurger] = useState([
        {id:1, title: 'Классический', body: 'Бекон, сыр, котлета, помидор, салат', price: '450р', img: b1},
        {id:2, title: 'Уголек', body: 'Cалат, кетчуп, котлета, сыр, помидор, лук, моцарелла', price: '450р', img: b2},
        {id:3, title: 'Малыш', body: 'Котлета, маринованные огурцы, соус, сыр', price: '450р', img: b3},
        {id:4, title: 'Полторашка', body: 'Котлета, салат, сыр, лук соус', price: '450р', img: b4},
        {id:5, title: 'Брусничный', body: 'Курица, бекон, котлета, сыр, брусничный соус', price: '450р', img: b5},
        {id:6, title: 'Домашний', body: 'Ананас, салат, сыр, котлета, соус', price: '450р', img: b6},
        {id:7, title: 'Тот самый', body: 'Лук, салат, сыр, котлета, маринованные огурцы, помидор', price: '450р', img: b7},
        {id:8, title: 'Фирменный', body: 'Бекон, сыр, котлета, помидор, салат, яичница', price: '450р', img: b8}
      ])

      const [soup, setSoup] = useState([
        {id:1, title: 'Рамен с говядиной', body: 'Лапша, бульон, говядина, зеленый лук, перец чили, кинза', price: '450р', img: s1},
        {id:2, title: 'Крем суп из шпината', body: 'Шпинат, бульон, сливки, зелень', price: '450р', img: s2},
        {id:3, title: 'Грибной крем суп с гренками', body: 'Бульон, грибы, сливки, гренки', price: '450р', img: s3},
        {id:4, title: 'Том кха', body: 'Бульон, кокосовое молоко, морепродукты, грибы, перец чили, кинза', price: '450р', img: s4},
        {id:5, title: 'Том ям', body: 'Бульон, помидоры черри, морепродукты, грибы, перец чили, кинза', price: '450р', img: s5},
        {id:6, title: 'Тыквенный крем суп', body: 'Бульон, тыква, сливки, зелень', price: '450р', img: s6}
      ])

      const [wok, setWok] = useState([
        {id:1, title: 'Вок 1', body: 'Лапша пшеничная, тофу, болгарский перец, морковь', price: '450р', img: w1},
        {id:2, title: 'Вок 2', body: 'Лапша гречневая, морепродукты, болгарский перец, стручковая фасоль', price: '450р', img: w2},
        {id:3, title: 'Вок 3', body: 'Лапша пшеничная, креветки, болгарский перец, морковь, бобы', price: '450р', img: w3},
        {id:4, title: 'Вок 4', body: 'Лапша пшеничная, курица, болгарский перец', price: '450р', img: w4}
      ])

      const [dessert, setDessert] = useState([
        {id:1, title: 'Тирамису', body: '', price: '450р', img: d1},
        {id:2, title: 'Чизкейк', body: '', price: '450р', img: d2},
        {id:3, title: 'Медовик', body: '', price: '450р', img: d3},
        {id:4, title: 'Лимонник', body: '', price: '450р', img: d4},
        {id:5, title: 'Панкейки', body: '', price: '450р', img: d5}
      ])

      return (
        <div className='main--container'>
          
          <List items={burger} title="Бургеры" anchor="burger"/>
          <List items={wok} title="ВОК" anchor="wok"/>
          <List items={pizza} title="Пиццы" anchor="pizza"/>
          <List items={soup} title="Супы" anchor="soup"/>
          <List items={dessert} title="Дессерты" anchor="dessert"/>
          
        </div>
      );
}

export default MainScreen