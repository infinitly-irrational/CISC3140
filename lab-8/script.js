//store all the input on the screen
var input = {
  num1: "",
  num2: "",
  operation: "",
};

function add(num1, num2) {
  let stringifiedSum = (Number(num1) + Number(num2)).toString();

  let inputElement = document.getElementById("input");
  inputElement.innerHTML = stringifiedSum;
}

function subtract(num1, num2) {
  const screen = document.getElementById("input");
  screen.innerHTML = Number(num1) - Number(num2);
}

function multiply(num1, num2) {
  const screen = document.getElementById("input");
  screen.innerHTML = Number(num1) * Number(num2);
}

function divide(num1, num2) {
  const screen = document.getElementById("input");
  screen.innerHTML = Number(num1) / Number(num2);
}

function mod(num1, num2) {
  const screen = document.getElementById("input");
  screen.innerHTML = Number(num1) % Number(num2);
}

function subtract(num1, num2) {
  const screen = document.getElementById("input");
  screen.innerHTML = Number(num1) - Number(num2);
}

//places input on the screen
let btn = document.getElementsByClassName("button");
var values = document.getElementById("input");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    values.value += e.target.value;
  });
}

let equals = document.getElementById("equals");
equals.addEventListener("click", (e) => {
  //get first number
  let index = 0;
  for (let i = 0; i < values.value.length; i++) {
    if (["+", "-", "/", "*", "X!", "%"].includes(values.value.charAt(i))) {
      input.operation = values.value.charAt(i);
      index = i;
      break;
    } else {
      input.num1 += values.value.charAt(i);
    }
  }
  input.num2 = values.value.substring(index + 1, values.value.length);

  const num_1 = input.num1;
  const num_2 = input.num2;
  const operation = input.operation;
  switch (operation) {
    case "+":
      add(num_1, num_2);
    case "-":
      subtract(num_1, num_2);
    case "*":
      multiply(num_1, num_2);
    case "/":
      divide(num_1, num_2);
    case "%":
      mod(num_1, num_2);
    // case "X!":
    //   factorial(num_1, num_2);
  }
});
