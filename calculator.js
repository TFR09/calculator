const nothing = function() {return }

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
    let answer = operand(parseInt(a), parseInt(b));
    screen.innerHTML = answer;
    num2 = ""
    num1 = answer
}

let operations = {"add": add, "minus": subtract, "multiply": multiply, "divide": divide}

//LOGIC

let num1 = ""
let num2 = ""
let operator = nothing
const screen = document.getElementById("screen");

const clear = document.getElementById("clear")
clear.addEventListener("click", () => {
    num1 = ""
    num2 = ""
    operator = nothing
    screen.innerHTML = ""
})

const equals = document.getElementById("equals")
equals.addEventListener("click", () => {
    operate(operator, num1, num2)
}); 

const nums = document.querySelectorAll(".nums")
nums.forEach(num => {
    num.addEventListener("click", () => {
        console.log(`bef nums ${num1}, ${num2}`)
        if (operator != nothing) {
            
            num2 += num.value
            screen.innerHTML = num2;
        }
        else {
            num1 += num.value
            screen.innerHTML = num1;
        } 
        console.log(`aft nums ${num1}, ${num2}`)
    })
    
});

const operation_buttons = document.querySelectorAll(".operations")
operation_buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (operator != nothing && num2 != "") {
            operate(operator, num1, num2)

        }
        operator = operations[btn.id]
    })
})

