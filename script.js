const amount = document.getElementById("amount");
const percentage = document.getElementById("percentage");
const calculateBtn = document.getElementById("calculate");
const result = document.getElementById("total");

// function to calculate tip
function calculateTip() {
    const newAmount = amount.value;
    const newPercentage = percentage.value;
    const resultDisplay = newAmount * (1 + newPercentage/100);
    console.log(resultDisplay, "display result")
    result.innerText = `${resultDisplay}`;
}

calculateBtn.addEventListener("click", calculateTip);