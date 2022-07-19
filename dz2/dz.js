function numbers (number1, number2){
    if(number1 > number2){
        console.log("Number2")
    } else if ( number1 < number2 ) {
        console.log("Number1")
    } else {
        console.log("===")
    }
}
const number1 = prompt ("Enter first number")
const number2 = prompt ("Enter second number")
numbers(number1, number2)


//////

function countChar (number){
    console.log(number.length)
}

const number = [345, 567, 789, 8, 90]
countChar(number)