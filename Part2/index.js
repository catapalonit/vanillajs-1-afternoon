console.log("the house always wins")

let id = document.getElementById("idInput");
let userInputColor = document.getElementById("styleInput");

console.log(id);
console.log(color);

function cardElement(){
    let card = document.getElementById(id.value)
    // let diamonds = document.getElementById("diamonds").style.color = color.value;
    // let hearts = document.getElementById("hearts").style.color = color.value;
    // let clubs = document.getElementById("clubs").style.color = color.value;
    // letdocument.getElementById("spades").style.color = color.value;

    card.style.color = userInputColor.value;

    //try amount.value

}

// let Diamonds = "red";
// let Hearts = "red";
// let Clubs = "black";
// let Spades = "black";