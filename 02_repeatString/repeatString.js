const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let a = "";
    for (let i = 0; i < num; i++) {
        a += string;
    }
    return a;
};

// Do not edit below this line
module.exports = repeatString;
