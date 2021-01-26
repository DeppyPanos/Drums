
// Detecting Keyboard Press (gia kapoio logo leitourgei mono an mpei prin apo ola, enw h thesi tou tha htan prin apo to makeSound function)

document.addEventListener("keydown", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});

// Detecting Button Press

var buttonArray = document.querySelectorAll(".drum");
var n = buttonArray[0];
n = 0;

while (n <= buttonArray.length) {


  buttonArray[n].addEventListener("click", clickMe);

  n++;

}

function clickMe() {

  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML);

}

// function that makes sound depending on the button being clicked or key being pressed.

function makeSound(key) {

  switch (key) {
    case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;
    case "a":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;
    case "s":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;
    case "d":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      break;
    case "j":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;
    case "k":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;
    case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

    default: console.log(key);

  }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() { activeButton.classList.remove("pressed"); }, 100);
}
