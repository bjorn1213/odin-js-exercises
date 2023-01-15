const reverseString = function(str) {
    let strArray = str.split('');
    let reversedArray = strArray.reverse();
    let returnString = '';

    for (char of reversedArray){
        returnString += char;
    }

    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
