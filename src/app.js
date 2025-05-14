import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const simbolos = ["♦", "♥", "♠", "♣"];
  const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const palo = simbolos[Math.floor(Math.random() * simbolos.length)];
  const valor = numeros[Math.floor(Math.random() * numeros.length)];
  const color = (palo === "♥" || palo === "♦") ? "red" : "black";


    const contenido = document.getElementById("contenido");
contenido.innerHTML = `
  <div class="esquina izq" style="color: ${color}">
    <div class="valor">${valor}</div>
    <div class="palo">${palo}</div>
  </div>
  <div class="esquina der" style="color: ${color}">
    <div class="valor">${valor}</div>
    <div class="palo">${palo}</div>
  </div>
  <div class="simbolo" style="color: ${color}">
    ${palo}
  </div>
`}
