const palindromes = function (str) {
    let strippedStr = stripper(str);
    return isPalindrome(strippedStr)
};

function isPalindrome(str){
    const len = str.length;
    if (len <= 1) {
        return true;
    }

    const first = str[0];
    const last = str[len-1];
    if (first === last) {
        return isPalindrome(str.slice(1,-1));
    } else {
        return false;
    }
};

function stripper(str){
    let strippedStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
                        .replace(/\s{1,}/g,"")
                        .toLowerCase();

    return strippedStr;
}

// Do not edit below this line
module.exports = palindromes;
