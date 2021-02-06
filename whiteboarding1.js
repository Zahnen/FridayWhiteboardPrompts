/*Question #1: Turning Strings to URLs
URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

Example
Input: "Jasmine Ann Jones"

Output: "Jasmine%20Ann%20Jones"*/

function stringToURL (str) {
  let stringURL = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
      stringURL += "%20"
    } else {
      stringURL += str[i]; 
    }
  }
  return stringURL;
}

function recursiveStringToURL(str) {
  if (str.length === 0) {
    return "";
  } else if (str[0] === ' ') {
    return ("%20" + recursiveStringToURL(str.substring(1)));
  } else {
    return (str[0] + recursiveStringToURL(str.substring(1)));
  }
}

console.log(stringToURL("Jasmine Ann Jones"));
console.log(recursiveStringToURL("Jasmine Ann Jones"));