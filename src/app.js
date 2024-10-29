/* eslint-disable */
// ♦ ♥ ♠ ♣
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";

window.onload = function() {
  //Asiganmos una variable a cada glifo
  const spade = "♠";
  const trebol = "♣";
  const diamond = "♦";
  const hearts = "♥";

  //Randomizar los elementos
  const cardNumbers = ["A", "K", "Q", "J", 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const cardFigures = [hearts, spade, diamond, trebol];
  const randomizedNumber = Math.floor(Math.random() * cardNumbers.length);
  const randomizedFigures = Math.floor(Math.random() * cardFigures.length);

  const randomizedNumberValue = cardNumbers[randomizedNumber];
  const randomizedFiguresValue = cardFigures[randomizedFigures];

  //Añadir el rojo
  let iconStyle = "icons";
  if (randomizedFiguresValue === hearts) iconStyle = "red";
  if (randomizedFiguresValue === diamond) iconStyle = "red";
  let cardValue = "values";
  if (randomizedFiguresValue === hearts) cardValue = "values-red";
  if (randomizedFiguresValue === diamond) cardValue = "values-red";

  //Renderizamos el contenido en el html
  const renderElements = (document.querySelector(
    "#mainCard"
  ).innerHTML = `<div class=${iconStyle}>${randomizedFiguresValue}</div>
       <div class=${cardValue}>${randomizedNumberValue}</div>
       <div class=${iconStyle}>${[randomizedFiguresValue]}</div>`);

  return renderElements;
};
