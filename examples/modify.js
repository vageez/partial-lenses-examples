import * as L from 'partial.lenses'
import { data } from '../fixture'

/**
 * 
 *  *** Modify an existing optic focus ***
 *  *** Modify MAPs over elements/values ***
 * 
 */

/**
 *  Modify Object Keys
 */
L.modify(
    L.keys,
    x => x.toUpperCase(),
    data
) //?

/**
 *  Modify Object Values
 */
L.modify(L.values, x => x.toUpperCase(), { x: 'a', y: 'b' }) //?

/**
 *  Modify Array Elements
 */
L.modify(L.elems, x => x.toUpperCase(), ['a', 'b']) //?


/**
 *  Modify Nested Array Elements
 */
L.modify(
    ['elements', L.elems],
    x => x.toUpperCase(),
    { elements: ['a', 'b'] }
) //?

/**
 *  Modify Nested Array Objects
 */
L.modify(
    ['elems', L.elems, 'x'],
    x => x - 1,
    { elems: [{ x: 1, y: 2 }, { x: 3, y: 4 }] }
) //?

/**
 *  L.modify *** As a map ***
 */
const mapper = L.modify(
    [L.elems, 'value'],
    x => x.toUpperCase(),
    [{ id: 3, value: 'a' },
    { id: 2, value: 'b' },
    { id: 1, value: 'c' },
    { id: 4, value: 'd' },
    { id: 5, value: 'e' }]
) //?

/**
 *  L.modify *** As a reduce ***
 */
const reducer = L.modify(
    L.elems,
    x => x.value.toUpperCase(),
    [{ id: 3, value: 'a' },
    { id: 2, value: 'b' },
    { id: 1, value: 'c' },
    { id: 4, value: 'd' },
    { id: 5, value: 'e' }]
) //? 



const d = {
    year: 2019,
    badges:
        [{
            name: 'Spend $500 - 2018',
            offerDescription:
                'Excludes gift card purchases, up to a maximum discount of $25',
            requirements: [Array],
            badgeId: 'spend500',
            offer: '25% off one purchase',
            id: 'e2f01f48-90b8-11e8-9a50-0242ac110002',
            description:
                'Spend a total of at least $500 over the program year (before tax, excluding the purchase of gift cards) at Garage and/or Dynamite.'
        },
        {
            // name: 'Complete Profile - 2018',
            offerDescription:
                'Excludes gift card purchases, up to a maximum discount of $10',
            requirements: [Array],
            badgeId: 'buildprofile',
            offer: '10% off one purchase',
            id: '75a39bd6-90b3-11e8-9a50-0242ac110002',
            description:
                'Simply fill out your profile online or in the app (name, date of birth and address) to collect the badge and receive a birthday offer on us!'
        },
        {
            name: 'Buy 2 Ways - 2018',
            offerDescription:
                'Excludes gift card purchases, up to a maximum discount of $20',
            requirements: [Array],
            badgeId: 'buy2ways',
            offer: '20% off one purchase',
            id: 'f4f9e3f4-90b3-11e8-b75f-0242ac110002',
            description:
                'Spend a total of $50 during the program year on each brand (Dynamite and Garage) or on two different channels (online and in-store).'
        },
        {
            name: 'Spend $200 - 2018',
            offerDescription:
                'Excludes gift card purchases, up to a maximum discount of $20',
            requirements: [Array],
            badgeId: 'spend200',
            offer: '20% off one purchase',
            id: 'ce43ef8a-90b7-11e8-9b3c-0242ac110002',
            description:
                'Spend a total of at least $200 over the program year (before tax, excluding the purchase of gift cards) at Garage and/or Dynamite.'
        }]
}


L.modify(['badges', L.elems, 'name', L.defaults('')], name => name.replace(' - 2018', ''), d) //?