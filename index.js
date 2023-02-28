let left = 0
let right=0

let leftNumber = document.getElementById("left-number")
let rightNumber = document.getElementById("right-number")

function plusOneLeft() {
    left += 1
    leftNumber.textContent = left
}
function plusTwoLeft() {
    left += 2
    leftNumber.textContent = left
}
function plusThreeLeft() {
    left += 3
    leftNumber.textContent = left
}
function plusOneRight() {
    right += 1
    rightNumber.textContent = right
}
function plusTwoRight() {
    right += 2
    rightNumber.textContent = right
}
function plusThreeRight() {
    right += 3
    rightNumber.textContent = right
}

function reset() {
    left = 0
    right = 0
    leftNumber.textContent = left
    rightNumber.textContent = right
    
}

function winner() {
    let win
    if (left>right){
        win = "Home"
    }
    else if (right>left){
        win = "Guest"
    }
    else {
        win = "Tie"
    }
    document.getElementById("winner").textContent = "Winner is: " + win
}


console.log(left)