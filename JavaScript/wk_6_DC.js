function lastItem(fruits, outputID) {
    const sortedFruits = fruits.toSorted();
    const lastFruit = sortedFruits[sortedFruits.length -1];
    const fruitOutput = document.getElementById(outputID);
    if (!fruitOutput.innterHTML)
        {fruitOutput.innerHTML = `<strong>Sorted Fruits:</strong> ${sortedFruits.join(', ')}
        <br><strong>Last Fruit in Alphabetical Order: </strong> ${lastFruit}`;}
    toggleVisibility(outputID);
}

const responses = {};

function sortInput() {
    let categories = parseInt(prompt("How many categories of things would you like to enter? Please choose between 2 and 4 inclusive."));
    while (isNaN(categories) || categories < 2 || categories > 4)
        {categories = parseInt(prompt("Invalid Input: Please choose a number between 2 and 4 inclusive."))}

    for (let i=0; i < categories; i++)
        {let x = (prompt(`Please enter category ${i+1} of ${categories}.`));
        let y =(prompt(`Please enter a type of ${x}.`));
        responses[x] = y}

    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<p><strong>You entered:</strong></p>`;
    document.getElementById("userEntriesTitle").appendChild(newDiv);

    let newDiv_2 = document.createElement("div");
    newDiv_2.innerHTML = `<p><strong>I sorted them as in the following order:</strong></p>`;
    document.getElementById("sortedEntriesTitle").appendChild(newDiv_2);

    const responseKeys = Object.keys(responses);
    const responseValuesSorted = Object.values(responses).toSorted();
    
    for (const key of responseKeys) {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<p><strong>Your ${key} is called ${responses[key]}.</strong></p>`
        document.getElementById("userEntries").appendChild(newDiv)}

    for (const value of responseValuesSorted) {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<p><strong>${value}</strong></p>`
        document.getElementById("sortedEntries").appendChild(newDiv)}

};

document.getElementById('sortButton').addEventListener('click', sortInput);