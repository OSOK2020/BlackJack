// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11


// 2. Create a variable, sum, and set it to the sum of the two cards
let hasBlackjack = false
let isAlive = true
let message = ""
let emoji = document.getElementById('emoji-el')
let emoji1 = "\u{1F60A}"
let emoji2 = "\u{1F973}"
let emoji3 = "\u{1F62D}"
let emojies = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.querySelector('#cards-el')

function startGame(){
    let firstCard = Math.floor(Math.random() * 14) + 2
    let secondCard = Math.floor(Math.random() * 14) + 2
    let sum = firstCard + secondCard
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
        emojies = emoji1
    } else if (sum === 21) {
        message = "Wohoo! You've got BlackJAck! "
        hasBlackjack = true
        console.log(hasBlackjack)
        emojies = emoji2
    } else {
        message = "You're out of the game! "
        isAlive = false
        emojies = emoji3
    }
    messageEl.textContent = message
    emoji.textContent = emojies
}

function newCard() {
    console.log('Drawing a new card from the deck!')
}


// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age < 21) {
    console.log("You can not enter the club!")
} else {
    console.log("Welcome!")
}

// Check if the person is elegible for a birthday card from the King! (100)

let ageGift = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (ageGift < 100) {
    console.log("Not elegible")
} else if (ageGift === 100){
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
}

let hasDiscountCode = true

function processOrder() {
    if (hasDiscountCode) {
        console.log("Discount applied to food order")
        hasDiscountCode = false
    } else {
        console.log("No discount applied")
    }
}

processOrder()
processOrder()