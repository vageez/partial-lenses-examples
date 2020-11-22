/**
Monad is a way of making a functional friendly data structure.
Wrapper around a value with a set of behaviours that makes it easy to with other values
Turns the its value into a functor. Functor, something we can map over. 
Monad: a pattern of pairing data with a set of predictable behaviors that let it interact with other pairings of data+behavior (other MONADS)
Just a wrapper around a single value
*/

const Just = (val) => {
  const map = (fn) => {
    return Just(fn(val));
  };
  // aka: bind, flatMap
  // Maps over a data structure, it flattens it one level
  // Un wrapping the Monad
  // Not suposed to call chain without returning a Monad, This is technically a violation
  const chain = (fn) => {
    return fn(val);
  };
  // Use another monads MAP, with our value
  // This implies that our value, has to be a function!!
  const ap = (anotherMonad) => {
    return anotherMonad.map(val);
  };
  const identity = val;
  const fork = fn => fn(val)
  return {
    map,
    chain,
    ap,
    identity,
    fork,
  };
};

const user1 = Just('Kyle');
const user2 = Just('Susan');

var tuple = (x) => (y) => [x, y];

// More verbose than simply +1
// But we do this for predictability
const fortyOne = Just(41);
const f2 = fortyOne.map((v) => v + 1).chain((x) => x);

user1.map(tuple).ap(user2).identity;

// Maybe Monad
// NOOP, i dont want anything to occur

const someObj = { something: { else: { entirely: 42 } } };

const Nothing = () => {
  return {
    map: Nothing,
    chain: Nothing,
    ap: Nothing,
    fork: () => Nothing
  };
};

const Maybe = {
  Just,
  Nothing,
  of: Just,
};

// Should this become a JUST or a Nothing
const fromNullable = (val) => (val == null ? Maybe.Nothing() : Maybe.of(val));

const prop = (prop) => (obj) => fromNullable(obj[prop]);

Maybe.of(someObj)
  .chain(prop('something'))
  .chain(prop('els'))
  .chain(prop('entirely'))
  .fork(x => x)


