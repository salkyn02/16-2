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

for(let user of arr){
    console.log(user) // element
}