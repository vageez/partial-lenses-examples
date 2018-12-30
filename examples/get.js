
import L from 'partial.lenses'
import { data } from '../fixture'

const getByKey = key => L.get(key) //?

getByKey('name')(data[0]) //?
getByKey(['address','street'])(data[0]) //?
