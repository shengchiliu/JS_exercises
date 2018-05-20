var arr = [3, 10, 18, 18];


// Find first index of element in array
let idx = arr.findIndex(function (element) {
    return element >= 18;
});

console.log(idx)


// Find index of all occurrences of element in array
function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

var indexes = getAllIndexes(arr, 18);
console.log(indexes)


// Pick up the elements
array = [1, 2, 3, 4, 4, 5, 6, 7];
array.filter(array => array == 4);
console.log(array.filter(array => array == 4))  // [ 4, 4 ]