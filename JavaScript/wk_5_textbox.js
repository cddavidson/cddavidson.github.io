function checkIndyTrivia() {
    const answer = document.getElementById("Indy_Answer").value.trim();
    const responseElement = document.getElementById("Indy_Response");
    const correctAnswer = "UChicago"; "University of Chicago"; "U of C"; "The University of Chicago";

    if (answer.toLowerCase() === correctAnswer.toLowerCase())
        {responseElement.textContent = `Correct! You guessed ${answer}.`;}

    else
        {responseElement.textContent = `Incorrect. You guessed ${answer}. Hint: Think Deep Dish Pizza.`;}
}

document.addEventListener("DOMContentLoaded", () => {
    const triviaInput = document.getElementById("Indy_Answer");
    triviaInput.addEventListener("keypress", function(event)
    {if (event.key === "Enter")
        {event.preventDefault();
        checkIndyTrivia();}});

    const numberInput = document.getElementById("number_input");
    numberInput.addEventListener("keypress", function(event)
    {if (event.key === "Enter")
        {event.preventDefault();
        checkNumber();}});
});

function checkNumber() {
    const numInput = document.getElementById("number_input").value.trim();
    const num = parseInt(numInput);
    if (!isNaN(num) && num >= 10000 && num <= 99999)
        {const isEven = num % 2 === 0;
        document.getElementById("number_response").innerText = `The number ${num} is ${isEven ? "even" : "odd"}.`;}
    
    else {
        document.getElementById("number_response").innerText = "Please enter a valid 5-digit number.";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const numberInput = document.getElementById("number_input");
    numberInput.addEventListener("keypress", function(event)
    {if (event.key === "Enter")
        {event.preventDefault();
        checkNumber();}});
});