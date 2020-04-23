/////////////////////////////////////////
var selected, lottoValues;
//start fresh
init();
//select your numbers.
function selectNum() {
  for (var i = 0; i < 7; i++) {
    let r = Math.floor(Math.random() * 35) + 1;
    if (selected.indexOf(r) === -1) {
      selected.push(r);
    } else {
      i--;
    }
  }
  console.log(`Your numbers are: ${selected}`);
  return selected;
}
//get lotto values
function getLottoValues() {
  for (var i = 0; i < 7; i++) {
    let r = Math.floor(Math.random() * 35) + 1;
    if (lottoValues.indexOf(r) === -1) {
      lottoValues.push(r);
    } else {
      i--;
    }
  }
  console.log(`The lotto numbers are: ${lottoValues}`);
  return lottoValues;
}

// ******** You might be interested only in this ***********

//all selected items will be red, unless you get a match then change the style of the particular item.
function compareValues() {
  var sel = selectNum();
  var lotto = getLottoValues();
  for (let i = 0; i < sel.length; i++) {
    for (let j = 0; j < lotto.length; j++) {
      if (sel[i] === lotto[j]) {
        //change the style
        sel[i] = sel[i].toString();
      }
    }
  }
  //in the console matched nums will appear as strings
  console.log(sel);
  return sel;
}
// ******************************************

//once you have changed the style of the selected array. then display it on the screen
compareValues(); //'click event'

//click event and put it at the top
function init() {
  // 1. empty the arrays
  selected = [];
  lottoValues = [];

  // 2.loop over the items and clear the content
  // 3.set the  style of items back to normal
}
