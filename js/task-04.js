// const decrement = document.querySelector('[data-action="decrement"]');
// const increment = document.querySelector('[data-action="increment"]');
const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  span: document.querySelector("#value"),
};

refs.decrement.addEventListener("click", decrementBtn);
refs.increment.addEventListener("click", incrementkBtn);
let counterValue = 0;
function decrementBtn(event) {
  counterValue -= 1;
  refs.span.textContent = counterValue;
}
function incrementkBtn(event) {
  counterValue += 1;
  refs.span.textContent = counterValue;
}
