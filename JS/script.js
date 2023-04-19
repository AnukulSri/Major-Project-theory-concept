var a = document.getElementById('head')
a.style.color = 'red'
a.style.background = 'green'

var b = document.getElementById('para')
b.style.color = 'cyan'
b.style.background = 'pink'

var c = document.getElementsByClassName('main')
c[0].style.color='purple'
c[1].style.color = 'Orange'
c[1].style.fontFamily = 'cursive'


var d= document.getElementsByClassName('const')
d[0].style.color = 'Orange'
d[0].style.fontSize= '32px'

d[1].style.color = 'Green'
d[1].style.fontSize = '32px'

d[2].style.color = 'Red'
d[2].style.fontSize = '32px'

d[3].style.color='Black'
d[3].style.fontSize = '32px'

var p1 = document.getElementById("p1")
var p2 = document.getElementById("p2")
var p3 = document.getElementById("p3")

d[0].addEventListener("mouseup",(event)=>{
    p1.style.color='orange'
    p1.style.background = 'red'
    d[0].style.color = 'orange'
});

d[1].addEventListener("mouseup",(event)=>{
    p2.style.color = 'Green'
    p2.style.background = 'blue'

});
d[2].addEventListener("mouseup",(event)=>{
    p3.style.color = 'Red'
    p3.style.background = 'green'

});

d[3].addEventListener('mouseup',(event)=>{
    p1.style.color = 'black'
    p2.style.color = 'black'
    p3.style.color = 'black'
    p1.style.background = 'none'
    p2.style.background = 'none'
    p3.style.background = 'none'
    d[0].style.color='black'
    d[1].style.color='black'
    d[2].style.color='black'


})




