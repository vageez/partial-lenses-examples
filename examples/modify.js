import L from 'partial.lenses'
import { data } from '../fixture'

/**
 * 
 *  *** Modify an existing optic focus ***
 *  *** Modify MAPs over elements/values ***
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

/**
 *  L.modify *** As a map ***
 */
const mapper = L.modify(
    [L.elems, 'value'], 
    x => x.toUpperCase(),
    [{id: 3, value: 'a'},
    {id: 2, value: 'b'},
    {id: 1, value: 'c'},
    {id: 4, value: 'd'},
    {id: 5, value: 'e'}]   
) //?

/**
 *  L.modify *** As a reduce ***
 */
const reducer = L.modify(
    L.elems, 
    x => x.value.toUpperCase(),
    [{id: 3, value: 'a'},
    {id: 2, value: 'b'},
    {id: 1, value: 'c'},
    {id: 4, value: 'd'},
    {id: 5, value: 'e'}]
) //? 

