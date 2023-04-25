//  var btn = document.getElementById("btn");
//  btn.addEventListener('click', (e) =>{
    // e.preventDefault();
// var one = parseInt(document.getElementById("one").value);
//  var two =parseInt(document.getElementById("two").value);
//  var sum =one + two;
//  console.log(sum)
//  })

//  var myDiv = document.getElementById("root");
//  var p = document.createElement("p");
//  p.innerHTML="lorem ipsum";
//  p.classList.add("two");
//  myDiv.append(p);
 
 var myButton = document.getElementById("myButton");
 var myImage = document.getElementById("myImage");
 myButton.addEventListener("click",function(){
    myImage.src = "jerry.jpg";
 })