const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", inputName);

function inputName(event) {
  refs.span.textContent =
    refs.input.value !== "" ? event.currentTarget.value : "Anonymous";
}
