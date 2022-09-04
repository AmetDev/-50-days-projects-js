

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("form")
  form.addEventListener('click', formSend);

   async function formSend(e) {
    e.preventDefault();
    let inputValudate = document.querySelectorAll("._req")
    inputValudate.forEach(function(element) {
      let inputValue  = element.value
      if(inputValue === "") {
        element.classList.add("error")
          if (element.classList.contains("error")) {
            element.classList.add("_style_error")
      }
      }
    })
  }
})