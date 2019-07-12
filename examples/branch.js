
import * as L from 'partial.lenses'
import { data } from '../fixture'

L.transform(
    L.branch({
        xs: [L.elems, L.modifyOp(x => x + 1)],
        z: [L.optional, L.modifyOp(x => x - 1)],
        ys: [L.elems, L.modifyOp(x => x - 1)]
    }),
    { xs: [1, 2, 3], ys: [1, 2, 3] }
)

L.collect(
    L.branch({
        first: [L.elems, x => x.toUpperCase()],
    }),
    { first: ['x'], second: { value: 'y' } }
) 

L.transform(
    L.branch({
        // dob: [],
        // address: [],
        car: [L.values, L.modifyOp(x => `${x}${'-modified'}`)]
    }),
    data[0]
) //?