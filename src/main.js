import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js';

function clearEntry () {
  $('#inputAmount').val("");
  $('#inputCurrency').val("");
}
function getData (response) {
  if(response) {
    $("#output-currencyType").text(response.currencyType);
    $("#output-amount").text(response.inputRate);
    $(".output").show();
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }

}

$("form#currencyCal").submit(function(event) {
  event.preventDefault();
  let currencyType = $('#inputCurrency').val();
  let amount = parseInt($('#inputAmount').val());
  clearEntry();
  CurrencyExchange.getExchange(currencyType,amount).then(function(response) {
    getData(response);
  });
});






