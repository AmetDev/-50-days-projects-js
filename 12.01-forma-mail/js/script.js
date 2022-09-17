

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("form");
  form.addEventListener('submit', formSend);

   async function formSend(e) {
    e.preventDefault();
    let inputValudate = document.querySelectorAll("._req");
    inputValudate.forEach(function(element) {
    let inputValue  = element.value
      if(inputValue == "") {
          element.classList.add("_style_error")
        } else {
          element.classList.remove("_style_error")   
        };
        const inputMail = document.querySelector(".input-mail")
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
      onInput()
      function onInput() {
        if (isEmailValid(inputMail.value)) {
          inputMail.classList.remove("_style_error")
        } else {
          inputMail.classList.add("_style_error")
        }
      }
      function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
      }
    

    });
  };
});