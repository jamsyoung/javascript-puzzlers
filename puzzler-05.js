var costOfCandy = 0.60;  // 60 cents

function calculateChange(cost, paid) {
    return paid - cost;
}

console.log(calculateChange(costOfCandy, 0.80));



/*
 * What does this output?
 *
 * a) 0
 * b) 0.2
 * c) 0.20
 * d) none of the above
 */











/*
 * Answer: Run it and find out
 *
 * Why?
 * JavaScript does not have precision math
 * 0.1 + 0.2 !== 0.3
 *
 * Due to Number type spec, values are not represented exactly
 * They are represented by a fraction in many cases
 *
 * 123.45 = 12345 * 10^-2     // exact
 * 1/3    = 0.333 * 10^0      // approximation
 *
 * .8 - .6, there are not exact representations of these values
 * approximation is used
 *
 *
 * Solution
 *
 * convert everything to integers as long as your number is < 9 quintillion (2^53)
 * 60 - 80 = 20 / 100 = 0.2 aka 20 cents
 *
 */
