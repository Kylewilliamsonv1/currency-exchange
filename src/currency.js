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

        console.log(response);
        console.log(cad);

        return {
          cad,
        };

      })
      .catch(function(error){
        console.error(`Alert! We have an error: ${error.message}`);
      });
  }
}