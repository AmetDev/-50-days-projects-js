

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
      const emailInput = document.querySelector(".input-mail")
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
        emailInput.classList.remove("_style_error")
        console.log(true)
      } else { 
        console.log(false)
        emailInput.classList.add("_style_error")
      }
    });
  };
});