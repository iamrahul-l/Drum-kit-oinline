
# 🥁 Drum Kit

A fun and interactive web application that lets users play drum sounds either by clicking on buttons or pressing the corresponding keys on their keyboard. This project provides both auditory and visual feedback to enhance the user experience.

## Key Features:

- **On-Screen Button Interaction**:  
  Users can click on the on-screen buttons to play specific drum sounds.

- **Keyboard Key Press Interaction**:  
  Users can also use their keyboard to play the sounds by pressing the corresponding keys (`w`, `a`, `s`, `d`, `j`, `k`, `l`).

- **Visual Feedback**:  
  When a button is pressed (either through a click or keypress), it gets temporarily animated to give users visual feedback.

---

## Code Explanation:

### 1. Button Click Listener:
The script adds a click event listener to all the buttons with the class `.drum`.  
When a button is clicked, it triggers the `soundj()` function to play the corresponding sound, and the `animatebtn()` function to animate the pressed button.

```javascript
var drumcount = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumcount; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var innerbuttonhtml = this.innerHTML;
      soundj(innerbuttonhtml);
      animatebtn(innerbuttonhtml);
   })
}
```

### 2. Keyboard Press Listener:
The script listens for keyboard key presses using `document.addEventListener("keydown")`.  
When a specific key (`w`, `a`, `s`, `d`, `j`, `k`, `l`) is pressed, it plays the corresponding sound and animates the associated button.

```javascript
document.addEventListener("keydown", function (event) {
   soundj(event.key);
   animatebtn(event.key);
})
```

### 3. Sound Play Function (`soundj()`):
This function takes a key (either from a click or key press) and matches it to the corresponding sound file. It plays the sound using JavaScript’s `Audio` object.

```javascript
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
```

### 4. Button Animation Function (`animatebtn()`):
This function adds a CSS class (`uponpress`) to the button that was pressed, creating a visual animation. After 100 milliseconds, it removes the class to revert the button to its original state.

```javascript
function animatebtn(buttonanim) {
   var activebuttn = document.querySelector("." + buttonanim);
   activebuttn.classList.add("uponpress");

   setTimeout(function(){
      activebuttn.classList.remove("uponpress");
   }, 100);
}
```
### 5. View Live: https://iamrahul-l.github.io/Drum-kit-oinline

