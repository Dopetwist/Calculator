
let buttonLength = document.querySelectorAll("button").length;

for (let i = 0; i < buttonLength; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function() {

        let buttonValue = document.querySelectorAll("button")[i].innerHTML;
        
        switch (buttonValue) {
            case "C":
                document.getElementById("display").value = "0";
                break;
        
            case "9":
                removeDoubleZero();
                removeZero();
                document.getElementById("display").value += buttonValue;
                break;
        
            case "8":
                removeDoubleZero();
                removeZero();
                document.getElementById("display").value += buttonValue;
                break;
        
            case "7":
                removeDoubleZero();
                removeZero();
                document.getElementById("display").value += buttonValue;
                break;
        
            case "6":
                removeDoubleZero();
                removeZero();
                document.getElementById("display").value += buttonValue;
                break;
        
            case "5":
                removeDoubleZero();
                removeZero();
                document.getElementById("display").value += buttonValue;
                break;
        
            case "4":
                removeDoubleZero();
                removeZero();
                document.getElementById("display").value += buttonValue;
                break;
        
            case "3":
                removeDoubleZero();
                removeZero();
                document.getElementById("display").value += buttonValue;
                break;
        
            case "2":
                removeDoubleZero();
                removeZero();
                document.getElementById("display").value += buttonValue;
                break;
        
            case "1":
                removeDoubleZero();
                removeZero();
                document.getElementById("display").value += buttonValue;
                break;
        
            case "0":
                document.getElementById("display").value += buttonValue;
                break;
        
            case "00":
                document.getElementById("display").value += buttonValue;
                break;
        
            case "+":
                removeDoubleZero();
                removeZero();
                document.getElementById("display").value += buttonValue;
                break;
        
            case "-":
                removeDoubleZero();
                removeZero();
                document.getElementById("display").value += buttonValue;
                break;
        
            case "/":
                removeDoubleZero();
                removeZero();
                document.getElementById("display").value += buttonValue;
                break;
        
            case "*":
                removeDoubleZero();
                removeZero();
                document.getElementById("display").value += buttonValue;
                break;
        
            case ".":
                removeDoubleZero();
                removeZero();
                document.getElementById("display").value += buttonValue;
                break;
            
            case "=":
                solve();
                break;

            case "⬅":
                clear();
                break;

            case "ON/OFF":
                switchOff();
                break;
                
            default:
                console.log(buttonValue);
                break;
        } 
    })
    
}

function switchOff() {

    if (document.querySelector("#display").value === " ") {
        document.querySelector("#display").value = "0";
    } else {
        document.querySelector("#display").value = " ";
    }
}

function clear () {

    let input = document.querySelector("#display").value;

    if (input.length === 1) {
        document.querySelector("#display").value = "0";
    } else {
        document.querySelector("#display").value = input.substring(0, input.length - 1);
    }
}

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