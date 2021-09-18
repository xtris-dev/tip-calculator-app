// Get all HTML elements
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");
const resetBtn = document.getElementById("reset");
const tipBtn = document.querySelectorAll(".tip-btn");
const customInput = document.getElementById("custom");
const tipFiveBtn = document.getElementById("5");
const cantBeZero = document.getElementById("cant-be")

let billValue = 0;
let peopleValue = 1;
let tipValue = 0.05;
let tipAmountPersonValue;
let personTotalValue;


// function to calculate tip amout/person & total /person. Actualisez each time a data is changed
function personCalculator() {
    tipAmountPersonValue = (billValue * tipValue) / peopleValue;
    tipAmount.innerText = `$${tipAmountPersonValue.toFixed(2)}`;
    personTotalValue = (billValue / peopleValue) + tipAmountPersonValue;
    total.innerText = `$${personTotalValue.toFixed(2)}`;
};

// Function reset
function reset() {
    resetBtn.classList.remove("reset-btn-active");
    if(billValue !== 0 && peopleValue !== 0) {
        resetBtn.classList.add("reset-btn-active");
        resetBtn.addEventListener("click", () => {
            billInput.value = "0"
            billValue = 0;
            peopleInput.value = "1";
            peopleValue = 1;
            customInput.value = "";
            customValue = 0;
            tipValue = 0.05;
            personCalculator()
            resetBtn.classList.remove("reset-btn-active");
        });
    }
}

// Get number in all input
billInput.addEventListener("input", (e) => {
        billValue = e.target.value;
        billValue = Number(billValue);
        personCalculator()
        reset()
});
peopleInput.addEventListener("input", (e) => {
        peopleValue = e.target.value;
        peopleValue = Number(peopleValue);
        if (peopleValue === 0) {
            peopleInput.classList.add("error-input");
            cantBeZero.style.display = "block"
        } else {
            peopleInput.classList.remove("error-input");
            cantBeZero.style.display = "none"
        }
        personCalculator()
        reset()
});
let customValue = customInput.addEventListener("input", (e) => {
        tipValue = e.target.value;
        tipValue = Number(tipValue);
        tipValue /= 100;
        personCalculator()
        reset()
});

tipBtn.forEach((tipBtns) => {
    tipBtns.addEventListener("click", (e) => {
        tipValue = e.target.id;
        tipValue = Number(tipValue);
        tipValue /= 100;
        console.log(e);
        personCalculator()
        reset()
    });
});

