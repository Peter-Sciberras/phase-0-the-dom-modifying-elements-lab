// Write your code here!
// Remove main#main element
document.getElementById("main").remove();

// Create new h1 element and store it in the newHeader variable
var newHeader = document.createElement("h1");

// Add id "victory" to the newHeader element
newHeader.id = "victory";

// Set the text content of the newHeader element to "YOUR-NAME is the champion"
newHeader.textContent = "Peter Sciberras is the champion";

// Append the newHeader element to the body of the document
document.body.appendChild(newHeader);