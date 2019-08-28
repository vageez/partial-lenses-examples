import {
    set,
  } from "partial.lenses";


const creditCardInfo = {
    values : { 
        name: 'Angelo'
    },
    validationState: {
        name : 'Is.Valid'
    },
    CreditCard : {
         check : {
             type: 'Visa',
             isValid: 'IsValid'
         }
    },
    DisplayValidationOn: 'DisplayValidationOn.Click'
}

/**
 * Set some data, return the entire data set.
 */
set('DisplayValidationOn', 'DisplayValidationOn.Blur', creditCardInfo) //?