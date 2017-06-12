<!-- Begin

var mem = '0';

function calc() {
  document.calculator.display.value= eval(document.calculator.display.value);
  return true
}
function perc() {
  document.calculator.display.value= eval(document.calculator.display.value)/100;
  return true
}
function deleteChar() {
  document.calculator.display.value = document.calculator.display.value.substring(0, document.calculator.display.value.length - 1)
}
function Clear() {
  currentoperation=""; }
// End -->