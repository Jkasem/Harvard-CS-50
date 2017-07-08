//************PS1***************
  /* Hello
  Implement a program that prints out a simple greeting to the user*/
  function initHello(){
    alert("Hello World!");
  }

  /* Water
  Implement a program that reports a user’s water usage, converting minutes spent in the shower to bottles of drinking water.*/
  function initWater(){
    let sMinutes = prompt("Enter length of your shower in minutes", "");
    sMinutes;
    if (sMinutes === null || isNaN(sMinutes)) {
        return "wrong input";
      } else
        alert("You used " + (sMinutes * 12).toFixed(0) + " bottles of water!");
    }

  /* Mario
  Implement a program that prints out a double half-pyramid of a specified height*/
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

  /* Greedy
  Implement a program that calculates the minimum number of coins required to give a user change.*/
function initGreedy(){

let q = 0
    ,d = 0
    ,n = 0
    ,p = 0;

  function getChange(changeAmount) {
    if (changeAmount > 25) {
      q = (changeAmount / 25).toFixed(0);
      changeAmount %= 25;
    } if (changeAmount > 10) {
        d = (changeAmount / 10).toFixed(0);
        changeAmount %= 10;
      } if (changeAmount > 5) {
          n = (changeAmount / 5).toFixed(0);
          changeAmount %= 5;
        } if (changeAmount > 1) {
          p = (changeAmount / 1).toFixed(0);
          }
          alert(q + " quarters, " + d + " dimes, " + n + " nickles, " + p + " pennies.");
  }

  while (true) {
    let changeAmount = prompt("How much change is owed?");
    if (changeAmount >= 0) {
      changeAmount *= 100;
      getChange(changeAmount);
      break;
    } else {
          alert("You can't have negative change. Try again!");
      }
  }
}

//************PS2***************
  /* Initials
  Implement a program that, given a person’s name, prints a person’s initials */
  function initInitials(){
    let name = prompt("Enter your name");
    name;
    let nameRegex = /\b(\w)/g;
    let initials = name.match(nameRegex);
    alert((initials.join("")).toUpperCase());
  }

  /* Caeser
  Implement a program that encrypts messages using Caesar’s cipher */
  function initCaeser(){

    let encryptKey = prompt("Enter encryption key");
    encryptKey;
    if (encryptKey > 0) {
      let inputMessage = prompt("Enter message to encrypt");
      inputMessage;
      encryptMessage(inputMessage);
    } else {
      console.log("Enter a positive integer");
      return 1;
    }

    function encryptMessage(){
      
    }

  }

  /* Vigenere
  Implement a program that encrypts messages using Vigenère’s cipher */
  //  function initVigenere
