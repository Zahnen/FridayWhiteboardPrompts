/*Question #2: Array Deduping
Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

Example
Input: [7, 9, "hi", 12, "hi" 7, 53]

Output: [7, 9, "hi", 12, 53]*/

function removeDupes (array) {
  let noDupeArray = [];
  for (var i = 0; i < array.length; i++) {
    if (noDupeArray.includes(array[i])) {
    } else {
      noDupeArray.push(array[i])
    }
  }
  return noDupeArray;
}

function recursiveRemoveDupes(arr, i = -1 , noDupeArray = [arr[0]]){
  i++;
  if(arr.length <= i){
    return noDupeArray;
  } else {
    if(noDupeArray.indexOf(arr[i]) !== -1){
      return recursiveRemoveDupes(arr, i, noDupeArray);
    } else {
      let out = noDupeArray.concat(arr[i]);
      return recursiveRemoveDupes(arr, i, out)
    }
  }
};

console.log(removeDupes([7, 9, "hi", 12, "hi", 7, 53]));
console.log(recursiveRemoveDupes([7, 9, "hi", 12, "hi", 7, 53]));