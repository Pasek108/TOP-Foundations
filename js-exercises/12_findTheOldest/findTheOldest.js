const findTheOldest = function(people) {
    let birth = people[0].yearOfBirth
    let death = people[0].yearOfDeath || new Date().getFullYear()
    
    let max = death - birth
    let max_id = 0

    for (let i = 1; i < people.length; i++) {
        birth = people[i].yearOfBirth
        death = people[i].yearOfDeath || new Date().getFullYear()
    
        if (max < death - birth) {
            max = death - birth
            max_id = i
        }
    }

    return people[max_id]
};

// Do not edit below this line
module.exports = findTheOldest;
