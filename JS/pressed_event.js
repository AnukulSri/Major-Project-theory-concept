var g = document.getElementById('theme')
var but = document.getElementById('change')


but.addEventListener('mousedown',(event)=>{
   but.style.scale='0.5'
})
but.addEventListener('mouseup',(event)=>{
    but.style.scale='0.8'
    g.style.background='#454545'
    g.style.color='white'

    but.style.background='white'
    but.style.color='black'
    but.innerHTML = "Light Theme"
    but.style.transform = 'translateX(-80px)'
})
but.addEventListener('mousedown',(event)=>{
    but.style.scale='0.8'
    g.style.background='white'
    g.style.color='black'

    but.style.background='Black'
    but.style.color='white'
    but.innerHTML = "Dark Theme"
    but.style.transform = 'translateX(80px)'
})
