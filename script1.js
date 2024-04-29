(function () {
  "use strict";
  const formPhone = document.getElementById("form-phone");
  const phone = document.getElementById("input-phone");

  const error = document.getElementById("error-msg");

  const valid = /^(\+7|8)[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/;

  phone.addEventListener("input", () => {
    error.classList.remove("error-active");
  });

  formPhone.addEventListener("submit", (e) => {
    e.preventDefault();
    if (phone.value === "") {
      error.textContent = "Пустая строка!";
      error.classList.add("error-active");
    } else if (valid.test(phone.value)) {
      console.log(true);
      error.classList.remove("error-active");
      window.location.href = "key.html";
    } else {
      error.textContent = "Неправильный номер!";
      error.classList.add("error-active");
    }
  });

})();
