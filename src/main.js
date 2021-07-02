import CurrencyExchange from './currency.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function clearEntry (){
  $('#currencyType').val("");
}
// function getData(response) {
//   if (response) {

//   }
// }

$('#currency').click(function() {
  // let currencyType = $('#').val();
  clearEntry(); 
  CurrencyExchange.getExchange().then(function(data) {
    $("#cadCurrency").text(data.cad);
    $("#eurCurrency").text(data.eur);
    $("#mxnCurrency").text(data.mxn);
    $("#bbdCurrency").text(data.bbd);
    $("#cnyCurrency").text(data.cny);

  });




});