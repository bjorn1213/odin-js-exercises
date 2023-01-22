const a_code = "a".charCodeAt(0);
const z_code = "z".charCodeAt(0);
const A_code = "A".charCodeAt(0);
const Z_code = "Z".charCodeAt(0);

const caesar = function(str, offset) {

    let returnString = "";

    for (let i = 0; i < str.length; i++){
        returnString += convertChar(str[i], offset);
    }

    return returnString;
};

function convertChar(char, offset){
    offset %= 26;
    const charCode = char.charCodeAt(0);
    let isLowerCase = false;

    if( !(charCode >= a_code && charCode <= z_code)
        && !(charCode >= A_code && charCode <= Z_code)){
            return char;
    } else if (charCode >= a_code && charCode <= z_code){
         isLowerCase = true;
    } 

    const start = isLowerCase ? a_code : A_code;
    const end = isLowerCase ? z_code : Z_code;

    let newCode = charCode + offset;
    if (newCode < start){
        newCode += 26;
    } else if (newCode > end) {
        newCode -= 26;
    }

    return String.fromCharCode(newCode);

}

// Do not edit below this line
module.exports = caesar;
