var commodusRule = 'thumbsUp';
console.log('Maximus the ' + (commodusRule === 'thumbsUp') ? 'Gladiator' : 'Merciful');



/*
 * What does this output?
 *
 * a) Maximus the Gladiator
 * b) Maximus the Merciful
 * c) Something else? What?
 */










/*
 * Answer: c) Something else
 * Gladiator
 *
 * Why?
 *
 * The addition (+) operator has higher precedence over the ternary (?) operator
 *
 * 'Maximus the ' + (commodusRule === 'thumbsUp') ? 'Gladiator' : 'Merciful'
 *
 * 'Maxiums the true' ? 'Gladiator' : 'Merciful'
 *
 * 'Gladiator'
 *
 * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Operator_Precedence
 *
 * Solution:
 *
 * console.log('Maximus the ' + ((commodusRule === 'thumbsUp') ? 'Gladiator' : 'Merciful'));
 *
 * console.log('Maximus the ' + (commodusRule === 'thumbsUp' ? 'Gladiator' : 'Merciful'));
 */
