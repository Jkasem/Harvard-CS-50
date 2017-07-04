//Hello
//Implement a program that prints out a simple greeting to the user
function initHello(){
  alert("Hello World!");
}

//Water
//Implement a program that reports a user’s water usage, converting minutes spent in the shower to bottles of drinking water.
function initWater(){
  let sMinutes = prompt("Enter length of your shower in minutes", "");
  sMinutes;
  if (sMinutes === null || isNaN(sMinutes)) {
      return "wrong input";
    } else
      alert("You used " + (sMinutes * 12).toFixed(0) + " bottles of water!");
  }

//Mario
//Implement a program that prints out a double half-pyramid of a specified height
function initMario(){

  let pyramid = "";

  function buildP(h) {
    for (i = 1; i <= h; i++) {
      pyramid += " ".repeat(h - i) + "#".repeat(i) + "  " + "#".repeat(i) + "\n";
    }
    console.log(pyramid)
  }

  while (true) {
    let pHeight = prompt("Enter the height of the pyramid for Mario to jump");
    if (pHeight < 24 && pHeight >= 0) {
        buildP(pHeight);
        break;
      } else {
          alert("Height must be between 0 and 23. Try Again!");
        }
  }
}

//Credit
//Implement a program that determines whether a provided credit card number is valid according to Luhn’s algorithm.
