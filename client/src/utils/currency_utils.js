/**
 * This file is meant to be where you will complete the utility function below, for performing a conversion of some amount
 * to another currency.
 */

/**
 * TODO:
 * @receives two currency objects, currencyA and currencyB, as well as an integer-amount of cash in currencyA
 * @performs a currency conversion between integer amount of currencyA to an integer amount of currencyB
 * @returns an integer
 */
const convertCurrency = (currencyA, currencyB, amount) => {

    // CDN to CDN conversion
    if (currencyA === currencyB) {
        console.log(currencyA.conversionRate)
        return amount;
    }
    // CDN to non-CDN conversion
    else if (currencyA.currencyCode === 'CAD' && currencyB.currencyCode !== 'CAD') {
        return Math.round(amount * currencyB.conversionRate);
    }
    // non-CDN to CDN conversion
    else if (currencyA.currencyCode !== 'CAD' && currencyB.currencyCode === 'CAD') {
        return Math.round(amount / currencyA.conversionRate);
    }
    // non-CDN to non-CDN
    else {
        let cadCurr = amount / currencyA.conversionRate;
        return Math.round(cadCurr * currencyB.conversionRate);
    }
}

export { convertCurrency };