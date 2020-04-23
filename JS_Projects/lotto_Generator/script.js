//get 7 random numbers store them in an array
//and sort out numbers that repeat.
function getValues() {
  var arr = [];
  for (var i = 0; i < 7; i++) {
    var random = Math.floor(Math.random() * 25) + 1;
    arr[i] = random;
    for (var j = i - 1; j >= 0; j--) {
      if (arr[i] === arr[j]) {
        arr.splice(i, 1);
        i--;
      }
    }
    document.querySelector(".item-" + arr[i]).textContent = arr[i];
  }
}

//onclick call the function above and disable button.
document.querySelector("#play").addEventListener("click", function() {
  getValues();
  document.querySelector("#play").disabled = true;
});

//onclick clear all the content and enable the play btn again.
document.querySelector("#reset").addEventListener("click", function() {
  // for (let i = 1; i <= 25; i++) {
  //   document.querySelector(".item-" + i).textContent = "";
  // }
  var clear = document.querySelectorAll(".items");
  clear.forEach(function(el) {
    el.textContent = "";
  });
  document.querySelector("#play").disabled = false;
});
