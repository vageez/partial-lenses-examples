
/**
 *  Classic FIZZBUZZ
 */

for(let i = 0 ; i <= 100; i++){
    if((i % 3) === 0){
        console.log("fizz")
    }
    if((i % 5) === 0){
        console.log("buzz")
    }
    if((i % 5) === 0 && (i % 3) === 0){
        console.log("fizzbuzz")
    }
}


/**
 *  Explain Event delegation
 *  Is javascript as it relates to the DOM
 *  If you attatch a listener to a DOM element. Its not just firing on the element but all the children as well
 *  Happens by event bubbling
 *  
 */

 /**
  *  Event Bubbling
  *  event.target(what was actually clicked) 
  *  event.currentTarget(what you actually attatched the event listener too)
  */

/**
 *  IIFY Immediatly invoked function expression
 * 
 *  (() => { console.log('IIFE') })()
 * 
 */

 /**
 *  Hoisting
 * 
 *  All variables declared using VAR are declared at the top of any given function scope
 *  CONST and LET not hoisted
 * 
 *  CONST, forced to assign a value when you declare it.
 */

 /**
  *  What is the difference NULL, UNDEFINED, UNDECLARED
  * 
  *  UNDECLARED, never used or declared
  *  UNDEFINED, declared but does not have a value
  *  NULL, is a value that must be assigned, a nothing value or placeholder assignment
  */

/**
 * Checking these NULL, UNDEFINED, UNDECLARED
 * 
 */

/**
 * Call Stack vs Job Queue
 * 
 *  In JavaScript there is function called timeout. 
 *  when you call the function timeout on the "call stack" it would register in "job queue". 
 *  It won't fire immediately, but will be triggered once the time is reached.
 */

 
/**
 * Event Loop
 * 
 *  In JavaScript there is function called timeout. 
 *  when you call the function timeout on the "call stack" it would register in "job queue". 
 *  It won't fire immediately, but will be triggered once the time is reached.
 * 
 * 
 *  Call Stack, functions to be executed
 *  setTimeout timer is out of the call stack and in the Message Queue.
 *  When timeout is reached execution is pushed to the Call Stack
 */

 