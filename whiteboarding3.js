/*Question #3: Compressing Strings
Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

Example
Input: "aaabccdddda"

Output: "3ab2c4da" */

function stringCompress (str) {
  let compressedStr = "";
  let dupeCount = 0;
  for (var i = 0; i < str.length; i++) {
    dupeCount++;
    if (str[i] != str[i+1]) {
      if (dupeCount > 1){
        compressedStr += dupeCount + str[i];
      } else {
        compressedStr += str[i]
      }
      dupeCount = 0;
    }
  }
  return compressedStr;
}

function recursiveStringCompress(str, i = -1, dupe = 0, compressedStr = ''){
  i ++;
  dupe ++;
  if(i === str.length){
    return compressedStr;
    } else {
      if (str[i] != str[i+1]){
        if (dupe > 1){
        compressedStr += dupe + str[i];
        return recursiveStringCompress(str, i, 0, compressedStr);
        } else {
        compressedStr += str[i];
        return recursiveStringCompress(str, i, 0, compressedStr);
        }
      } else {
        compressedStr;                                 
        return recursiveStringCompress(str, i, dupe, compressedStr);
      }
  }
}
console.log(stringCompress("aaabccdddda"));
console.log(recursiveStringCompress("aaabccdddda"));