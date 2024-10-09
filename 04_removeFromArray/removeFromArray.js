const removeFromArray = function(array, ...args) {
    const arrayOne = array;
    const arrayTwo = args;
    const arrayThree = [];
    let length = arrayOne.length;

    for (let i = 0; i < length; i++) {
        if (!arrayTwo.includes(arrayOne[i])) {
            arrayThree.push(arrayOne[i]);
        }
    }
    return arrayThree;
};

// Do not edit below this line
module.exports = removeFromArray;



/*
1. Declare an array and store first function parameter in it Array A
2. Declare an array and store any subsequent paramters in it Array B
3. Declare an empty array which will be the return value of function Array C
4. Iterate through each element of Array A and check if it exists in Array B
    4.5 If it does not exist, add the element to Array c
5. Return Array C
*/