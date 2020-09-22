/*
* Daniel Trupp
*  Ziplist WOD
 */

function ziplist(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return 'Error, lists are different lengths!';
  }
  let temparr = [];
  for (let i = 0; i < arr1.length; i++) {
    temparr.push(arr1[i]);
    temparr.push(arr2[i]);
  }
  return temparr;
}

const arr = [1,2,3];
const arr3 = ['a','b','c'];

console.log(ziplist(arr, arr3));

function zipListTheSimpleWay(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return 'Error, lists are different lengths!';
  }
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipListTheSimpleWay(arr, arr3));