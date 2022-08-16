const checkbox = document.querySelector(".checkbox1");
const body = document.querySelector('.body')
const li = document.querySelectorAll('li')
const Text = document.querySelector('.text_content')
const Border = document.querySelector('.header_toggle')

let Array = []

function saveLocalStorage() {
    localStorage.setItem('theme', JSON.stringify(Array))
}
if (localStorage.getItem('theme')) {
    JSON.parse(localStorage.getItem('theme'))
    Array = JSON.parse(localStorage.getItem('theme'))
    console.log(Array)
    Array.forEach( function(arr) {
        if( arr.done == true) {
            renderDark(arr)
        } else {
            renderLight(arr)
        }
       
    })
}

function save(){
    var checkbox = document.getElementById('checkbox');
    localStorage.setItem('checkbox', checkbox.checked);
}
function load(){    
    var checked = JSON.parse(localStorage.getItem('checkbox'));
    document.getElementById("checkbox").checked = checked;
}
load()


saveLocalStorage()

checkbox.addEventListener("change", function (e) {
    Array.shift()
    e.preventDefault()
    if (this.checked) {
        const BlackStyle = 'var(--bg--color-black)'
        const WhiteStyle = 'var(--color--text-white)';

        const CurrentTheme = {
            done: true,
            ColorB: BlackStyle,
            ColorW: WhiteStyle,
            
        }
        body.style.background = `${CurrentTheme.ColorB}`
        Border.style.color = `${CurrentTheme.ColorW}`;
        document.querySelector('ul').style.color= `${CurrentTheme.ColorW}`
        Text.style.color = `${CurrentTheme.ColorW}`
        

       
        //добавляем задачу в массив с задачами
        Array.push(CurrentTheme)
        saveLocalStorage()
      
    } else {
        const BlackStyle = 'var(--bg--color-black)'
        const WhiteStyle = 'var(--color--text-white)';
        
        const CurrentTheme = {
            done: false,
            ColorW: WhiteStyle,
            ColorB: BlackStyle,
        }
       
     
        body.style.background = `${CurrentTheme.ColorW}`
        Border.style.color = `${CurrentTheme.ColorB}`;
        document.querySelector('ul').style.color= `${CurrentTheme.ColorB}`
        Text.style.color = `${CurrentTheme.ColorB}`
        
        
        //добавляем задачу в массив с задачами
        Array.push(CurrentTheme)
        saveLocalStorage()
      
    }

})

function renderDark(arr) {
    body.style.background = `${arr.ColorB}`
    Border.style.color = `${arr.ColorW}`;
    document.querySelector('ul').style.color= `${arr.ColorW}`
    Text.style.color = `${arr.ColorW}`
}

function renderLight(arr) {
    body.style.background = `${arr.ColorW}`
    Border.style.color = `${arr.ColorB}`;
    document.querySelector('ul').style.color= `${arr.ColorB}`
    Text.style.color = `${arr.ColorB}`
}