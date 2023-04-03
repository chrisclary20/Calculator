// Initialize the current number to 0 and the other variables to null or an empty string
let currentNumber = '0';
let previousNumber = '';
let selectedOperation = null;

// Get the element that displays the total
const totalArea = document.querySelector('.total');
// Get the container that holds all the calculator buttons
const btnClick = document.querySelector('.calc-container');

// Add an event listener to the container, listening for clicks on any of the buttons
btnClick.addEventListener('click', function(event) {

  // Check if the clicked element is a button
  if (event.target.tagName === 'BUTTON') {
    const buttonValue = event.target.textContent;
    
    // Check if the clicked button is a number
    if (!isNaN(buttonValue)) {
      // If the currentNumber is '0', replace the '0' with the new buttonValue
      if (currentNumber === '0') {
        currentNumber = buttonValue;
      } else {
        // Otherwise, concatenate the buttonValue to the currentNumber
        currentNumber += buttonValue;
      }
      // Update the total area to display the current number
      totalArea.textContent = currentNumber;
    }
    // Check if the clicked button is an operator
    else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
      // Handle operator button click
      // Not implemented in this calculator
    }
    // Check if the clicked button is a special button (AC, DEL, etc.)
    else {
      switch (buttonValue) {
        case 'AC':
          // Handle AC button click
          // If there are no numbers in the total area, do nothing
          if (totalArea.textContent.trim() === '') {
            return;
          } else {
            // Otherwise, set the current number to '0'
            currentNumber = '0';
            totalArea.textContent = currentNumber;
          }
          break;
        case 'DEL':
          // Handle DEL button click
          // If the current number is already '0', do nothing
          if (currentNumber === '0') {
            return;
          } 
          // If the current number is an empty string, do nothing
          else if (currentNumber === ''){
            return;
          } 
          // If the current number has at least one digit, remove the last digit
          else if (currentNumber.length > 0) {
            currentNumber = currentNumber.slice(0, -1);
          } 
          // If none of the above conditions are met, set the current number to '0'
          else {
            currentNumber = '0';
          }
          // Update the total area to display the current number
          totalArea.textContent = currentNumber;
          break;
        case '=':
          // Handle equal button click
          // If either the current or previous number is '69', display 'nice.'
          if (previousNumber === '69' || currentNumber === '69') {
            totalArea.textContent = 'nice.';
            currentNumber = '';
            previousNumber = '';
            selectedOperation = null;
          } 
          // If either the current or previous number is '420', display a message about it being that time
          else if (previousNumber === '420' || currentNumber === '420') {
            totalArea.textContent = "🌿🌿🌿 It's that time friends. 🌿🌿🌿";
            currentNumber = '';
            previousNumber = '';
            selectedOperation = null;
          }
          break; 
        // Add more cases for other special buttons, if needed
      }
    }
  }
});