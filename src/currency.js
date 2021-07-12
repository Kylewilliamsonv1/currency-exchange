export default class CurrencyExchange  {
  static getExchange (currencyType,amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(response => {
        if(!response.ok) {
          throw new Error (response.statusText);
        }
        return response.json();
      })
      .then(function(response) {
        const inputCurrency = response.conversion_rates[currencyType];
        const inputRate = inputCurrency * amount;
        return {
          currencyType,
          inputRate,
        };
      })
      .catch(function(error){
        console.error(`Alert! We have an error: ${error.message}`);
      });
  }
}