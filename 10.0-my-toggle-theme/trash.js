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
    
    console.log(JSON.parse(localStorage.getItem('theme')))
    Array = JSON.parse(localStorage.getItem('theme'))
}



if (document.getElementById("checkbox").checked == true) {
    console.log('dark')
    
 } else {
     console.log('light')  
 }

saveLocalStorage()

checkbox.addEventListener("change", function (e) {
    Array.shift()
    saveLocalStorage()
   
    e.preventDefault()
    if (this.checked) {
       
        const BlackStyle = 'var(--bg--color-black)'
        const WhiteStyle = 'var(--color--text-white)';

        const CurrentTheme = {
            done: true,
            ColorB: BlackStyle,
            ColorW: WhiteStyle,
            
        }
        body.style.background = `${Array}`
        Border.style.color = `${Array}`;
        document.querySelector('ul').style.color= `${Array}`
        Text.style.color = `${Array}`
        

       
        //добавляем задачу в массив с задачами
        Array.push(CurrentTheme)
        saveLocalStorage()
      
    } else {
        const BlackStyle = 'var(--bg--color-black)'
        const WhiteStyle = 'var(--color--text-white)';
        
        const CurrentTheme = {
            done: true,
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
