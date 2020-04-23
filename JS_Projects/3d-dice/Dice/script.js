//1) accesing the elements
var rollingDice = document.getElementById("rollingDice");
var message = document.getElementById("message");
var clickButton = document.getElementById("button");
var sound = document.getElementById("sound");
var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");
var dice3 = document.getElementById("dice3");
var dice4 = document.getElementById("dice4");
var dice5 = document.getElementById("dice5");
var dice6 = document.getElementById("dice6");

// 2) main function create a random number and give different outcomes depending on the given number
function mainFunction() {
  //Play sound (delay 1sec)
  function playSound() {
    sound.play();
  }
  setTimeout(playSound, 1000);

  // reload page and delay reload
  function reloadPage() {
    location.reload();
  }
  setTimeout(reloadPage, 13000);

  //Remove button after click
  function removeButton() {
    clickButton.remove();
  }
  removeButton();

  //Start the main operation
  var random = Math.floor(Math.random() * 6) + 1;

  rollingDice.style.animation = "roll 4s  1";
  message.style.animation = "transform 2s 6s forwards 1";

  if (random === 1) {
    dice1.style.animation = "visible 2s 4s 1";
    message.innerHTML = "You got " + random + "!";
  } else if (random === 2) {
    dice2.style.animation = "visible 2s 4s 1";
    message.innerHTML = "You got " + random + "!";
  } else if (random === 3) {
    dice3.style.animation = "visible 2s 4s 1";
    message.innerHTML = "You got " + random + "!";
  } else if (random === 4) {
    dice4.style.animation = "visible 2s 4s 1";
    message.innerHTML = "You got " + random + "!";
  } else if (random === 5) {
    dice5.style.animation = "visible 2s 4s 1";
    message.innerHTML = "You got " + random + "!";
  } else if (random === 6) {
    dice6.style.animation = "visible 2s 4s 1";
    message.innerHTML = "You got " + random + "!";
  }
}

// Execute onclick
clickButton.addEventListener("click", mainFunction);
