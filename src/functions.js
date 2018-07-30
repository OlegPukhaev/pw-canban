import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function SaveCards(saveobj, localkey){//сохраняем объект карточки saveobj, в localstorage по ключу localkey
    const serialObj = JSON.stringify(saveobj); //сериализуем его
    localStorage.setItem(localkey, serialObj); //запишем его в хранилище по ключу "myKey"
}

function getCards(localkey) {//Возвращает объект карточки по ключу localkey в localstorage
    const returnObj = JSON.parse(localStorage.getItem(localkey));
  return returnObj;
}

function Cardstitle(props){//возвращает заголовок карточки
  return <h5>{props.title}</h5>
}

function Carditem(props){//возвращает содержимое карточки
    return (
      <p>{props.item}</p>
    );
}

function CardsList(props) {//Возвращает список карточек
  const cards = props.cards;
  const listItems = cards.map((number) =>
      <li class="cards" key={number.toString()}>
        {number}
      </li>

  );
  return (
    <ul class="Cardscoll">{listItems}</ul>
  );
}

function Addcard(){//добавить новую карточку
  return (
    <a href="#">Add a card...</a>

  );
}

function Close(){
  return <div id="close"></div>;
}

function Darkback () {
  return (
      <div class="darkback"></div>
  );
}

function ModalWin (){
const element = <p> Хуета будет тут писаться Разная поебень и кнопочки </p>;
    return (
      <div>
        <Darkback />
        <div class="modalwin">
          <Close />
            {element}
          <test />
        </div>
      </div>
  );
}

function App (){
  const cardsobj = getCards("tab1");
    return (

       <div class="col-sm-3 bg-light">
          <Cardstitle title={cardsobj.colname} />
            <CardsList cards={cardsobj.cards} />
              <Addcard />
       </div>
    );
}







export default App;
