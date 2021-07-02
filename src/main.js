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
function conversion () {
  let inputType = userEntry.currencyType;
  if(inputType === "CAD") {
    $("#cadCurrency").text(data.cad);
  }

}
$("form#currencyCal").submit(function(event) {
  event.preventDefault();
  let inputCurrency = userEntry.currencyType;
  console.log(inputCurrency);
  clearEntry(); 
  CurrencyExchange.getExchange().then(function(data) {
    if(inputCurrency === "CAD") {
      $("#cadCurrency").text(data.cad);
    } 
    if (inputCurrency === "EUR") {
      $("#eurCurrency").text(data.eur);
    }  
    if (inputCurrency === "MXN") {
      $("#mxnCurrency").text(data.mxn);
    }  
    if (inputCurrency === "BBD") {
      $("#bbdCurrency").text(data.bbd);
    } 
    if (inputCurrency === "CNY") {
      $("#cnyCurrency").text(data.cny);
    }
  });
});






