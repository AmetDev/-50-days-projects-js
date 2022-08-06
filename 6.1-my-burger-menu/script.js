const BtnBurger = document.querySelector(".burger")
const popupMenu = document.getElementById("menu").cloneNode(1)
const Popup = document.querySelector(".popup")
const BurgerItem = document.querySelectorAll(".burger_item")

BtnBurger.addEventListener("click", () => {
    Popup.appendChild(popupMenu)

    Popup.classList.toggle("active")
    BurgerItem.forEach((element) => {  
        element.classList.toggle("active")
    })
})

