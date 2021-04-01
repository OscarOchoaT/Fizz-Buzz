function fizzbuzz(num) {
    if(num % 3 == 0 && num % 5 == 0) {
        return "fizzbuzz";
    }
    if (num % 3 == 0) {
        return "fizz";
    }
    if (num % 5 == 0) {
        return "buzz";
    }
    return num;
}

function print(num) {
    for(let i=0; i < num; i++) {
        console.log(`${i}: ${fizzbuzz(i)}`);
    }
}

print(16)

module.exports = fizzbuzz