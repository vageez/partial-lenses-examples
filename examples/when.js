import L from 'partial.lenses'
import { data } from '../fixture'

/**
 *  Example using L.when to filter results.
 */
const malesOver40 = L.collect(
    [
        L.elems, 
        L.when(x => x.gender==='male'), 
        L.when(x => x.age > 40)
    ]
) 
/**
 *  Vanilla
 */
data.filter(x => x.age > 40)
    .filter(x => x.gender==='male') //?

/**
 *  Example using L.when to filter results.
 */
const malesOver40ByName = L.collectAs(
    (value) => ({name : value.name}),
    [
        L.elems, 
        L.when(x => x.gender==='male'), 
        L.when(x => x.age > 40)
    ]
) 

/**
 *  Example
 */
malesOver40(data) //?
malesOver40ByName(data) //?

/**
 *  Vanilla
 */
data.filter(x => x.age > 40)
    .filter(x => x.gender==='male')
    .map(x => ({name : x.name})) //?



/**
 *  ***L.when vs. L.find***
 *  L.when user by id x => x.id === 2
 */
L.get([L.elems, L.when(x => x.id === 2)], data) //?

L.get(L.find(x => x.id === 2), data) //?
