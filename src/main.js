import CurrencyExchange from './currency.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function clearEntry (){
  $('#inputAmount').val("");
  $('#inputCurrency').val("");
}
function userEntry() {
  let amount = parseInt($('#inputAmount').val());
  let currencyType = $('#inputCurrency').val();
  return {
    amount,
    currencyType,
  };
}
$("form#currencyCal").submit(function(event) {
  event.preventDefault();
  let inputCurrency = userEntry.currencyType;
  console.log(inputCurrency);
  clearEntry(); 
  CurrencyExchange.getExchange().then(function(response) {
    if(inputCurrency === "CAD") {
      $("#cadCurrency").text(response.cad);
    } 
    if (inputCurrency === "EUR") {
      $("#eurCurrency").text(response.eur);
    }  
    if (inputCurrency === "MXN") {
      $("#mxnCurrency").text(response.mxn);
    }  
    if (inputCurrency === "BBD") {
      $("#bbdCurrency").text(response.bbd);
    } 
    if (inputCurrency === "CNY") {
      $("#cnyCurrency").text(response.cny);
    }
  });
});






