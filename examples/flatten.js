import * as L from 'partial.lenses'
import { data } from '../fixture'

/**
 * 
 *  L.flatten takes a nested array and flattens it.
 * 
 */

const nestedArray = [[1,3,[5]], 3, [[2]], [6], [[[9]]]]

/**
 *  Creates a single string
 */
L.join(' ', L.flatten, nestedArray) //?

/**
 *  Creates an array of flattened values since we use L.modify which acts like a map over each item in the array
 */
L.modify(
    L.elems,
    L.join('', L.flatten),
    nestedArray,
) //?