const repeatString = function(str, num) {
    let returnString = '';

    if (num < 0) {
        returnString = 'ERROR';
    } else {
        for (let i = 0; i < num; i++){
            returnString += str;
        }
    }

    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
