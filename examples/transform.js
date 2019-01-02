import L from 'partial.lenses'
import { data } from '../fixture'

/**
 *  Transform an optic, ***adding or removing from a data structure***
 *  L.assignOp : Assign or Overwrite a key: value to each optic
 *  L.assignOp : Merges the given object into the object in focus
 */
L.transform([L.elems, L.assignOp({ y: 1 })], [{ x: 3 }, { x: 4, y: 5 }]) //?

/**
 *  Transform existing optic to negative, can be achieved with L.Modify
 *  L.modifyOp : Modify an existing focus
 */
L.transform(
    [L.elems, L.modifyOp(x => -x)],
    [1, 2, 3]
) //?

/**
 *  Modify : existing optic to negative
 *  Same as above
 */
L.modify(
    L.elems,
    x => -x,
    [1, 2, 3]
) //?
