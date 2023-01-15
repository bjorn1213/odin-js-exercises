const sumAll = function(startInt, endInt) {
    // make sure start <= end
    let auxInt = 0;
    if (startInt > endInt){
        auxInt = endInt;
        endInt = startInt;
        startInt = auxInt;
    }
    
    const errorText = 'ERROR';

    // only number parameters
    if (typeof startInt !== 'number' || typeof endInt !== 'number'){
        return errorText;
    }
    // no negative numbers
    if (startInt < 0 || endInt < 0){
        return errorText;
    }

    let result = 0;

    for (let i = startInt; i <= endInt; i++){
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
