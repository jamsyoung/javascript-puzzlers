function showCase(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;

    case 'B':
        console.log('Case B');
        break;

    default:
        console.log('Do not know!');
    }
}

showCase(new String('A'));




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
 * The switch internally does strict equality ===
 *
 * console.log(typeof 'A');                 // string
 * console.log(typeof new String('A'));     // object
 *
 * console.log('A' === new String('A'));    // false
 *
 * Solution
 *
 * Know your types.  Do not pass in objects to switch statements
 * jslint will catch this as well.
 * Always assume strict equality.
 *
 */
