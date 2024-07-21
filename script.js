console.log('domManip09.js loaded');

let redDiv = document.getElementById('red');
let yellowDiv = document.getElementById('yellow');
let greenDiv = document.getElementById('green');
let resetButton = document.getElementById('resetButton');

const squares = document.querySelectorAll('.colorSquare');

const timesClicked = {
    'red': 0,
    'yellow': 0,
    'green': 0
};

// Function to initialize squares with 0
function initializeSquares() {
    squares.forEach(square => {
        square.innerText = '0';
    });
}

// Set all squares to 0 when the page initially loads
document.addEventListener('DOMContentLoaded', (event) => {
    initializeSquares();
});

squares.forEach(square => {
    square.onclick = (event) => {
        event.preventDefault(); // Prevent any default behavior
        event.stopPropagation(); // Stop the event from bubbling up
        timesClicked[square.value]++;
        square.innerText = timesClicked[square.value];

        // Increase font size to 250%
        square.style.fontSize = '250%';

        // Reset font size to 24px after 1.5 seconds
        setTimeout(() => {
            square.style.fontSize = '24px';
        }, 1500);
    };
});

resetButton.onclick = (event) => {
    event.preventDefault(); // Prevent any default behavior
    squares.forEach(square => {
        timesClicked[square.value] = 0;
        square.innerText = '0';
        square.style.fontSize = '24px'; // Reset font size
    });
};
