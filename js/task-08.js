const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;
  if (email.value === "" || password.value === "") {
    const message = "Заповніть поля";
    alert(message);
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
  }

  formEl.reset();
}
