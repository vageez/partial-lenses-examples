import { taggedSum } from "daggy";

// Compose from left to right.
const compose = (...fns) => x => fns.reduceRight((g, f) => f(g), x);
const ccToArray = ccnum => ccnum.toString().split("").reverse()
const isEven = i => i % 2 == 0;
const gt9 = n => (a => +a[0] + +a[1])(n.toString().split(""));
const calculation = n => (num => (num > 9 ? gt9(num) : num))(n * 2);
const convertCcno = ccno => ccno.map((c, i) => (isEven(i + 1) ? calculation(c) : c));
const sum = ccno => ccno.reduce((acc, c) => +acc + +c, 0);
const checkSum = sum => sum % 10;
const isValid = sum => sum === 0;
const luhn = num =>
  compose(
    isValid,
    checkSum,
    sum,
    convertCcno,
    ccToArray
  )(num);


// Test
//, 6011350618169794, 6011381929523148, 79927398713, 5555555555554444, 4012888888881881, 5105105105105100, 4916737743057301, 5235848633343692, 6011812456115007
const ccNos = ['6011347054167738', 6011709975603788, 6011101622873362];
ccNos.map(luhn).filter(x => !x).length === 0; //?

const CreditCardType = taggedSum("CreditCardType", {
  Visa: ['num'],
  MasterCard: ['num'],
  Amex: ['num'],
  Discover: ['num'],
  NotSupported: [],
});

// https://en.wikipedia.org/wiki/Payment_card_number#Issuer_identification_number_(IIN)
const IdentifyCreditCard = {
  Visa: /^4/,
  MasterCard: /^5[15]|2221|2720/,
  Amex: /^3[47]/,
  Discover: /^65|64|6011|622|624|626|628/,
}

const cardType = num =>
  IdentifyCreditCard.Visa.test(num)
    ? CreditCardType.Visa(num)
    : IdentifyCreditCard.MasterCard.test(num)
    ? CreditCardType.MasterCard(num)
    : IdentifyCreditCard.Amex.test(num)
    ? CreditCardType.Amex(num)
    : IdentifyCreditCard.Discover.test(num)
    ? CreditCardType.Discover(num)
    : CreditCardType.NotSupported;

const creditCardRegEx = {
  Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  MasterCard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
  Amex: /^3[47][0-9]{13}$/,
  Discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
}

const Card = num => ({
    type : cardType(num).toString(),
    isValid : cardType(num).cata({
        Visa: num => creditCardRegEx.Visa.test(num) && luhn(num),
        MasterCard: num => creditCardRegEx.MasterCard.test(num) && luhn(num),
        Amex: num => creditCardRegEx.Amex.test(num) && luhn(num),
        Discover: num => creditCardRegEx.Visa.test(num) && luhn(num),
        NotSupported: () => false,
    })
})

// Card(371976546850274)//?

// Visa: 16
// Mastercard: 16
// Discover: 16
// American Express: 15

  

