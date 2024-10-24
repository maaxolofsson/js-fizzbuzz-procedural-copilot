const answer = []

// implement fizzbuzz here. push results to answer array. loop from 1 to 15
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        answer.push("FizzBuzz");
    } else if (i % 3 === 0) {
        answer.push("Fizz");
    } else if (i % 5 === 0) {
        answer.push("Buzz");
    } else {
        answer.push(i);
    }
}

// Don't touch the code below this line, we'll cover it later
module.exports = answer
