let board = []

function play(value){
    let player = document.getElementById("player");
    let element = document.getElementById(value);

    if (player.innerText === "X"){
        player.innerText =  "O";
        element.innerText = "X";
        board[value] = "X"
    } else {
        player.innerText = "X";
        element.innerText = "O";
        board[value] = "O"
    }


let topLeft = board[0];
let topMid = board[1];
let topRight = board[2];
let midLeft = board[3];
let midMid = board[4];
let midRight = board[5];
let bottomLeft = board[6];
let bottomMid = board[7];
let bottomRight = board[8];

if (topLeft !== undefined && topLeft === topMid && topMid === topRight) {
    window.alert("You Win!")
    return
} else if (midLeft !== undefined && midLeft === midMid && midMid === midRight){
    window.alert("You Win!")
    return
} else if (bottomLeft !== undefined && bottomLeft === bottomMid && bottomMid === bottomRight){
    window.alert("You Win!")
} else if (topLeft !== undefined && topLeft === midLeft && midLeft === bottomLeft){
    window.alert("You Win!")
    return
} else if (topMid !== undefined && topMid === midMid && midMid === bottomMid){
    window.alert("You Win!")
    return
} else if (topRight !== undefined && topRight === midRight && midRight === bottomRight){
    window.alert("You Win!")
    return
} else if (topLeft !== undefined && topLeft === midMid && midMid === bottomRight){
    window.alert("You Win!")
    return
} else if (topRight !== undefined && topRight === midMid && midMid === bottomLeft){
    window.alert("You Win!")
    return
}


let fullBoard = true
for (let i = 0; i < 9; i++){
    if(board[i] === undefined){
        fullBoard = false
    }
}
    if (fullBoard === true){
        window.alert("Cat's Game")
    }
}

