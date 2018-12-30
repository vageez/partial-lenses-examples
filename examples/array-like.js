import L from 'partial.lenses'
import { data } from '../fixture'

/**
 *  Treats string as array-like
 */
L.set(1, 'a', 'LoLa') //?

/**
 *  To rewrite array back to string
 */
L.set([L.rewrite(x => x.join('')), 1], 'a', 'LoLa') //?

/**
 *  Same result as above
 */
L.set(1, 'a', ['L','o','L','a']) //?