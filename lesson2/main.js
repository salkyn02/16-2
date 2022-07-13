const arr = [
    {
        username: 'Jack',
        full_name: 'Jack Barbaro'
    },
    {
        username: 'Jack',
        full_name: 'Jack Barbaro'
    },
    {
        username: 'Jack',
        full_name: 'Jack Barbaro'
    },
    {
        username: 'Jack',
        full_name: 'Jack Barbaro'
    },
    {
        username: 'Jack',
        full_name: 'Jack Barbaro'
    },
]

// console.log(arr[0].username, arr[0].full_name)
// // console.log(arr[1].username, arr[0].full_name)
//  i++;
// i = i + 1

// for(let i = 0; i < arr.length; i++){     // index
//     console.log(arr[i])
//     if(i === 2) {
//         break
//     }
// }

// for(let user of arr){
//     console.log(user) // element
// }

// const obj = {
//     key1: 'b1',
//     key2: 'b2',
//     key3: 'b3',
//     key4: 'b4',
//     key5: 'b5',
// }
//  for (let key in obj){
//      console.log(obj[key])
//  }

// console.log(obj.key)

// let i = 0;
//
//  while (i < 5){
//      console.log('hello')
//      i++
//  }

// const users = [
//     {
//         username: 'jack',
//         salary: 500
//     },
//     {
//         username: 'jack',
//         salary: 5000
//     },
//     {
//         username: 'jack',
//         salary: 10000
//     }
// ]
//
// const filteredUsers = users.filter(user => user.salary > 500)
//
// console.log(filteredUsers)

// for (let user of users){
//     if(user.salary > 500){
//         console.log(user)
//     }
// }


const a = 7
let b = 0

while(b <= a) {
    let result = ''
    for (let i = 0; i < b; i++){
        result += '*'
    }
    console.log(result)
    b++
}



fizzBuzz(22);

function fizzBuzz(num){
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log('fizzBuzz');
        }
        else if (i % 3 === 0) {
            console.log('fizz')
        }
        else if (i % 5 === 0) {
            console.log('Buzz')
        }
        else {
            console.log(i);
        }
    }
}