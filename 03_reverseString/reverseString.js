const reverseString = function(inputString) {
    let string = inputString;
    let length = string.length;
    let stringArray = [];
    for (let i = 0; i < length; i++) {
        stringArray[i] = string.charAt(i);
    }
    let reverseArray = [];
    for (let u = 0; u < length; u++) {
        reverseArray[u] = stringArray[length - (u + 1)];
    }
    let outputString = reverseArray.join("");
    return outputString;
};


// Do not edit below this line
module.exports = reverseString;

