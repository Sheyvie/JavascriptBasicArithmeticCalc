const operator = prompt(
  "Enter operator to perform the calculation ( either +, -, * or / ): "
);

var num1 = prompt("Enter the First Number");
var num2 = prompt("Enter the Second Number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (operator == "+") {
  alert(num1 + num2);
} else if (operator == "-") {
  alert(num1 - num2);
} else if (operator == "*") {
  alert(num1 * num2);
} else {
  alert(num1 / num2);
}
