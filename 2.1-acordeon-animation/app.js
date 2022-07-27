const boxes = Array.from(document.querySelectorAll(".box"))


boxes.forEach((button) => {
    button.addEventListener('click', BoxHandler)

}) 

function BoxHandler(event) {
   let currentBox = event.target.closest(".box")
   const item = currentBox.childNodes
   let betaItem = item[1].childNodes
   let changeButton = betaItem[1]
   console.log(changeButton)
   const innerText = changeButton.innerHTML;
   console.log(innerText)
   if (innerText === '+') {
    changeButton.textContent = "-"
    
   } else {
    changeButton.textContent = "+"
   }
   const currentitem = item[3]
   if (currentitem.classList.contains("active")) {
        currentitem.classList.remove("active")
   }else {
    currentitem.classList.add("active")
   }

}

//сайт на русский язык переводишь, значение button меняется 



