const findTheOldest = function(people) {
    people.forEach(
        element => {
            if (element.yearOfDeath === undefined) {
                element.age = new Date().getFullYear() - element.yearOfBirth;                
            } else {
                element.age = element.yearOfDeath - element.yearOfBirth;
            }
        }
    );
    people.sort((a, b) => b.age - a.age);
    return people[0];

    // return people.reduce(
    //     (oldest, object) => {
    //         if (object.age >= oldest.age) {
    //             oldest = object;
    //         }
    //     }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
