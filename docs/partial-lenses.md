
> [Retrieved from partial.lenses](https://github.com/calmm-js/partial.lenses)
> Lenses are basically an abstraction for simultaneously specifying operations to update and query immutable data structures. Lenses are highly composable and can be efficient. A partial lens can view optional data, insert new data, update existing data and remove existing data and can, for example, provide defaults and maintain required data structure parts.

Dealing with large nested data sets in javascript can be cumbersome.

Getting and Setting some deep nested data in a clean efficient and immutable way is possible using Lenses. With a single line of code we can safely get, update or set a deeply nested item, creating a new JSON object with the changes.

The objective of this write up is to show some examples using Lenses VS vanilla JS.
This is the data set that we will be working with.

```javascript
const user = {
 name: 'Roger',
 phone: {
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
```

Lets see how we can pull out some data from this data set.
This example will show both Vanilla js and Lenses.
Although both of these examples seem pretty clean, the Vanilla example is susceptible to runtime errors. With the Vanilla example, if any element is not found we will get a runtime error.

In this particular example though, both instances will return `Jeep`.

### Get

```javascript
import * as L from 'partial.lenses'

L.get(['car', 'daily', 0, 'make'], user) // Jeep

user.car.daily[0].make // Jeep

```

But what happens if we try to access a record or field that does not exist.


```javascript
L.get(['car', 'daily', 3, 'make'], user) // undefined

user.car.daily[3].make // Cannot read property 'make' of undefined 
```

Our Vanilla example will trigger a runtime error. In order to achieve the same level of safety we are getting with lenses we need to write something a little more robust.

See below.

```javascript
// GROSS
if(user && user.car && user.car.daily && user.car.daily.length > 2) {
   return user.car.daily[3].make
} else {
   return undefined
}
```

Pretty impressive so far?

Compared to the imperative code that checks each field as we drill down, I'd say we get a pretty big net gain with when using Lenses. It's simply cleaner and much easier to reason about.

### Defaults
Defaults provide us to set a default value for an element that is missing.

```javascript
L.get(['phone', 'home', L.defaults('Number not found')], user) // Number not found
```

If the value is not missing, `L.defaults` will be ignored. Pretty sweet.

### Set
Alright, let's set some data.
Say we want to set a new car in our weekend drivers array.

```javascript
L.set(['car', 'weekend', L.appendTo], {make: 'Ford', year: 1979}, user)
// Returns the entire User object with the new car record
```

Notice the `L.appendTo`. I'd say this speaks for itself. In short this will retain any existing records found in `car.weekend` and simply append our new record.

Something that you may find interesting.

Say that our object did not have a `car` and `weekend` element. Our above Lense would create and set `car.weekend` as well as adding the new car record to the weekend array. What?!?!

That's right folks. You gotta try it to believe it.

I should point out that we are really just scratching the surface. When I first came across Lenses I had difficulty understanding how so few people, at least in my circles had not even heard of them.

I'd like to add one more example! Lets checkout `collect`

### Collect
Collect safely traverses an array.

```javascript
L.collect(['car', 'daily', L.elems, 'make'], user) // [ 'Jeep', 'Mazda' ]
```

In this case we drill down to `car.daily`.
`L.elems` represents our traversal over elements.
And finally `make` is the element we are looking for.

As the name suggests, collect collects results and returns them to us in an array.

If any of the elements in our collect do not exist, we will simply get back an empty array.

How about that ?

:]

You gotta check out [Partial Lenses](https://github.com/calmm-js/partial.lenses)