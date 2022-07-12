const name = prompt("What is your name?")
console.log(name)

const user = alert("Hello," + name)


let arr = ['Ivan', 'Olya']

let arr1 = ['Emil', true, false, 35]

if(arr.length < arr1.length){
    console.log(arr1)
} else if (arr.length > arr1.length){
    console.log(arr)
} else {
    console.log('arr.length = arr1.length')
}