/**
 * INVERSION OF CONTROL
 * DEPENDENCY INJECTION
 *
 * IOC promotes injecting dependencies on initialization.
 * PROS > Easily testable. Can plug in dependencies when testing
 *
 */
// Engine.js
class Engine {
  constructor() {
    this.engine = `V8 ENGINE`
    return
  }
}

// Car.js
// import Engine from './Engine.js'
// Engine is built in. Therefore we are always stuck with the same Engine!
class Car {
  constructor() {
    this.engine = new Engine().engine
    return {
      model: `CORVETTE`,
      engine: this.engine
    }
  }
}

// Implementaion
// main.js
const car = new Car() //?

/**
 * Inversion of control, dependency injection
 */
// IocCar.js
/**
 * We no longer need Engine.js
 * We initialize Car, by passing it Engine. Therefore also allowing us to use Any Engine!
 */
class IoCCar {
  constructor(Engine) {
    return {
      model: `CORVETTE`,
      engine: Engine
    }
  }
}

// Implementaion
// main.js
const engine = new Engine()
const carIoc = new Car(engine) //?
