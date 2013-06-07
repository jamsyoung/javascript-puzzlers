var zipCodes = new Array('93021', '02392', '20341', '08163', '32959');

for (var i = 0; i < zipCodes.length; i++) {
    if (!isNaN(parseInt(zipCodes[i])) && parseInt(zipCodes[i]) > 0) {
        console.log(parseInt(zipCodes[i]));
    }
}



/*
 * What does this output?
 *
 * a) 93021
 *    19
 *    20341
 *    32959
 * b) 93021
 *    2392
 *    20341
 *    8163
 *    32959
 * c) none of the above
 * d) it varies
 */











/*
 * Answer: d) it varies
 *
 * Why?
 * - Firefox will print a
 * - Chrome will print b
 *
 * Basically the radix is missing from the parseInt
 * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/parseInt
 *
 * If the input starts with 0x or 0X, radix 16 is used (hex)
 * If the input starts with 0, radix 8 is used (octal) OR 10 is used (decimal)
 * If the input begins with anything else, radix 10 is used
 *
 * Solution
 * Use jslint, which will tell you to always specify the radix
 *
 */
