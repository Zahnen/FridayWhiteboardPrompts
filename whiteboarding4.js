/*Question #4: Checking for Uniqueness
Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

Example
Input: "hello"

Output: false

Input: "copyright"

Output: true*/

function uniqueCheck (str) {
  let checkAgainst = '';
  for (var i = 0; i < str.length; i++) {
    if (checkAgainst.includes(str[i])) {
    } else {
      checkAgainst += str[i]
    }
  }
  if (str != checkAgainst) {
    return false;
  } else {
    return true;
  }
}
console.log(uniqueCheck("hello"));
console.log(uniqueCheck("copyright"));
console.log(uniqueCheck("interview"));
console.log(uniqueCheck("whiteboard"));
console.log(uniqueCheck("abba"));