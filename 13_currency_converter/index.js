const axios = require('axios');


//These codes do not work simply following along for educational purposes

// https://fixer.io/
const FIXER_API_KEY = 'MsTR5Ih77E9kTuxsXJmdEfeII63PT705';
const FIXER_API = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`;

// https://restcountries.eu
const REST_COUNTRIES_API = `https://restcountries.eu/rest/v2/currency`;



// Async/Await
// const add = async (a, b) => {
//     return a + b;
// }
// console.log(add(2, 3))

// Fetch data about currency
const getExchangeRate = async (fromCurrency, toCurrency) => {

    try {
        const {data : {rates}} = await axios.get(FIXER_API) //api call 
        rates;
    
        const euro = 1 / rates['fromCurrency'];
        const exchangeRate = euro * rates['toCurrency'];
    
        return exchangeRate;
    } catch (error) {
        throw new Error(`Unable to get currency ${fromCurrency} to ${toCurrency}`)
    }

}

getExchangeRate('USD', 'EUR');

// Fetch data about countries

const getCountries = async (currencyCode) => {
    try {
        const { data } = await axios.get(`${REST_COUNTRIES_API}/${currencyCode}`)
        return data.map(({name}) => name )
    } catch (error) {
        throw new Error(`Unable to get countries that use ${currencyCode}`)
    }

}

getCountries('AUD');

// Output data

const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    fromCurrency = fromCurrency.toUppercase();
    toCurrency = toCurrency.toUppercase(); 
    //0s

    // takes too much time we want to wait for both simultaneously

    const [exchangeRate, countries] = await Promise.all([
        getCountries(toCurrency), 
        getExchangeRate(fromCurrency, toCurrency) 
    ]) //2s

    const convertedAmount = ( amount * exchangeRate ).toFixed(2)

    return `${amount} from ${fromCurrency} is worth ${convertedAmount} ${toCurrency}
                You can spend these in the following countries ${countries}
    `





}

convertCurrency('aus', 'usd', 20)

    .then((result) => console.log(result))
    .catch((error) => console.log(error))

// TOP LEVEL AWAIT
const final = convertCurrency('aus', 'usd', 20)
console.log(final)
