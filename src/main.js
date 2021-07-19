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
function curInput() {
  let currencyType = $('#inputCurrency').val();
  if (currencyType.includes("CAD","USA","MXN","BBD","CNY","VES")) {
    return currencyType;
  } else {
    $("#curError").text("Please enter a valid currency type.");
  }
}
function amountInput() {
  let amount = parseInt($('#inputAmount').val());
  if (isNaN(amount)) {
    $("#amountError").text("Please enter a valid number."); 
    return false;
  } else {
    return amount;
  }
}

$("form#currencyCal").submit(function(event) {
  event.preventDefault();
  let amount = amountInput();
  let currencyType = curInput();
  clearEntry();
  CurrencyExchange.getExchange(currencyType,amount).then(function(response) {
    getData(response);
  });
});



