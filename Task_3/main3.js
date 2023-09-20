calculator = (number1, number2, operator) => {
    let value = 0;
  
    switch (operator) {
      case "+":
        value = number1 + number2;
        break;
      case "-":
        value = number1 - number2;
        break;
      case "*":
        value = number1 * number2;
        break;
      case "/":
        if (number2 !== 0) {
          value = number1 / number2;
        } else {
          return "Division by zero is not allowed.";
        }
        break;
      default:
        return "Invalid operator";
    }
  
    return `${number1} ${operator} ${number2} = ${value}`;
  }
  
  const number1 = parseFloat(prompt("Enter the first number:"));
  const number2 = parseFloat(prompt("Enter the second number:"));
  const operator = prompt("Enter the operator (+, -, *, /):");
  
 
  
  const result = calculator(number1, number2, operator);
  alert(result);