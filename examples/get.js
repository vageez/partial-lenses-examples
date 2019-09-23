import { get } from 'partial.lenses'

import { data } from '../fixture'

const getByKey = key => L.get(key) // ?

getByKey('name')(data[0]) // ?
getByKey(['address', 'street'])(data[0]) // ?

const user = {
  vip: true,
  vip_details: {
    vip_earned: [
      {
        earned_date: '2019-01-14T19:44:58.160299',
        program: 'Calendar 2017'
      }
    ]
  }
}

L.set(['vip_details', 'vip_earned', 0, 'program'], 'Wow', user) // ?
