function toggleInputField() {
  var selectedProgram = document.getElementById("program").value;
  var inputContainer = document.getElementById("input-container");

  inputContainer.style.display =
    selectedProgram === "custom" ? "block" : "none";
}

function runSelectedProgram() {
  var selectedProgram = document.getElementById("program").value;
  var userInput = document.getElementById("userInput").value;

  var output;

  switch (selectedProgram) {
    case "factorial":
      output = factorial(parseInt(userInput));
      break;
    case "sumOfDigits":
      output = sumOfDigits(parseInt(userInput));
      break;
    case "reverse":
      output = reverse(parseInt(userInput));
      break;
    case "isPrime":
      output = prime(parseInt(userInput));
      break;
    case "leapYear":
      output = leapYear(parseInt(userInput));
      break;
    case "oddEven":
      output = oddEven(parseInt(userInput));
      break;
    case "Palindrome":
      output= Palindrome(parseInt(userInput));
      break;
    case "Armstrong":
      output=Armstrong(parseInt(userInput));
      break;

    case "custom":
      try {
        output = eval(userInput);
      } catch (error) {
        output = "Error: " + error.message;
      }
      break;
    default:
      output = "Invalid program selected";
  }

  document.getElementById("output").textContent = "Output: " + output;
}
