// Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {

    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}
randomRangeNumber(5, 19);

console.log(randomRangeNumber(5, 19));
// Only change code above this line
module.exports = randomRangeNumber;