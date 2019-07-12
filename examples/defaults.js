
import * as L from 'partial.lenses'
import { data } from '../fixture'

/**
 *  If value is null or undefined return a default value
 *  L.valueOr & L.defaults
 * 
 */
const getValue = key => L.get([key, L.defaults('place holder')])

/** Example */
getValue('phone')(data[0]) //?

/**
 *  Example
 *  L.get accepts path to field as array
 */
getValue(['address', 'number'])(data[0]) //?