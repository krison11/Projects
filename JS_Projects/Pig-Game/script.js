var playerScore, roundSum, i, playing, scoreSet, randomTwo;

var playerOneScore = document.querySelector("#score-0");
var playerOneCurrent = document.querySelector("#current-0");
var playerOnePanel = document.querySelector(".player-0-panel");

var playerTwoScore = document.querySelector("#score-1");
var playerTwoCurrent = document.querySelector("#current-1");
var playerTwoPanel = document.querySelector(".player-1-panel");

var btnNew = document.querySelector(".btn-new");
var btnRoll = document.querySelector(".btn-roll");
var btnHold = document.querySelector(".btn-hold");
var diceImg = document.querySelector(".dice");
var diceTwoImg = document.querySelector(".diceTwo");
var input = document.getElementById("input");

function getInput() {
  var inputValue = input.value;
  return inputValue;
}

init();
btnNew.addEventListener("click", init);
function init() {
  input.disabled = false;

  playerScore = [0, 0];
  roundSum = 0;
  i = 0;

  playing = true;
  diceImg.style.display = "none";
  diceTwoImg.style.display = "none";
  playerOneScore.textContent = "0";
  playerOneCurrent.textContent = "0";
  playerTwoScore.textContent = "0";
  playerTwoCurrent.textContent = "0";
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
btnRoll.addEventListener("click", function() {
  if (playing) {
    input.disabled = true;

    var random = Math.floor(Math.random() * 6) + 1;
    diceImg.src = "dice-" + random + ".png";
    diceImg.style.display = "block";

    randomTwo = Math.floor(Math.random() * 6) + 1;
    diceTwoImg.src = "dic-" + randomTwo + ".png";
    diceTwoImg.style.display = "block";

    var sumPerTime = random + randomTwo;
    if (sumPerTime === 12) {
      playerScore[i] = 0;
      document.querySelector("#score-" + i).textContent = playerScore[i];
      activePlayer();
    } else if (random !== 1 && randomTwo !== 1) {
      roundSum += sumPerTime;
      document.querySelector("#current-" + i).textContent = roundSum;
    } else {
      activePlayer();
    }
  }
});

btnHold.addEventListener("click", function() {
  scoreSet = getInput();
  if (playing) {
    playerScore[i] += roundSum;
    document.querySelector("#score-" + i).textContent = playerScore[i];

    if (playerScore[i] >= scoreSet) {
      document.querySelector("#name-" + i).textContent = "Winner!";
      document.querySelector(".player-" + i + "-panel").classList.add("winner");
      document
        .querySelector(".player-" + i + "-panel")
        .classList.remove("active");
      diceImg.style.display = "none";
      diceTwoImg.style.display = "none";
      playerOneCurrent.textContent = "0";
      playerTwoCurrent.textContent = "0";
      playing = false;
    } else {
      activePlayer();
    }
  }
});

function activePlayer() {
  i === 0 ? (i = 1) : (i = 0);
  roundSum = 0;
  playerOneCurrent.textContent = "0";
  playerTwoCurrent.textContent = "0";
  diceImg.style.display = "none";
  diceTwoImg.style.display = "none";
  playerOnePanel.classList.toggle("active");
  playerTwoPanel.classList.toggle("active");
}
