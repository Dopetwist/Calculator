
const otherBtns = document.querySelectorAll(".others");
const screen = document.getElementById("display");
const switchBtn = document.getElementById("switch-btn");

let buttonLength = document.querySelectorAll("button").length;
let isOn = true;


// Loop through buttons
for (let i = 0; i < buttonLength; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function() {

        let buttonValue = document.querySelectorAll("button")[i].innerHTML;
        
        switch (buttonValue) {
            case "C":
                document.getElementById("display").value = "0";
                break;
        
            case "9":
                value(buttonValue);
                break;
        
            case "8":
                value(buttonValue);
                break;
        
            case "7":
                value(buttonValue);
                break;
        
            case "6":
                value(buttonValue);
                break;
        
            case "5":
                value(buttonValue);
                break;
        
            case "4":
                value(buttonValue);
                break;
        
            case "3":
                value(buttonValue);
                break;
        
            case "2":
                value(buttonValue);
                break;
        
            case "1":
                value(buttonValue);
                break;
        
            case "0":
                document.getElementById("display").value += buttonValue;
                break;
        
            case "00":
                document.getElementById("display").value += buttonValue;
                break;
        
            case "+":
                value(buttonValue);
                break;
        
            case "-":
                value(buttonValue);
                break;
        
            case "/":
                value(buttonValue);
                break;
        
            case "*":
                value(buttonValue);
                break;
        
            case ".":
                value(buttonValue);
                break;
            
            case "=":
                solve();
                break;

            case "⬅":
                clear();
                break;
                
            default:
                console.log(buttonValue);
                break;
        } 
    })
    
}


// Switch button function
switchBtn.addEventListener("click", () => {

    isOn = !isOn;

    if (isOn) {
        screen.value = "0";
        switchBtn.textContent = "OFF";
        enableButtons();
    } else {
        screen.value = "";
        switchBtn.textContent = "ON";
        disableButtons();
    }
});


function enableButtons() {
    otherBtns.forEach(btn => btn.disabled = false);
}

function disableButtons() {
    otherBtns.forEach(btn => btn.disabled = true);
}

// Erase screen data
function clear () {

    let input = document.querySelector("#display").value;

    if (input.length === 1) {
        document.querySelector("#display").value = "0";
    } else {
        document.querySelector("#display").value = input.substring(0, input.length - 1);
    }
}

function value (buttonValue) {
    removeDoubleZero();
    removeZero();
    document.getElementById("display").value += buttonValue;
}

// Evaluate data
function solve () {

    let x = document.querySelector("#display").value;
    let y = eval(x);
                    
    document.querySelector("#display").value = y;

}

function removeZero() {
    
    if (document.querySelector("#display").value[0] === "0") {

        let dValue = document.querySelector("#display").value;

        document.querySelector("#display").value = dValue.substring(1, dValue.length);
    } else {
        document.querySelector("#display").value;
    }
}

function removeDoubleZero () {

    if (document.querySelector("#display").value.substring(0, 2) === "00") {

        let dValue = document.querySelector("#display").value;

        document.querySelector("#display").value = dValue.substring(2, dValue.length);

    } else {
        document.querySelector("#display").value;
    }

}