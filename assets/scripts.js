var chechkButton = document.getElementById("checkResult");

chechkButton.addEventListener("click", function () {
  var num1 = document.getElementById("number1").value;
  var operatorValue = document.getElementById("operator").value;
  var num2 = document.getElementById("number2").value;
  var resultsBox = document.getElementById("results");
var answer
  var errorsArray = [];
  if (operatorValue == "Select Operator") {
    errorsArray.push(`Please select Operator`);
  }
  if (num1 == false || num2 == false) {
    errorsArray.push(`Error in your numbers`);
  }
  if (errorsArray.length > 0) {
    resultsBox.textContent = errorsArray
  }
  else {
    num1Value = parseInt(num1)
    num2Value = parseInt(num2)
    switch (operatorValue) {
        case '+':
            answer = num1Value + num2Value
            break;
        case '-':
            answer = num1Value - num2Value
            break;
        case '*':
            answer = num1Value * num2Value
            break;
        case '/':
            answer = num1Value / num2Value
            break;
        case '**':
            answer = num1Value ** num2Value
            break;
    
        default:
            answer = `Invalid Operator`
            break;
    }
    resultsBox.textContent=`${num1Value} ${operatorValue} ${num2Value} = ${answer}`
  }
});
