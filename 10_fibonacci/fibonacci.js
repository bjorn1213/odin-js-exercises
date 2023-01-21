let fibs = {
    0: 1,
    1: 1,
    2: 1,
};

const fibonacci = function(num) {

    // input check
    if (typeof num === 'string'){
        num = +num;
    }
    if (num < 0) {
        return "OOPS"
    }

    let answer
    
    if (!fibs[num]) {
        answer = fibonacci(num-1) + fibonacci(num-2);
        fibs[num] = answer;
    } else {
        answer = fibs[num];
    }
    
    return answer
};


// Do not edit below this line
module.exports = fibonacci;
