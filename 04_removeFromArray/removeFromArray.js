const removeFromArray = function(arrayIn, ...exclude) {
    const arrayOut = [];
    arrayIn.forEach(element => {
        if (!exclude.includes(element)) {
            arrayOut.push(element);
        }});
    console.log(arrayOut);
    return arrayOut;
};

// Do not edit below this line
module.exports = removeFromArray;
