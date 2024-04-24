function lastItem(fruits, outputID) {
    const sortedFruits = fruits.toSorted();
    const lastFruit = sortedFruits[sortedFruits.length -1];
    const fruitOutput = document.getElementById(outputID);
    if (!fruitOutput.innterHTML)
        {fruitOutput.innerHTML = `Sorted Fruits: ${sortedFruits.join(', ')}
        <br>Last Fruit in Alphabetical Order: ${lastFruit}`;}
    toggleVisibility(outputID);
}
