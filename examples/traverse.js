import L from 'partial.lenses'
import { data } from '../fixture'

/**
 *  Example from https://github.com/calmm-js/partial.lenses#l-traverse
 */

const State = {
    of: result => state => ({state, result}),
    ap: (x2yS, xS) => state0 => {
      const {state: state1, result: x2y} = x2yS(state0)
      const {state, result: x} = xS(state1)
      return {state, result: x2y(x)}
    },
    map: (x2y, xS) => State.ap(State.of(x2y), xS),
    run: (s, xS) => xS(s).result
  }
  
  const count = x => x2n => {
    const k = `${x}`
    const n = (x2n[k] || 0) + 1
    return {result: n, state: L.set(k, n, x2n)}
  }
  
  State.run({}, L.traverse(State, count, L.elems, [1, 2, 1, 1, 2, 3, 4, 3, 4, 5])) //?
