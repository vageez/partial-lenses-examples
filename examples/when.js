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
 *  Vanilla
 */
data.filter(x => x.age > 40)
    .filter(x => x.gender==='male')
    .map(x => ({name : x.name})) //?

/**
 *    Example
 */
malesOver40(data) //?
malesOver40ByName(data) //?