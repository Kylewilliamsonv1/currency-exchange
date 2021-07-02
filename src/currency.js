export default class CurrencyExchange  {
  static getExchange () {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if(!response.ok) {
          throw Error (response.statusText);
        }
        return response.json();
      })
      .then(function(response) {
        const cad = response.conversion_rates.CAD;
        const eur = response.conversion_rates.EUR;
        const mxn = response.conversion_rates.MXN;
        const bbd = response.conversion_rates.BBD;
        const cny = response.conversion_rates.CNY;
        const conRates = response.conversion_rates;
        console.log(conRates);
        return {
          cad,
          eur,
          mxn,
          bbd,
          cny,
          conRates,
        };
      })
      .catch(function(error){
        console.error(`Alert! We have an error: ${error.message}`);
      });
  }
}