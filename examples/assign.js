import { assign, get, elems, identity, defaults} from 'partial.lenses'

const first = { data : { items : [1,2,3,4], value: 0}}
const second = { data : { items : [1,2,3,4], value: 50}}

export const mergeData = first => second => assign(elems, get(['data', defaults({})], first))(get(['data', defaults({})], second))

mergeData(first)(second) //? 