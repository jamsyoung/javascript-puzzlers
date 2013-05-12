var name = 'World!';

(function () {
    if (typeof name === 'undefined') {
        var name = 'Mr. Bond.';
        console.log('Goodbye, ' + name);
    } else {
        console.log('Hello, ' + name);
    }
})();



/*
 * What does this output?
 *
 * a) Hello, World!
 * b) Goodbye, Mr. Bond.
 * c) Hello,
 * d) Hello, undefined
 * e) Something else? What?
 */











/*
 * Answer: Run it and find out
 *
 * Why?
 * - No block scope
 * - Hoisting
 *
 * Here is the code with hoisting applied
 *
 * var name = 'World!';
 *
 * (function () {
 *    var name;                            // declaration hoisted here
 *    if (typeof name === 'undefined') {
 *        name = 'Mr. Bond.';
 *        console.log('Goodbye, ' + name);
 *    } else {
 *        console.log('Hello, ' + name);
 *    }
 * })();
 *
 *
 * Solution
 *
 * Use jslint. This is why all variables should be declared at top of a function
 *
 */
