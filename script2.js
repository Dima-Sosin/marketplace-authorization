(function () {
  "use strict";
  const formKey = document.getElementById("form-key");
  const key = document.getElementById("input-key");

  const error = document.getElementById("error-msg");

  key.addEventListener("input", () => {
    error.classList.remove("error-active");
  });

  formKey.addEventListener("submit", (e) => {
    e.preventDefault();
    if (key.value != 123456) {
      error.textContent = "Неправильный код!";
      error.classList.add("error-active");
    } else {
      alert("Авторизация прошла успешно!");
    }
  });
})();
