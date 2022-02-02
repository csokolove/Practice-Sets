// Test arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 2, 1];

/**
 * Return a new array where each element at index of i of the new array is the product of all numbers in the given array except one at i.
 * @param {Array} array - An array of numbers to be multiplied by
 * @returns An array of numbers of which are the products of all indices of an array except the index of i
 */
function evalArrayI(array) {
    array.forEach(value => {
        if(typeof(value) !== 'number') throw new TypeError("All values of the array must be numbers");
    })
    let currProd = 1;
    let prodArr = [];
    for(let i = 0; i < array.length; i++) {
        currProd = 1;
        let tempArr = [];
        for(let j = 0; j < array.length; j++) {
            tempArr.push(array[j]);
        }
        tempArr.splice(i, 1);
        tempArr.forEach(value => {
            currProd *= value;
        })
        prodArr.push(currProd);
    }

    return prodArr;
}

// Test cases
console.log(evalArrayI(arr1)); // Expected output: [120, 60, 40, 30, 24]
console.log(evalArrayI(arr2)); // Expected output: [2, 3, 6]