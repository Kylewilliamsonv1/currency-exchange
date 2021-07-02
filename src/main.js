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
  const array = ["CAD","EUR","MXN","BBD","CNY"];
  for (let i=0; i <= array.length; i++) {
    if(i.includes(inputType)) {
      return i;
    }
  }
}
$("form#currencyCal").submit(function(event) {
  event.preventDefault();
  clearEntry(); 
  CurrencyExchange.getExchange()
    .then(function(data) {
      userEntry(data);
      conversion();
      $("#cadCurrency").text(data.cad);
      $("#eurCurrency").text(data.eur);
      $("#mxnCurrency").text(data.mxn);
      $("#bbdCurrency").text(data.bbd);
      $("#cnyCurrency").text(data.cny);

    });
});






