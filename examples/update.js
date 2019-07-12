import * as L from 'partial.lenses'
import { data } from '../fixture'

/** 
 * 
 *  Generic Update Field Function
 *  L.set returns a function, which takes the data source.
 *  
 */

const updateField = key => value =>
    L.set(key, value)
 
updateField('phone')(5559090909)(data[0]) //?