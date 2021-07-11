import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js';

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
  let inputCurrencyType = userEntry().currencyType;
  console.log(inputCurrencyType);
  clearEntry(); 
  CurrencyExchange.getExchange(inputCurrencyType).then(function(response) {
    console.log(response);
  });
});






