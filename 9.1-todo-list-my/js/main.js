const inputMain = document.getElementById('#Input')
const Button_ples = document.querySelector('.button')
const todoList = document.querySelector(".todoList")


Button_ples.addEventListener("click", addTask)
todoList.addEventListener('click', deleteTask)

let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.forEach( function(task) {
        renderTask(task);
    })
}

function addTask(e) {
    e.preventDefault()
    const textInput = inputMain.value

    const newTask = {
        id: Date.now(),
        text: textInput,
    }

    tasks.push(newTask)
    saveLocalStorage()
    inputMain.value = ""
    inputMain.focus()
    renderTask(newTask)

   
}

function deleteTask(e) {
    e.preventDefault()
    if (e.target.dataset.action === 'delete') {
    const ParentNode = e.target.closest('.li_nav')
    const id = Number(ParentNode.id)
    
    tasks = tasks.filter( function(task) {
        if (task.id === id) {
            return false
        } else {
            return true
        }
    })

    saveLocalStorage()
    ParentNode.remove()
    } else {
        return
    }
}

function saveLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function renderTask(task) {
    let Link= document.querySelector(".todoList")
    Link.insertAdjacentHTML('beforeend', `<li id=${task.id} class="li_nav">${task.text}<button class="deleteTask" data-action='delete'>&times;</button></li>`)
    
}