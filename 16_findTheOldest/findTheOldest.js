const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const oldestYOB = oldest.yearOfBirth;
        let oldestYOD = oldest?.yearOfDeath;
        const currYOB = person.yearOfBirth;
        let currYOD = person?.yearOfDeath;
        if (oldestYOD === undefined) {
            oldestYOD = new Date().getFullYear();
        }
        if (currYOD === undefined) {
            currYOD = new Date().getFullYear();
        }
        return currYOD - currYOB > oldestYOD - oldestYOB ? person : oldest;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
