import * as L from 'partial.lenses'
import { data } from '../fixture'

data //?

const g = L.get(
    [1],
    L.collect(L.elems, 'name'),
    // filter(x => console.log(x)),
    data
) //?