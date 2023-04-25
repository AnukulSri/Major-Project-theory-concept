document.addEventListener('keyup', (event) => {
    if (event.keyCode == 13) {
        var c = document.getElementById("inp").value;
        var res = eval(c);
        var det = document.getElementById('d')
        det.innerHTML = res;
    }
})

var btn = document.getElementById("btn")
btn.addEventListener('mouseup',(event)=>{
    var c = document.getElementById("inp").value;
    var res = eval(c);
    var det = document.getElementById('d')
    det.innerHTML = res;
})


