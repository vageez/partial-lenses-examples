import * as L from 'partial.lenses'

const user = {
  name: 'Roger',
  phone: {
    home: '212-555-1234',
    cell: '212-334-1212'
  },
  address: {
    street: '123 First Ave',
    zip: '90210'
  },
  car: {
    daily: [
      {
        make: 'Jeep',
        year: 2013
      },
      {
        make: 'Mazda',
        year: 2018
      }
    ],
    weekend: [
      {
        make: 'Corvette',
        year: 1993
      }
    ]
  }
}


L.get(['car', 'daily', 3, 'makes'], user) //?


L.get(['phone', 'homes', L.defaults('Number not found')], user) //?


const a = L.set(['car', 'weekend', L.appendTo], {make: 'Ford', year: 1979}, user) //?


L.collect(['car', 'daily', L.elems, 'make'], user) //?


