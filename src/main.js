import CurrencyExchange from './currency.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function clearEntry (){
  $('#inputAmount').val("");
  $('#inputCurrency').val("");
}
// function getData(response) {
//   if (response) {

//   }
// }

$("form#currencyCal").submit(function(event) {
  event.preventDefault();
  let amount = parseInt($('#inputAmount').val());
  let currencyType = $('#inputCurrency').val();
  const array = ["CAD","EUR","MXN","BBD","CNY"];
  for (let i=0; i <= array.length; i++)
  clearEntry(); 
  CurrencyExchange.getExchange().then(function(data) {
    $("#cadCurrency").text(data.cad);
    $("#eurCurrency").text(data.eur);
    $("#mxnCurrency").text(data.mxn);
    $("#bbdCurrency").text(data.bbd);
    $("#cnyCurrency").text(data.cny);

  });




});