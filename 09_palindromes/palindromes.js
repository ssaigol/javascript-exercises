const palindromes = function (string) {
    const arr = string.split('');
    const forwardArr = arr.filter(char => char != " " && char != "," && char != "." && char != "!");
    const backwardsArr = forwardArr.toReversed();
    var isPalindrome = false;
    if (forwardArr.join("").toLowerCase() === backwardsArr.join("").toLowerCase()) {
        return true;
    } else return false;
 };


// Do not edit below this line
module.exports = palindromes;
