var box = document.getElementById("box")
var growBtn = document.getElementById("grow")
var blueBtn = document.getElementById("blue")
var fadeBtn = document.getElementById("fade")
var resetBtn = document.getElementById("reset")


growBtn.addEventListener("click", function(){

    box.style.height = "300px";
    box.style.width = "300px";
});

blueBtn.addEventListener("click", function(){

    box.style.backgroundColor = "blue";

});

fadeBtn.addEventListener("click",function(){
    box.style.opacity = 0.1;
    

});

resetBtn.addEventListener("click", function(){
console.log("button")
    box.style.height = "150px";
    box.style.width = "150px";
    box.style.backgroundColor = "orange";
    box.style.opacity = 50;

});



