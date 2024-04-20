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