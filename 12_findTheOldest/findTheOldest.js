const findTheOldest = function(array) {
    const CURRENTYEAR = new Date().getFullYear();
    const noDeathYear = array.map(function(obj) {
        if (!("yearOfDeath" in obj)) {
            obj.yearOfDeath = CURRENTYEAR;
        }
    })
    const ages = array.map(obj => obj.age = obj.yearOfDeath - obj.yearOfBirth)
    const sorted = array.sort(function(a, b){
        if (a.age > b.age) {
            return -1;
        } else if (a.age < b.age) {
            return 1;
        } else return 0;
    })
    return array[0];
};


// Do not edit below this line
module.exports = findTheOldest;
