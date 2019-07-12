import * as L from 'partial.lenses'
import { data } from '../fixture'

/**
 *  L.find operates on array-like objects like L.index
 */
L.remove(L.find(x => x <= 0), [3, 1, 4, 1, 5, 9, 2]) //?

/**
 *  L.find, and modify ***map***
 */
L.modify(
    [L.find(x => x.value === 'a'), 'value'],
    x => x.toUpperCase(),
    [
        { id: 3, value: 'a' },
        { id: 2, value: 'b' },
        { id: 1, value: 'c' },
        { id: 4, value: 'd' },
        { id: 5, value: 'e' }
    ]
) //?


/**
 *  *** L.find vs. L.when ***
 *  L.find user by id x => x.id === 2
 */
L.get(L.find(x => x.id === 2), data)

L.get([L.elems, L.when(x => x.id === 2)], data) //?
