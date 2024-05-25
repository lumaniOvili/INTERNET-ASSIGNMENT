
var nsProducts = ["Turmeric Curcumin", "Joint Exercise", "Vegan D", "Vegan K", "Well Balanced Diet", "Muscle Soreness Bundle"]; // sample Products to start with
var proposedProduct;


//**************************Part 1 *************************/

// Variable to store the current letter for default value incrementation
let currentLetter = 'A';
let currentExerciseIndex= 0;
// Function to add a product
function addProduct() {
    // This function is implemented for you
    //reads the value from the newProductId field
    let aProduct= document.getElementById("newProductId").value;
    nsProducts[nsProducts.length]= aProduct;
    listProducts();   //calls listProducts() to reflect the new <li> on the page
    increment(); //calls the function increment to increment the alphabets
}

function increment(){

let currentExercise = document.getElementById("newProductId").value.trim(); // Get the input value
let exerciseParts = currentExercise.split(" "); // Split the input value at spaces
let baseExercise = exerciseParts[0]; // Extract the base exercise name
let currentLetter = exerciseParts[1]; // Extract the current letter
let nextLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1); // Increment the current letter
if (nextLetter > 'Z') { // If the next letter exceeds 'Z', reset to 'A'
    nextLetter = 'A';
}
let nextExercise = baseExercise + " " + nextLetter; // Construct the next exercise name
document.getElementById("newProductId").value = nextExercise; // Update the input field with the next exercise name
listProducts(); // Update the list of products on the webpage

}

function listProducts() {
    let menu = document.getElementById('productsId');
    menu.innerHTML = '';

    for (let i = 0; i < nsProducts.length; i++) {
        addItemToList(nsProducts[i]);
    }
}

function addItemToList(new_item) {
    //You should implment this function
//function addItemToList() adds a new <li> with new_item to list it on the page


var productList = document.getElementById("productsId");// Get the <ul> element with the id "productsId"
var newItem = document.createElement("li");// Create a new <li> element
newItem.innerText = new_item;// Set the inner text of the <li> element to the new item
productList.appendChild(newItem);// Append the new <li> element to the <ul> list

}

//**************************Part 2 *************************/

function randomProduct() {
    //You should implement this function
// Rhis function dsipays a random product from nsProducts array in the corresponding textbox.
let randomIndex = Math.floor(Math.random() * nsProducts.length); // Generate a random index
    let randomProduct = nsProducts[randomIndex]; // Get the product at the random index
    document.getElementById("randomProductId_txt").value = randomProduct.toUpperCase(); // Display the random product in the designated textbox
}


function encrypt() {
    let text = document.getElementById("randomProductId_txt").value.trim(); // Get the plaintext from the designated textbox
    let rotation = parseInt(document.getElementById("num_rotations").value); // Get the number of rotations from the user input
    let encryptedText = ""; // Encrypt the plaintext using the Caesar Cipher
    let caesarCipher= document.getElementById("encr_txt_CC").value.trim(); //Get the value from the CC textbox and trim
    // check if the input text contains only capital letters and spaces
    if (!/^[A-Z\s]+$/.test(text)) {
        alert("Plaintext must contain only capital letters and spaces");
        return;
    }
    if (text.trim()==""){
        alert ("please input name of product");
        return;
    }
    if (isNaN(rotation)){
        alert ("please input number of rotations");
        return;
    }
    if (rotation<0||rotation>20){
        alert ("rotation number must be between 0 and 20");
        return;
    }
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        
        if (charCode >= 65 && charCode <= 90) {
            encryptedText += String.fromCharCode(((charCode - 65 + rotation) % 26) + 65);
        }
        
        else if (charCode = 32) {
            encryptedText += " ";
        }else{
            alert("plain text must contain only capital letters and spaces");
            return;
        }
    }
        //checking if the caesarCypher is null 
        if (caesarCipher===""){
            document.getElementById("encr_txt_CC").value=encryptedText;
        }
}

function resetFunc(){
    //You should implement this function
    document.getElementById("randomProductId_txt").value = ""; // Clear the random product textbox
    document.getElementById("num_rotations").value = ""; // Clear the rotation input textbox
    document.getElementById("encr_txt_CC").value = ""; // Clear the encrypted text textbox

}


