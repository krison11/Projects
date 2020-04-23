var sound = function() {
  var r = Math.floor(Math.random() * 3) + 1;
  var audio = new Audio("dice" + r + ".wav");
  audio.play();
};

var getDice = function() {
  var r = Math.floor(Math.random() * 6) + 1;
  document.getElementById("showHere").innerHTML =
    "<img src='dice-" + r + ".png' onload='sound()' id='newID'>";
};

document.querySelector("#btn").addEventListener("click", getDice);
