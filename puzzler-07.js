(function () {
    var values = [7, 4, '13', Infinity, -9];
    for (var i = 0; i < values.length; i++) {
        if (isOdd(values[i])) {
            console.log(values[i]);
        }
    }
}());

function isOdd(num) {
    return num % 2 == 1;
}




/*
 * What does this output?
 *
 * a) 7, 13
 * b) 7, 13, Infinity, -9
 * c) 7, -9
 * d) 7, 13, -9
 */











/*
 * Answer: a) 7, 13
 *
 * Why?
 *
 * 7 % 2        = 1    // displays
 * 4 % 2        = 0    // does NOT display
 * 13 % 2       = 1    // displays
 * Infinity % 2 = NaN  // does NOT display
 * -9 % 2       = -1   // does NOT display
 *
 * Javascript mod is: (same as Java)
 * (a / b) * b + (a % b) == a
 *
 * side effect is the result will ALWAYS have the same sign as the left operand
 *
 * Solution
 *
 * Check for non equivalence to 0 instead of equivalence to 1
 * Be careful about signs when using modulus operator
 *
 */
