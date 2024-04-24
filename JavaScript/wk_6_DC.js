function lastItem(fruits, outputID) {
    const sortedFruits = fruits.toSorted();
    const lastFruit = sortedFruits[sortedFruits.length -1];
    const fruitOutput = document.getElementById(outputID);
    if (!fruitOutput.innterHTML)
        {fruitOutput.innerHTML = `<strong>Sorted Fruits:</strong> ${sortedFruits.join(', ')}
        <br><strong>Last Fruit in Alphabetical Order: </strong> ${lastFruit}`;}
    toggleVisibility(outputID);
}

var responses = {};

function sortInput() {
    let categories = parseInt(prompt("How many categories of things would you like to enter? Please choose between 2 and 4."));
    while (isNaN(categories) || categories < 2 || categories > 4)
        {categories = parseInt(prompt("Invalid Input: Please choose a number between 2 and 4."))}

    for (let i=0; i < categories; i++)
        {let x = (prompt(`Please enter category ${i+1} of ${categories}.`));
        let y =(prompt(`Please enter a type of ${x}.`));
        responses[x] = y}

    console.log(responses);}

        //sortedObjects = responses.toSorted();

        let displayArea = document.getElementById('displayArea');
        for (const [key, value] of Object.entries(responses)) {
            displayArea.innterHTML = `<p><strong>You entered: ${key}</strong></p>`;
            displayArea.innterHTML = `<p><strong>I sorted: ${value}</strong></p>`}



document.getElementById('sortButton').addEventListener('click', sortInput);