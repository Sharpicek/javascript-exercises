const sumAll = function(firstNumber, secondNumber) {
    if (firstNumber < 0 || secondNumber < 0 || firstNumber - Math.floor(firstNumber) != 0 
    || secondNumber - Math.floor(secondNumber) != 0 || typeof firstNumber != 'number' || typeof secondNumber != 'number') {
        return "ERROR";
    }
    let finalSum = 0;
    let biggerNumber, smallerNumber;
    if (firstNumber > secondNumber) {
        biggerNumber = firstNumber;
        smallerNumber = secondNumber;
    } else {
        biggerNumber = secondNumber;
        smallerNumber = firstNumber;
    }

    for (let i = smallerNumber; i <= biggerNumber; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
