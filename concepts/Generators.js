const makeDragon = () => {
    const d = Math.random().toFixed('1') * 10
    return {
        0: 'small green dragon',
        1: 'sally the sad dragon',
        2: 'small blue dragon',
        3: 'small purple dragon',
        4: 'mark the fine dragon',
        5: 'large green dragon',
        6: 'large red dragon',
        7: 'fluffikins red dragon',
        8: 'large purple dragon',
        9: 'large orange dragon',
        10: 'large green dragon',
    }[d]
}

// Pausable functions. Remains paused until you call next(),  
function* someDragons() {
        
    // while(true) {
        //     const enoughDragonSpawned = Math.random() > 0.75
        //     if(enoughDragonSpawned) return
        //     yield makeDragon()
        // }

        yield 'super green dragon'
        yield 'fluffykins red dragon'
        yield 'mark the fine dragon'
        return 'sally the sad dragon'
}

// Calling Generator function, does not call it. 
const iterator = someDragons()

// iterator is a remote control used to call next 
iterator //?

// call next 
iterator.next() //?

// call next 
iterator.next() //?

// call next 
iterator.next() //?


/** Itterator as plain function */

const someDragon = () => {
    let iterations = -1
    const iterator = {
        next : () => {
            iterations++   
            if(iterations === 0) {
                return {value: 'super bad dragon', done: false}
            }
            if(iterations === 1) {
                return {value: 'super goody dragon', done: false}
            }
            if(iterations === 2) {
                return {value: 'super done dragon', done: true}
            }

            return {value: undefined, done: true}
        }
    }
    return iterator
}

const plainIterator = someDragon()

plainIterator.next()
plainIterator.next()
plainIterator.next()
plainIterator.next() //?