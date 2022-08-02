const openBtn = document.querySelectorAll(".btn")
const modal = document.querySelectorAll(".modal")
const modalOverlay = document.querySelector(".modal-overlay")


openBtn.forEach((el) => {
    el.addEventListener("click", function(e) {
        let path = e.currentTarget.getAttribute('data-path')
        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add("modal-overlay--visible") 
    })

    modalOverlay.addEventListener('click', function(e) {
        if (e.target == modalOverlay) {
            modalOverlay.classList.remove("modal-overlay--visible")
            modal.forEach((el) => {
                el.classList.remove("modal--visible")
                
            })
        } 
    })
})