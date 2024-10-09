const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a < 0 || b < 0) return "ERROR";
    if (isNaN(a) || isNaN(b)) return "ERROR";

    let sum = a + b;
    let start;
    let end;
    
    if (a < b) {
        start = a;
        end = b;
    } else {
        start = b;
        end = a;
    }
 
    let difference = end - start;
    for (let i = 1; i < difference; i++) {
        sum += start + i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;


/*
1. Set function to take 2 parameters
2. Ensure both parameters are positive integers, if not return ERROR
3. Declare and store arguments in variables start and end
4. Declare variable sum which will be return at the end - initiate to start + end
5. Figure out how many integers are between start and end (subtract start from end)
6. For each integer between, add to sum
7. Return sum
*/