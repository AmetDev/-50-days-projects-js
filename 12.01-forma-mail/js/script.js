

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector("form");
  console.log(form)
  const telSelector = form.querySelector('input[type="tel"]');
  const inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(telSelector);

  form.addEventListener('sumbit', formSend);

  async function formSend(e) {
    e.preventDefault();
  }

})