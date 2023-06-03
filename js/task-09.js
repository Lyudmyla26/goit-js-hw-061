function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const body = document.body;
btnColor.addEventListener("click", onColor);

function onColor(event) {
  spanColor.textContent = body.style.backgroundColor = getRandomHexColor();
}
