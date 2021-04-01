const fizzbuzz = require('./fizzbuzz');

describe("fizzbuzz", () => {
    test('should print 1 if they recive 1', () => {
        const expected = 1;
        const result = fizzbuzz(1)
        expect(expected).toBe(result);
    });

    test('should print fizz if they recive 3', () => {
        const expected = 'fizz';
        const result = fizzbuzz(3);
        expect(expected)
    })
});