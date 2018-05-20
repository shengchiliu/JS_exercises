var arr = [32, 33, 16, 40];


function replace(array, relationship, value_old, value_new) {

    switch (relationship) {
        case "larger":
            var values = array.filter(function (element) {
                return element > value_old;
            });
            break;
        case "equal":
            var values = array.filter(function (element) {
                return element == value_old;
            });
            break;
        case "smaller":
            var values = array.filter(function (element) {
                return element < value_old;
            });
            break;
    }


    for (let i = 0; i < values.length; i++) {
        array[array.indexOf(values[i])] = value_new;
    }

    return array
}

replace(arr, "smaller", 33, 123)
console.log(arr)    // [123, 33, 123, 40]

var arr = [32, 33, 16, 40];
arr.fill(123, 1, 3);
console.log(arr)    // [32, 123, 123, 40]
