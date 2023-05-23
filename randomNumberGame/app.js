const numberInput = document.querySelector("#number-input");
const userNumber = document.querySelector("#user-number");
const userChose = document.querySelector("#user-chose");
const machineChose = document.querySelector("#machine-chose");
const result = document.querySelector("#result");
const choseBox = document.querySelector("#chose-box");
const resultBox = document.querySelector("#result-box");
const playBtn = document.querySelector("#play-btn");

const HIDDEN_CLASSNAME = "hidden";

playBtn.addEventListener("click", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const numberInputValue = numberInput.value;
  const userNumberValue = userNumber.value;

  if (userNumberValue === "" || numberInputValue === "") {
    alert("Please enter a positive number in the blank.");
    return;
  }

  let randomNum = Math.floor(Math.random() * numberInputValue);

  if (numberInputValue > userNumberValue) {
    if (numberInputValue > 0 && userNumberValue > 0) {
      choseBox.classList.remove(HIDDEN_CLASSNAME);
      resultBox.classList.remove(HIDDEN_CLASSNAME);
      insertNumber(randomNum);
      const machineChoseValue = parseInt(machineChose.innerText, 10);
      const userChoseValue = parseInt(userChose.innerText, 10);
      if (userChoseValue > machineChoseValue) {
        result.innerText = "You won!";
      } else if (userChoseValue === machineChoseValue) {
        result.innerText = "We are even!";
      } else {
        result.innerText = "You lost!";
      }
    } else {
      alert("Please enter a positive number.");
    }
  } else {
    alert("The guess number must be smaller than the generated number.");
  }
}

function insertNumber(randomNum) {
  userChose.innerText = userNumber.value;
  machineChose.innerHTML = randomNum;
}
