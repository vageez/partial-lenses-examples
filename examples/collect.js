

import * as L from 'partial.lenses'
import { data } from '../fixture'


/**
 *  Collect Returns an array of non-undefined elements
 *  *** Collect acts as a reducer, taking large set of data and returning a smaller one ***
 */
L.collect([L.elems, 'address', 'street'], data) //?


/**
 *  CollectAs Returns an array of non-undefined elements, 
 *  from a given function from the elements focused on by the given traversal.
 */
L.collectAs( x => x.toUpperCase(), [L.elems, 'address', 'street'], data) //?

