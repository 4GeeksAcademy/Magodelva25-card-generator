/* eslint-disable */
// ♦ ♥ ♠ ♣
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";

const button = document.getElementById("buttonToGenerate");
const resetButton = document.getElementById("restart");

const figures = ["♠", "♣", "♦", "♥"];
const values = ["A", "K", "Q", "J", 10, 9, 8, 7, 6, 5, 4, 3, 2];

//Creamos la baraja, base de 52 cartas para el póker
const deck = [];
for (let figure of figures) {
  for (let value of values) {
    deck.push({ figure, value });
  }
}

// Barajar
let shuffledDeck = deck.sort(() => 0.5 - Math.random());

let cardCounter = 0;

button.onclick = function() {
  // Desactivar el generador de cartas al llegar al máximo
  if (cardCounter >= 52) {
    alert("No quedan cartas en el mazo");
    button.disabled = true;
    return;
  }
  // Genramos cartas
  const currentCard = shuffledDeck[cardCounter];
  const { figure, value } = currentCard;

  // Establecer estilo rojo para corazones y diamantes

  const iconStyle = figure === "♥" || figure === "♦" ? "red" : "figuras";
  const cardValueStyle =
    figure === "♥" || figure === "♦" ? "values-red" : "values";

  // Guardar el contenido actual de `main-card` en `previous-card`
  const mainCardContent = document.querySelector("#mainCard").innerHTML;
  document.querySelector("#previous-card").innerHTML = mainCardContent;

  // Renderizar la carta en `main-card`
  document.querySelector("#mainCard").innerHTML = `
    <div class="${iconStyle}">${figure}</div>
    <div class="${cardValueStyle}">${value}</div>
    <div class="${iconStyle}">${figure}</div>
  `;

  // Incrementar el contador de cartas
  cardCounter++;
  console.log(document.querySelector("#mainCard").innerHTML);
};

// Aquí la magia del reinicio

resetButton.onclick = function() {
  alert("Se han reiniciado las cartas");

  cardCounter = 0;
  shuffledDeck = deck.sort(() => 0.5 - Math.random());

  document.querySelector("#mainCard").innerHTML = `
    <div class="joker">
    </div>
  `;
  document.querySelector("#previous-card").innerHTML = "";
  // Reactivar el botón
  button.disabled = false;

  console.log(document.querySelector("#mainCard").innerHTML);
};
