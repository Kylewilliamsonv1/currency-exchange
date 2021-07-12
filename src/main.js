import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js';

function clearEntry () {
  $('#inputAmount').val("");
  $('#inputCurrency').val("");
}

$("form#currencyCal").submit(function(event) {
  event.preventDefault();
  let currencyType = $('#inputCurrency').val();
  let amount = parseInt($('#inputAmount').val());
  clearEntry();
  CurrencyExchange.getExchange(currencyType,amount).then(function(response) {
    $("#output-currencyType").text(currencyType);
    $("#output-amount").text(response);
    $(".output").show();
  });
});






