import {get, modify, elems, pick } from 'partial.lenses'
import { data } from '../fixture'

/**
 * 
 *  Pick apart data and put it together in a more meaningful structure
 *  *** L.pick creates a template structure that we can plug data into ***
 * 
 */

/**
 *     We create a data structure that segregates private and public data
 */
const picker = pick({
    private: { email: 'email', tel: 'phone' },
    public: { name: 'name', cell: 'cell', address: { number: ['address', 'number'], street: ['address', 'street'] } }
})

/**
 *  We apply to a single data set
 */
get(
    picker,
    data[0]
) //?

/**
 *  We apply to all instances of data
 */
modify(
    elems,
    get(picker),
    data
) //?
