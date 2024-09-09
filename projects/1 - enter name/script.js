// alert("lets do some arithmetic operations")
let yourNaam = prompt("Please Enter your name")

alert(`Hello ${yourNaam} please enter 2 numbers to perform the arithmetic operations`)
let num1 = parseInt(prompt(`Enter 1st number`))
if(typeof(num1) != "number" || isNaN(num1)){
    alert("incorrect input please try again")
}else{
    let num2 = parseInt(prompt(`Enter 2nd number!`))
    if(typeof(num2) != "number" || isNaN(num2)){
        alert("incorrect input please try again")
    }
    else{
        alert("u have to select the mathematical opeartion i.e.,: +,-,*,/,%")
        let modeofoperation = prompt("enter the symbol of mathematical operation")
        if(modeofoperation == "+"){
            prompt(`The Sum of the two numbers is: ${num1+num2}`)
        }else if(modeofoperation == "-"){
            prompt(`The Subtraction of the two numbers is: ${num1-num2}`)
        }else if(modeofoperation == "*"){
            prompt(`The Multiplication of the two numbers is: ${num1*num2}`)
        }else if(modeofoperation == "*"){
            prompt(`The division of the two numbers is: ${num1/num2}`)
        }else if(modeofoperation == "*"){
            prompt(`The Modulo of the two numbers is: ${num1%num2}`)
        }else{
            prompt(`Incorrect symbol. please try again`)
        }
    }
}