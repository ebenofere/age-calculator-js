const form = document.getElementById("form");
const birthday = document.getElementById("birthday");
const result = document.getElementById("total");

// function to calculate tip
function calculateAge(e) {
    e.preventDefault();

    // enter a date
    let dob = new Date(birthday.value).getFullYear();

    // get current date
    let today = new Date().getFullYear();

    let resultDisplay = today - dob;

    result.innerText = `${resultDisplay}`;
}

form.addEventListener("submit", calculateAge);