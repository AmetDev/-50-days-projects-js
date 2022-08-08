const btn = document.querySelectorAll(".button")
const menu = document.querySelectorAll(".menu")
console.log(btn)

btn.forEach((el) => {
    el.addEventListener("click", (e) => {

       
        let curBtn = e.currentTarget;
        curBtn.classList.toggle("active")
        let menu = curBtn.closest(".menu")

        let link = menu.querySelector(".out_link")

        if (! link.classList.contains("active")) {
            link.classList.add("active")
        } else {
            link.classList.remove("active")
        }
    })

    document.addEventListener('click', function(e) {
        if(! e.target.closest(".menu")) {
            menu.forEach((el) => {
                let link = el.querySelector(".out_link");
                let activeBtn = el.querySelector(".button");
                link.classList.remove("active")
                activeBtn.classList.remove("active")
            })
        } 
        
    })
})



