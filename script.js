// Initialize the current number to 0 and the other variables to null or an empty string
let currentNumber = '0';
let previousNumber = '';
let selectedOperation = null;

// Get the element that displays the total
const totalArea = document.querySelector('.total');
// Get the container that holds all the calculator buttons
const btnClick = document.querySelector('.calc-container');

const backBtn = document.querySelector('.back');

function handlesEquals(){
    switch (selectedOperation) {
        case '+':
            currentNumber = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            currentNumber = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            currentNumber = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;        
        case '÷':
            currentNumber = parseFloat(previousNumber) / parseFloat(currentNumber);
            break; 
    }

    previousNumber = '';
    selectedOperation = null;

    totalArea.textContent = currentNumber;
};


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
    else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '÷') {
      switch (buttonValue) {
        case '+':
            selectedOperation = '+';
            previousNumber = currentNumber;
            currentNumber = '';
            break;
        case '-':
            selectedOperation = '-';
            previousNumber = currentNumber;
            currentNumber = '';
            break;
        case '*':
            selectedOperation = '*';
            previousNumber = currentNumber;
            currentNumber = '';
            break;        
        case '÷':
            selectedOperation = '÷';
            previousNumber = currentNumber;
            currentNumber = '';
            break;                           
      }
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
          handlesEquals();
          break; 
        // Add more cases for other special buttons, if needed
        case '.':
            currentNumber += '.';
            totalArea.textContent = currentNumber;
            break;
        case '←':
            const input = document.querySelector('.total-input');
            let cursorPosition = input.selectionStart;
            if (cursorPosition === 0) {
              return;
            } else {
              cursorPosition--;
            }
            input.setSelectionRange(cursorPosition, cursorPosition);

            input.addEventListener('click', function(){
                cursorPosition = input.selectionStart;
            })
            break;
      }
    }
  }
});
