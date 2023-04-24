 var btn = document.getElementById("btn");
 btn.addEventListener('click', (e) =>{
    e.preventDefault();
var one = parseInt(document.getElementById("one").value);
 var two =parseInt(document.getElementById("two").value);
 var sum =one + two;
 console.log(sum)
 })
 