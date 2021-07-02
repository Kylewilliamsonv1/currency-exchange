import CurrencyExchange from './currency.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// function clearEntry (){}
// function getData(response) {
//   if (response) {

//   }
// }

$('#currency').click(function() {
  // let currencyType = $('#').val();
  // clearEntry(); 
  CurrencyExchange.getExchange().then(function(data) {
    $("#cadCurrency").text(data.cad);
    $("#eurCurrency").text(data.cad);
    $("#mxnCurrency").text(data.cad);
    $("#bbdCurrency").text(data.cad);
    $("#cnyCurrency").text(data.cad);

  });




});