
// on screen key pressid
var drumcount = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumcount; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click", function () {

      var innerbuttonhtml = this.innerHTML;
      soundj(innerbuttonhtml);
      animatebtn(innerbuttonhtml);



   })
}

// keyboard pressid
document.addEventListener("keydown", function (event) {
   soundj(event.key);
   animatebtn(event.key);
})

//soundplay func
function soundj(key) {
   switch (key) {
      case "w":
         var tomone = new Audio("sounds/tom-1.mp3");
         tomone.play();
         break;

      case "a":
         var tomone = new Audio("sounds/tom-2.mp3");
         tomone.play();
         break;

      case "s":
         var tomone = new Audio("sounds/tom-3.mp3");
         tomone.play();
         break;

      case "d":
         var tomone = new Audio("sounds/tom-4.mp3");
         tomone.play();
         break;

      case "j":
         var tomone = new Audio("sounds/snare.mp3");
         tomone.play();
         break;

      case "k":
         var tomone = new Audio("sounds/crash.mp3");
         tomone.play();
         break;

      case "l":
         var tomone = new Audio("sounds/kick-bass.mp3");
         tomone.play();
         break;

      default: console.log();

   }

}

function animatebtn(buttonanim) {
   
   var activebuttn = document.querySelector("." + buttonanim);
   
   activebuttn.classList.add("uponpress");
   
   setTimeout( function(){
      activebuttn.classList.remove("uponpress");
   },100)



}
























document.getElementById("year").innerHTML = new Date().getFullYear();