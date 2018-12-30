import L from 'partial.lenses'
import { data } from '../fixture'

/**
 * 
 *  *** Modify an existing optic focus ***
 *  *** Modify like is like MAP over elements/values ***
 * 
 */

/**
 *  Modify Object Keys
 */
L.modify(
    L.keys, 
    x => x.toUpperCase(), 
    data
) //?

/**
 *  Modify Object Values
 */
L.modify(L.values, x => x.toUpperCase(), {x: 'a', y: 'b'}) //?

/**
 *  Modify Array Elements
 */
L.modify(L.elems, x => x.toUpperCase(), ['a','b']) //?


/**
 *  Modify Nested Array Elements
 */
L.modify(
    ['elements', L.elems], 
    x => x.toUpperCase(), 
    { elements : ['a','b'] }
) //?

/**
 *  Modify Nested Array Objects
 */
L.modify(
    ['elems', L.elems, 'x'],
    x => x-1,
    {elems: [{x: 1, y: 2}, {x: 3, y: 4}]}
  ) //?