drinkOrder = (size, buttonName) => {
    let message = "";
  
    switch (buttonName) {
      case "cola":
        message = `You have ordered a ${size} Cola`;
        break;
      case "lemon":
        message = `You have ordered a ${size} Lemonade`;
        break;
      case "orange":
        message = `You have ordered a ${size} Orangeade`;
        break;
      default:
        message = "Invalid buttonName";
    }
  
    return message;
  }
  
  
  const size = prompt("Enter the size (small, medium, or large):").toLowerCase();
  
  
  const buttonName = prompt("Enter the drink (cola, lemon, or orange):").toLowerCase();
  
  const result = drinkOrder(size, buttonName);
  alert(result);