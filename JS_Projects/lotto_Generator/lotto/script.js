// /////////////////////////////////////////
var selected = [];
var lottoValues = [];
//select your numbers(example)
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

//get lotto numbers
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
// // ******** You might be interested only in this ***********

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
compareValues();

// ******************************************
// // finding if a char repeats in a string
// function charRepeats(str) {
//   var count = 0;
//   for (var i in str) {
//     //Compare current with every other element in the string
//     if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(charRepeats("hello"));

// // checking if a string is a palindrome
// function isPal(str) {
//   return str
//     .split()
//     .reverse()
//     .join();
// }

// var a = "alamala";

// console.log(isPal(a));

// //Find the dublicates

// function dub(arr) {
//   var dub = [];
//   for (i in arr) {
//     if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
//       dub.push(arr[i]);
//     }
//   }
//   return dub;
// }

// //////////////////////////////////////

// // Numbers to chars
// function numToChar(num) {
//   var alphabet = "abcdefghijklmnopqrstuvwxyz";
//   var char = alphabet.split("");
//   var strArr = num.toString().split("");
//   console.log(strArr);
//   var output;

//   switch (strArr.length) {
//     case 1:
//       output = char[Number(strArr[0]) - 1];
//       break;
//     case 2:
//       var join = strArr.join("");

//       var num = Number(join);

//       if (num <= 26) {
//         output = char[num - 1];
//       } else {
//         var strArr = num.toString().split("");
//         output = char[Number(strArr[0]) - 1] + char[Number(strArr[1]) - 1];
//       }
//       break;
//     case 3:
//       output =
//         char[Number(strArr[0]) - 1] +
//         char[Number(strArr[1]) - 1] +
//         char[Number(strArr[2]) - 1];
//       break;
//     case 4:
//       output =
//         char[Number(strArr[0]) - 1] +
//         char[Number(strArr[1]) - 1] +
//         char[Number(strArr[2]) - 1] +
//         char[Number(strArr[3]) - 1];
//       break;
//     default:
//       output =
//         char[Number(strArr[0]) - 1] +
//         char[Number(strArr[1]) - 1] +
//         char[Number(strArr[2]) - 1] +
//         char[Number(strArr[3]) - 1] +
//         char[Number(strArr[3]) - 1];
//   }
//   console.log(output);
// }

// for (let i = 1; i <= 26; i++) {
//   numToChar(i);
// }

// function combinations() {
//   var al = "abcdefghijklmnopqrstuvwxyz";
//   var nums = [1, 2, 3, 4, 5];
//   var arr1 = [];
//   var arr2 = [];
//   var arr3 = [];
//   var arr4 = [];
//   var arr5 = [];

//   for (let i = 0; i < nums.length; i++) {
//     // 1st
//     arr1.push(al[nums[i] - 1]);

//     var str = nums
//       .toString()
//       .replace(/,/g, "")
//       .split("");

//     if (i + 1 <= nums.length) {
//       var dubs = str[i] + str[i + 1];
//       var num = Number(dubs);

//       if (num <= 26) {
//         arr2.push(al[dubs - 1]);
//       } else {
//         arr2.push(al[nums[i] - 1]);
//       }
//     }
//   }
//   console.log(arr1);
//   console.log(arr2);
// }
// combinations();
