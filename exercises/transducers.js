// Transducers
// 2 reducers cannot compose
// We need to change shapes around to make sure things work

const add = (num) => num + 1;
const isOdd = (num) => num % 2 == 1;
const sum = (total, num) => total + num;

const list = [1, 3, 4, 6, 9, 12, 13, 16, 21];

// We need to take manps and filters and do them with reductions

// Create utility function to do the reductions
// we pass the list, with the function we need to execute
const mapWithReducer = (arr, mappingFn) =>
  arr.reduce((list, v) => [...list, mappingFn(v)], []);

const filterWithReducer = (arr, predicateFn) =>
  arr.reduce((list, v) => (predicateFn(v) ? [...list, v] : [...list]), []);

mapWithReducer(list, add);

filterWithReducer(list, isOdd);

list.reduce(sum);

// We have a map and flter with reduce.
// What if these gave us the reducer that we could use?

// Instaed of do the list, return the reducer, and we do the reduction ourselves

// reduce is an interfeace that we know is going to work out for us.

// Extracting out the reducers
const mapReducer = (mappingFn) => (list, v) => [...list, mappingFn(v)];

const filterReducer = (predicateFn) => (list, v) =>
  predicateFn(v) ? [...list, v] : [...list];

list
  .reduce(mapReducer(add), []) 
  .reduce(filterReducer(isOdd), [])
  .reduce(sum)

// Fundamentally what is happening here, we are taking a value and putting it into an array, so we will make a COMBINER

// listCombination: Array -> a -> Array

const listCombination = (list, v) => [...list, v]

const listCombinator = (list, v) => {
  list.push(v)
  return list
}

const mapReducerCombinator = (mappingFn) => (list, v) => 
  listCombination(list, mappingFn(v))

const mapFilterCombinator = (predicateFn) => (list, v) =>
  predicateFn(v) ? listCombination(list, v) : [...list];

list
  .reduce(mapReducerCombinator(add), []) 
  .reduce(mapFilterCombinator(isOdd), [])
  .reduce(sum)

// We may want to provide that combiner function as an argument

// Before we provide the mapping function, we provide the combinator to use in the reducer


const mapReducerCombinatorCurry = 
        mappingFn => 
          listCombination => 
            (list, v) =>  
                listCombination(list, mappingFn(v))

const mapFilterCombinatorCurry = 
      predicateFn => 
        listCombination => 
          (list, v) =>
              predicateFn(v) ? listCombination(list, v) : [...list]

list
  .reduce(mapReducerCombinatorCurry(add)(listCombination), []) 
  .reduce(mapFilterCombinatorCurry(isOdd)(listCombination), [])
  .reduce(sum)

// CURRYING
// create specialization from generalization

const compose = f => g => x => f(g(x))

const transducer = compose
  (mapReducerCombinatorCurry(add))
  (mapFilterCombinatorCurry(isOdd))

list
  .reduce(transducer(listCombination), [])
  .reduce(sum)

list
  .reduce(transducer(listCombination), [])
  .reduce(sum)
