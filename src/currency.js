export default class CurrencyExchange  {
  static getExchange (currencyType) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currencyType}`)
      .then(response => {
        if(!response.ok) {
          throw new Error (response.statusText);
        }
        return response.json();
      })
      .then(function(response) {
        const conRates = response.conversion_rates[currencyType];
        console.log(conRates);
        return {
          conRates,
        };
      })
      .catch(function(error){
        console.error(`Alert! We have an error: ${error.message}`);
      });
  }
}