var END = 9007199254740992; // Math.pow(2, 53)
var START = END - 100;
var count = 0;
for (var i = START; i <= END; i++) {
    count++;
}
console.log(count);



/*
 * What does this output?
 *
 * a) 0
 * b) 100
 * c) 101
 * d) none of the above
 */











/*
 * Answer: Run it and find out
 *
 * Why?
 * ... does it enter an infinite loop
 * 2^53, aka 9007199254740992 is special
 * http://ecma262-5.com/ELS5_HTML.htm#Section_8.5
 * All due to the definition of a Number type
 *
 * 1.2345 = 12345 * 10^-4
 *            |         |
 *          mantissa   exponent
 *
 * binary
 * -------  ---------  --------
 *      63  1          sign
 * 62 - 53  111...111  exponent
 * 52 -  0  111...111  mantissa
 *
 * 2^53 is the largest exact integral value that can be represented
 *
 * var numA = Math.pow(2, 53);
 * var numB = numA + 1;
 * console.log(numA === numB);  // true
 *
 * because 2^53 is the largest value, going beyond that, it rounds down
 * So... i++ adds 1 to 2^53, which rounds down and never exits loop
 *
 * Solution
 * Don't use numbers this big :)
 * Important to just know the limitations of the Number type
 */
