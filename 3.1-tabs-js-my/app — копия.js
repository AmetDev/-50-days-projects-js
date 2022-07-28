const Btn = document.querySelectorAll(".tabs__nav-btn")
const Tab = document.querySelectorAll(".tabs__item")

Btn.forEach((item) => {
    item.addEventListener("click", function() {
        let current = item
        let CurrentTabAtr = current.getAttribute("data-tab")
        let CurrentBtn = document.querySelector(CurrentTabAtr)
        

        Btn.forEach((item) => {
            item.classList.remove("active")
        })
        item.classList.add("active")


        Tab.forEach((item) => {
           
            item.classList.remove("active")
        })
        CurrentBtn.classList.add("active")
       
    })
})
