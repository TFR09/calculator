const add = function(a, b) {
    return a+b;
}

const subtract = function(a, b) {
    return a-b
}

const multiply = function(a, b) {
    return a*b;
}

const divide = function(a, b) {
    if (b == 0 || b == "") return "Dumbass";
    return a/b;
}

const operate = function(operand, a, b) {
    let answer = operand(Number(a), Number(b));
    screen.innerHTML = answer;
    num2 = ""
    num1 = answer
}

let operations = {"add": add, "minus": subtract, "multiply": multiply, "divide": divide}

//LOGIC

let num1 = ""
let num2 = ""
let operator = null
const screen = document.getElementById("screen");

const clear = document.getElementById("clear")
clear.addEventListener("click", () => {
    num1 = ""
    num2 = ""
    operator = null
    screen.innerHTML = ""
})

const equals = document.getElementById("equals")
equals.addEventListener("click", () => operate(operator, num1, num2)); 

const nums = document.querySelectorAll(".nums")
nums.forEach(num => {
    num.addEventListener("click", () => {
        if (operator != null) {
            num2 += num.value
            screen.innerHTML = num2;
        }
        else {
            num1 += num.value
            screen.innerHTML = num1;
        }
    })
    
});

const operation_buttons = document.querySelectorAll(".operations")
operation_buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (operator != null && num2 != "") {
            operate(operator, num1, num2)
        }
        if (num1 != "") operator = operations[btn.id];
    })
})

const delete_btn = document.querySelector("#delete")
delete_btn.addEventListener("click", () => {
    if (operator == null && num1.length > 0) {
        num1 = num1.slice(0, -1)
        screen.innerHTML = num1
    }
    else if (num2.length > 0) {
        num2 = num2.slice(0, -1);
        screen.innerHTML = num2
    }
})

const decimal = document.querySelector("#decimal")
decimal.addEventListener("click", () => {
    if (operator != null && !num2.includes(".")) {
        num2 += "."
        screen.innerHTML = num2;
    }
    else if (!num1.includes(".")){
        num1 += "."
        screen.innerHTML = num1;
    }
})