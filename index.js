let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")
let add1Home = document.getElementById("first-home")
let add2Home = document.getElementById("second-home")
let add3Home = document.getElementById("third-home")
let add1Guest = document.getElementById("third-guest")
let add2Guest = document.getElementById("third-guest")
let add3Guest = document.getElementById("third-guest")
let reset = document.getElementsByClassName("reset-btn")
let countHome = 0
let countGuest = 0

function firstHomeEl() {
    countHome += 1
    score1.innerText = countHome
}

function secondHomeEl() {
    countHome += 2
    score1.innerText = countHome
}

function thirdHomeEl() {
    countHome += 3
    score1.innerText = countHome
}

function firstGuestEl() {
    countGuest += 1
    score2.innerText = countGuest
}

function secondGuestEl() {
    countGuest += 2
    score2.innerText = countGuest
}

function thirdGuestEl() {
    countGuest += 3
    score2.innerText = countGuest
}

function resetHome() {
    score1.innerText = 0
    countHome = 0
}
function resetGuest() {
    score2.innerText = 0
    countGuest = 0
}


