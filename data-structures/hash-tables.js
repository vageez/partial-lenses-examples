/**
 * Hash Tables
 *
 * Key Value
 *
 *  Hash tables have a predetermined size.
 *  Hash Table size of 10 BUCKETS
 *
 * [ , , , , , , , , , ]
 *
 * Each piece of data needs to be assigned to a specific bucket
 *
 * Data we want to store is of Key : Value
 * Ex. { Key: 'Name', Value: 'Phone#' }
 *
 *
 * 1. Hash our friends name
 * { key: 'Jim', value: '555-2828'}
 * Jim => 8
 * [ , , , , , , , ,{ key: 'Jim', value: '555-2828'}, ]
 *
 * { key: 'Britney', value: '555-1234'}
 * Britney => 3
 * [ , , ,{ key: 'Britney', value: '555-1234'}, , , , ,{ key: 'Jim', value: '555-2828'}, ]
 */

/**
 *  To get Data we write a GETTER Function
 *  function get('Jim') => hash('Jim') => 8 => Lookup in hash table
*/

/**
 * What happens when 2 pieces of data end up in the same bucket?
 * - COLLISION
 *
 * { key: 'John', value: '555-5147'}
 * John => 8
 * [ , , ,{ key: 'Britney', value: '555-1234'}, , , , ,{ key: 'Jim', value: '555-2828'}{ key: 'John', value: '555-5147'}, ]
 *
 * We create a linked list in our Bucket to handle collisions
 */

/**
 * Require
 * GET
 * SET
 * HASHING
 */

