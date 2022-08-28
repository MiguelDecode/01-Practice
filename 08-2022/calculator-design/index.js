const screenOperation = document.getElementById("screen-operation");
const screenResult = document.getElementById("screen-result");
const buttons = document.getElementById("buttons");

let operationComplete = false;

const lastValue = () =>
  screenOperation.textContent.substring(screenOperation.textContent.length - 1);

const writeOperation = (element) => {
  if (screenOperation.textContent == 0) screenOperation.textContent = "";

  if(operationComplete && isNaN(element)) {
    screenOperation.textContent = screenResult.textContent;
    operationComplete = false;
  }

  if(operationComplete && !isNaN(element)) {
    screenOperation.textContent = '';
    screenResult.textContent = '0';
    operationComplete = false;
  }

  if (isNaN(lastValue()) && isNaN(element)) {
    screenOperation.textContent = screenOperation.textContent.substring(
      0,
      screenOperation.textContent.length - 1
    );
  } else {
    screenOperation.textContent += element;
  }
};

const writeResult = () => {
  screenResult.textContent = eval(screenOperation.textContent);
  operationComplete = true;
};

const resetScreen = () => {
  screenOperation.textContent = '0';
  screenResult.textContent = '0';
}

buttons.addEventListener("click", (event) => {
  if (event.target.textContent !== "") {
    switch (event.target.textContent) {
      case "=":
        writeResult();
        break;
      case "C":
        resetScreen();
        break;
      case "+/-":
        changeSign();
        break;
      case ",":
        writeOperation(".");
        break;
      default:
        writeOperation(event.target.textContent);
        break;
    }
  }
});
