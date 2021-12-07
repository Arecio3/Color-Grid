const container = document.getElementById('container');
// Array of colors
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const square_number = 500;

// Loop to create grid
for (let i=0; i < square_number; i++) {
    // Creates a div
    const square = document.createElement('div');
    // Makes sqaure a css class
    square.classList.add('square');
    // Apply Color
    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    // Remove Color
    square.addEventListener('mouseout', () => {
        removeColor(square)
    })

    // Appends div to container
    container.appendChild(square);
    
}
// Sets random color to square
function setColor(element) {
    const color = randomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
// Gives random color
function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`
}