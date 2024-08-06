const repeatString = function(string, numberOfRepeats) {
    let fullString = "";
    if (numberOfRepeats < 0) {
        return fullString = "ERROR";
    }
    for (i = 0; i < numberOfRepeats; i++) {
        fullString += string;
    }
    return fullString;
};

// Do not edit below this line
module.exports = repeatString;
