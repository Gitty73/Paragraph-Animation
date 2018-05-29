var para = document.querySelector("p");
var btn = document.querySelector("button");
var stop = document.querySelector("#stop");

btn.addEventListener("click", function() {
  randomColor = randomColors();
  para.textContent = "Hey My Color Is Changing And Size As Well...Hurray!";
  para.style.color = randomColor;
  para.classList.add("size");
  btn.style.background = randomColor;
  stop.style.background = "";
  stop.textContent = "Stop It";
});

stop.addEventListener("click", function() {
  para.classList.remove("size");
  btn.style.background = "";
  para.style.color = "red";
  para.textContent = "A Cruel Button Just Stopped Me!  :(";
  stop.textContent = "Ha Ha Ha :)";
  btn.textContent = "Click Me Again";
  stop.style.background = "tomato";
});

function randomColors(){
return '#' + (function color(colors){
  return (colors += 
   [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
  && (colors.length == 6)? colors: color(colors);
})('');
}