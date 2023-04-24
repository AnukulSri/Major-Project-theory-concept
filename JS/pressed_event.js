var g = document.getElementById('theme')
var but = document.getElementById('change')


but.addEventListener('mousedown',(event)=>{
   but.style.scale='0.5'
})
but.addEventListener('mouseup',(event)=>{
    but.style.scale='0.8'
    g.style.background='gray'
    g.style.color='white'
    document.getElementById('change').style.background='white'
    document.getElementById('change').style.color='black'
    document.getElementById("change").innerHTML = "Light Theme";
    document.getElementById('change').style.transform = 'translateX(-80px)'
})

