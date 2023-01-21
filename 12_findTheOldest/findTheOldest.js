const findTheOldest = function(peopleArray) {

    return peopleArray.reduce(
        (oldestPerson, currentPerson) => {
            return calcAge(oldestPerson) > calcAge(currentPerson) ? oldestPerson : currentPerson;
        },
        peopleArray[0]
    )

};

function calcAge(person){
    let age;
    if (!person['yearOfDeath']){
        age = new Date().getFullYear() - person['yearOfBirth'];
    } else {
        age = person['yearOfDeath'] - person['yearOfBirth'];
    }

    return age
}

// Do not edit below this line
module.exports = findTheOldest;
