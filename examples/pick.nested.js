import { get, pick } from "partial.lenses";

const data = {
  billingAddress: {
    address1: "3605 Rue Saint-Urbain",
    address2: null,
    city: "Montréal",
    country: "CA",
    firstName: "Angelo",
    lastName: "Vagenas",
    phoneNumber: "(438) 396-3636",
    postalCode: "H2X 2P1",
    state: "QC",
  },
  cardNumber: "2345",
  cardType: "visa",
  expirationMonth: "07",
  expirationYear: "2021",
  key: "visa - 2345",
};

/**
 * 
 * Pick nested fields, and flatten
 * 
 */

get(
    pick({
      paymentType: 'paymentType',
      savedCreditCardId: 'savedCreditCardId',
      saveCreditCard: 'saveCreditCard',
      threatMetrixSessionId: 'threatMetrixSessionId',
      creditCardCvdNumber: 'cvv',
      firstName: ['billingAddress', 'firstName'],
      lastName: ['billingAddress', 'lastName'],
      address1: ['billingAddress', 'address1'],
      address2: ['billingAddress', 'address2'],
      city: ['billingAddress', 'city'],
      country: ['billingAddress', 'country'],
      state:  ['billingAddress', 'state'],
      postalCode:['billingAddress', 'postalCode'],
      phoneNumber: ['billingAddress', 'phone'],  
    }),
    data
  ) //?