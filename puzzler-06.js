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
 * a) Case A
 * b) Case B
 * c) Do not know!
 */











/*
 * Answer: c) Do not know!
 *
 *
 * Why?
 * The switch statement uses true equality operator (===) internally
 * The Object (new String()) does not === any 'string'
 *
 */
