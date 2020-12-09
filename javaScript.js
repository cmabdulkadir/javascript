var box = document.getElementById("box")
var growBtn = document.getElementById("grow")
var blueBtn = document.getElementById("blue")
var fadeBtn = document.getElementById("Fade")
var resetBtn = document.getElementById("reset")

document.getElementById("growBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "300px";
    document.getElementById("box").style.width = "300px";
});

document.getElementById("blueBtn").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

document.getElementById("fadeBtn").addEventListener("click",function(){
    document.getElementById("box").style.opacity = 0.1;
    ;

})

document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = 50;
});



