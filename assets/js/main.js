// Defining Variables
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button") 
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
let historyDisplay = document.querySelector(".history");


// Create a function to calculate based on the button clicked

const calculate =  (btnValue) => {
        display.focus;
        if (btnValue === "=" && output !== "" ) {
            historyDisplay.innerHTML = output;
            // When output has "%" replace it with "/100" before evaluating
            output = eval(output.replace("%", "/100"));
        } else if (btnValue === "AC") {
                output = "";
                historyDisplay.innerHTML = ""
        } else if (btnValue === "DEL") {
                // When DEL button is clicked the last character gets removed from the output
          output = output.toString().slice(0, -1);
        } else {
            // When output is empty and button clicked is specialChars it will return    
            if (output === "" && specialChars.includes(btnValue)) return;
            
            output += btnValue;
        }  
        display.value = output;
};

// Add an Event Listener to buttons abd call calculate() function on click

for(let button of buttons) {
        button.addEventListener("click", (e) => calculate(e.target.dataset.value))
}

        


        

  
        




