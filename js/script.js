var dinosaur = document.getElementById("dinosaur");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(dinosaur.classList == "animate"){return}
    dinosaur.classList.add("animate");
    setTimeout(function(){
        dinosaur.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let dinosaurTop = parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && dinosaurTop>=330){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);