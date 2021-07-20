export default class CurrencyExchange  {
  static getExchange (currencyType,amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/12345/latest/USD`)
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
          inputRate,
          currencyType
        };
      });
  }
}