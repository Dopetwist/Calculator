
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
                switchOff(buttonValue);
                break;
                
            default:
                console.log(buttonValue);
                break;
        } 
    })
    
}

function switchOff(buttonValue) {

    if (document.querySelector("#display").value === " ") {
        document.querySelector("#display").value = "0";
    } else {
        document.querySelector("#display").value = " ";
    }
}

function clear () {

    let erase = document.querySelector("#display").value;

    document.querySelector("#display").value = erase.substring(0, erase.length - 1);
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

// function detectSwitch () {

//     if (document.querySelector("#display").value === " ") {

        
        

//     } else {
//         document.querySelector("#display").value;
//     }

// }

/*document.querySelector("#switch-btn").addEventListener("click", function () {

    let input = document.querySelector("#display").value;
    
    switch (input) {
        case " ":
            document.querySelector("#display").value = "0";
            break;

        default:
            document.querySelector("#display").value = " ";
            break;
    }
    
}) */


// document.getElementById("display").value = " ";





/* activeKey = document.querySelectorAll(".btn")[i].innerHTML;

function main () {

}


let condition = 0; // Initial condition

function toggleCheck() {
  // Toggle conditions
  condition = (condition + 1) % 3;

  // Apply different conditions based on the state
  switch (condition) {
    case 0:
       console.log("Condition 1 applied.");
      break;
    case 1:
      console.log("Condition 2 applied.");
      break;
    case 2:
      console.log("Condition 3 applied.");
      break;
    // Add more cases if needed
    default:
      console.log("Invalid Condition");
      break;
  }
}*/