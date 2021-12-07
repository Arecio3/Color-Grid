const container = document.getElementById('container');
const square_number = 500;

// Loop to create grid
for (let i=0; i < square_number; i++) {
    // Creates a div
    const square = document.createElement('div');
    // Makes sqaure a css class
    square.classList.add('square');
    // Appends div to container
    container.appendChild(square);
}