// function sayHello () {
//     console.log("Hello")
// }
//
// sayHello();

// function getFullName(user, age, user2) {
//     if(age < 18){
//         console.log(user.first_name, user.last_name + user2 + " " + "CLOSE")
//     } else {
//         console.log(user.first_name, user.last_name + user2 + " " + "OPEN")
//     }
// }
//
// const Name = {
//     first_name: "Maruv",
//     last_name: "Bekeldiev"
// }
//
// const name2 = "Text"
// getFullName (Name, 17, name2)

// const anonym = function () {
//     console.log("test")
// }
//
// anonym()

// function numbers(number1, number2) {
//     if(number1 > number2){
//         console.log("Num1 + Num2")
//     }else if (number1 < number2){
//         console.log("Num1 + NUM2")
//     } else {
//         console.log("===")
//     }
// }
//
// const num1 = prompt("number?")
// const num2 = prompt("number2?")
// numbers(num1, num2)

function twoMass(arr1, arr2) {
    if(arr1.length > arr2.length) {
        console.log("arr1 > arr2")
    } else if(arr1.length < arr2.length){
        console.log("arr1 < arr2")
    }
}

const arr1 = [232, 34, 34, 67]
const arr2 = [234,456,678,678,678]

// twoMass(arr1, arr2)

function bt(){
    let line = "*"
    while(line.length < 7){
        console.log(line)
        line = line + "*"
    }
}

bt()

// const add = () => {
// }