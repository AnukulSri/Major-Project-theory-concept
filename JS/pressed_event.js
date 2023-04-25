var g = document.getElementById('theme')
var but = document.getElementById('change')

var a = 0;
but.addEventListener('mousedown', (event) => {
    but.style.scale = '0.5'
})
but.addEventListener('mouseup', (event) => {
    if (a == 0) {
        a = 1
        but.style.scale = '0.8'
        g.style.background = '#454545'
        g.style.color = 'white'

        but.style.background = 'white'
        but.style.color = 'black'
        but.innerHTML = "Light Theme"
        but.style.transform = 'translateX(-80px)'
    }
    else {
        a = 0
        but.style.scale = '0.8'
        g.style.background = 'white'
        g.style.color = 'black'

        but.style.background = 'Black'
        but.style.color = 'white'
        but.innerHTML = "Dark Theme"
        but.style.transform = 'translateX(80px)'
    }
});

var text = document.getElementById("text")
var clear = document.getElementById('clear')

// text.innerHTML='hello'

document.addEventListener("keyup", (event) => { //13 is ascii value for enter key
    if (event.keyCode == 13) // by using keycode we can get ascii value of any key. here we are checking if enter key is pressed then clear the textbox.
    {
        text.innerHTML = ""
    }
    else {
        text.innerHTML += event.key
    }
})

clear.addEventListener("mouseup", (event) => {
    text.innerHTML = ""
})