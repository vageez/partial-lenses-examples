/**
 *
 * Iterators JS
 * for of loop uses iterators
 *
 */

const dragons = [
  "large green dragon",
  "large red dragon",
  "fluffikins red dragon",
];

// Convert array into iterator
const iterator = dragons[Symbol.iterator]() //?
iterator.next() //?
iterator.next() //?
iterator.next() //?
iterator.next() //?


/**
 *  
 *  
 */
const dragonArmy = {
    [Symbol.iterator] : () => {
        return {
            next: () => {
                const enoughDragonsSpawned = Math.random() > 0.5 //?
                if(!enoughDragonsSpawned)
                    return {
                        value: 'fluffikins red dragon',
                        done: false
                    }
                return { done: true }
            }
        }
    }
}

// Reference to iterator
const a = dragonArmy[Symbol.iterator]()

// Reference to different from above
const b = dragonArmy[Symbol.iterator]()

a.next() //?
b.next() //?

// Access Iterator via for of loop

for (const dragon of dragonArmy) {
    dragon //?
}
