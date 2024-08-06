const reverseString = function(string) {
    let stringLength = string.length;
    let stringLengthCounter = string.length;
    let fullString = "";
    for (let i = 0; i < stringLength; i++, stringLengthCounter--) {
        fullString += string.at(stringLengthCounter - 1);
    } 
    return fullString;
};

// Do not edit below this line
module.exports = reverseString;
