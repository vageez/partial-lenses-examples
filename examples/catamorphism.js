import daggy from 'daggy'
import * as L from 'partial.lenses'
import { Maybe, Ok, Err } from 'pratica'

const DogBreed = daggy.taggedSum('DogBreed', {
    Doberman : [],
    Chihuahua : [],
    BullDog : [],
    Unknown : []
})

const dog = {
    breed: 'Chihuahua' 
}

const isValidBreed = breed => DogBreed.is(breed) ? Ok(breed) : Err()

    // Map expects a Monad. And returns a Monad
    Ok(dog)
    .map(dog => dog.breed)  //? Ok(Chihuahua)
    // Chain expects a Monad, and it unwrapps it. Does not return a Monad 
    Ok(dog)
    .chain(dog => dog.breed) //? Chihuahua


    import { Ok, Err } from 'pratica

const DogBreed = daggy.taggedSum('DogBreed', {
    Doberman : [],
    Chihuahua : [],
    BullDog : [],
    Unknown : []
})

const dog = {
    breed: 'Chihuahua' 
}

// DogBreed.is 
// A useful built in type check when using daggy.
const isValidBreed = breed => DogBreed.is(breed) ? Ok(breed) : Err()

Ok(dog)
    .chain(dog => Ok(dog.breed))
    .map(breed => breed === 'Doberman' ? DogBreed.Doberman : breed)
    .map(breed => breed === 'Chihuahua' ? DogBreed.Chihuahua : breed)
    .map(breed => breed === 'BullDog' ? DogBreed.BullDog : breed)
    .chain(isValidBreed)
    .cata({
        Ok: breed => console.log(breed.toString()), //?
        Err: () => DogBreed.Unknown //?
    })
