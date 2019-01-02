import L from 'partial.lenses'
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
const picker = L.pick({
    private: { email: 'email', tel: 'phone' },
    public: { name: 'name', cell: 'cell', address: { number: ['address', 'number'], street: ['address', 'street'] } }
})

/**
 *  We apply to a single data set
 */
L.get(
    picker,
    data[0]
) //?

/**
 *  We apply to all instances of data
 */
L.modify(
    L.elems,
    L.get(picker),
    data
) //?
