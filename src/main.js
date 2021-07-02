import CurrencyExchange from './currency.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function clearEntry (){
  $('#inputAmount').val("");
  $('#inputCurrency').val("");
}
function getData(response) {
  if (response) {

  }
}

function userEntry() {
  let amount = parseInt($('#inputAmount').val());
  let currencyType = $('#inputCurrency').val();
  return {
    amount,
    currencyType,
  };
}
// const array = ["CAD","EUR","MXN","BBD","CNY"];
//   for (let i=0; i <= array.length; i++) {
//     if(i = currencyType) {
//       return i;
//     }
//   }
//   return {
//     amount,
//     i,
//   }


$("form#currencyCal").submit(function(event) {
  event.preventDefault();

  userEntry()
  clearEntry(); 
  CurrencyExchange.getExchange().then(function(data) {
    $("#cadCurrency").text(data.cad);
    $("#eurCurrency").text(data.eur);
    $("#mxnCurrency").text(data.mxn);
    $("#bbdCurrency").text(data.bbd);
    $("#cnyCurrency").text(data.cny);

  });




});