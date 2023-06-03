function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const fomEl = document.querySelector("#controls");
const input = document.querySelector('[type="number"]');
const btnOF = document.querySelector("button[data-create]");
const btnClen = document.querySelector("button[data-v]");
console.log(input);
function createBoxes(amount) {}
