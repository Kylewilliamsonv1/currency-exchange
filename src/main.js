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
  }
}
function curInput() {
  let currencyType = $('#inputCurrency').val();
  if (["CAD","USD","MXN","BBD","CNY","VES"].includes(currencyType)) {
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
  })     
    .catch(function(error){
      $(".output").show();
      $("#apiError").text(`Alert! We have an error: ${error}`);
    });
});



