

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("form")
  form.addEventListener('sumbit', formSend);

   function formSend(e) {
    e.preventDefault();
  }
})