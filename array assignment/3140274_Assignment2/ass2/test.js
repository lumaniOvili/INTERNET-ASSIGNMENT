let elements = [];
let myNamedSamples = [];
const myName = "Ovili";
//part 
document.getElementById('elementForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ignore default reload
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    
    const n = Math.floor(Math.random() * (max - min + 1)) + min;
    generateSomething(elements, n, 'mineralCompound', 'Generated Elements');
    generateSomething(myNamedSamples, 7, myName, 'myNamedSamples');


    document.getElementById('generatedElements').textContent = JSON.stringify(elements);
    document.getElementById('myNamedSamples').textContent = JSON.stringify(myNamedSamples);

    const myAndOriginal = (addToOriginalArray(myNamedSamples));
    const rnd_num = Math.floor(Math.random() * (myAndOriginal.length-1));
    suggestRandomItem(myAndOriginal);
    generateFactors(myAndOriginal, rnd_num);
  });

  const generateSomething = (arr, len, name, message) => {
    for (let i = 0; i < len; i++) {
        arr.push({ type: `${name}_${i}`, count: i });
    }
    //this function reduces repition in part A and B
  } 


//   Part B
const addToOriginalArray = (myNamedSamples) => {
    // Create a new array to hold myNamedSamples and original elements
    return [...myNamedSamples, ... elements];
}

// part C
const suggestRandomItem = myAndOriginal => {
    const index = Math.floor(Math.random() * myAndOriginal.length);
    
    // Get the object at the random index
    let randomItem = myAndOriginal[index];
    
    // filter _0..
    randomItem = randomItem.type.replace(/_[0-9]$/,  ""); // remove _ and any  number at the end of the string

    // Print the suggested item to the console
    console.log('Suggested Item:', randomItem);

    // Print whether the suggested item includes your name or not
    console.log(randomItem === myName 
        ? 
        'Yes, the randomly suggested element includes my name.'
        :
        'No, the randomly suggested element DOES NOT include my name.');  
        
    // Return the suggested item
    return randomItem;
}
//part D
const generateFactors = (myAndOriginal, rnd_num) => {
    let array_Factors = [];
    for (i=0; i<myAndOriginal.length -1; i++) {
        if (rnd_num % i === 0) {
            // If i is a factor, push the corresponding object to array_Factors
            array_Factors.push(myAndOriginal[i]);
        }
    }
    // Output array_Factors and rnd_num to the console
    console.log('rnd_num:', rnd_num);
    console.log('array_Factors:', array_Factors);
    document.getElementById('array_Factors').textContent = JSON.stringify(array_Factors);
    // Return array_Factors
    return array_Factors;
}