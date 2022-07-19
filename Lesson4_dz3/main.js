// const doc = document
// console.log(doc)

const blocks = document.getElementsByClassName("main")
// console.log(blocks)

const block3 = document.getElementById("block3")

//block3.className = "changedClass"

block3.classList.add("newClass")
// block3.classList.remove("block")
//
// console.log(block3.classList)
// block3.onclick = () => {
//     block3.classList.toggle("active")
// }

// const block = document.querySelector(".block")
// console.log(block)
//
// const block2 = document.querySelectorAll(".block")
// console.log(block2)

const input = document.getElementById("input")
const button = document.getElementById("button")

// console.log(input)
// console.log(button)

// const div = document.createElement("div")
// div.setAttribute("class", "block")
// document.body.append(div)
// console.log(div)

// button.onclick = () => {
//     console.log(input.value)
//     input.value = " "
// }

button.onclick = () => {
    const div = document.createElement("div")
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "delete"
    deleteButton.onclick = (e) => {
        e.target.parentElement.remove()
}
    const changeButton = document.createElement("button")
    const text = document.createElement("p")
    changeButton.innerText = "change"
    changeButton.onclick = (e) => {
        e.target.nextSibling.innerText = prompt("What would you like to change?")
        console.log(e.target.nextSibling)
}

    div.setAttribute("class", "block")
    text.innerText = input.value

    div.append(deleteButton, changeButton, text)
    document.body.append(div)
    input.value = ""
}



