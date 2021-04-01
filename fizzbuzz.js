function fizzbuzz(num) {

    const divisible = (divisor, num) => num % divisor == 0;

    if(num == 0) {
        return 0;
    }
    if(divisible) {
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

print(30);

module.exports = fizzbuzz