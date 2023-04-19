var h = document.getElementById('happy')
var lv = document.getElementById('love')
var l = document.getElementById('laugh')
var a = document.getElementById('angry')

var h_img = document.getElementById('happy_img')
var lv_img = document.getElementById('love_img')
var l_img = document.getElementById('laugh_img')
var a_img = document.getElementById('angry_img')

h.addEventListener("mouseup", (event)=>{
    h_img.style.display = "block"
    lv_img.style.display = 'none'
    l_img.style.display = 'none'
    a_img.style.display = 'none'

});
lv.addEventListener("mouseup",(event)=>{
    a_img.style.display = 'none'
    h_img.style.display = "none"
    lv_img.style.display = 'block'
    l_img.style.display = 'none'

});
l.addEventListener('mousedown',(event)=>{
    l_img.style.display = 'block'
    h_img.style.display = "none"
    a_img.style.display = 'none'
    lv_img.style.display = 'none'


});
a.addEventListener("mouseup",(event)=>{
    a_img.style.display = 'block'
    h_img.style.display = "none"
    lv_img.style.display = 'none'
    l_img.style.display = 'none'

})
