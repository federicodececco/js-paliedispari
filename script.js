


function isEven(x, y) {
    if (typeof (x) === 'number' && typeof (y) === 'number') {
        if ((x + y) % 2 === 0) {
            return true
        }
        else return false
    }
    else return NaN

}
function createRandomNumber(min, max) {
    if (typeof (min) !== 'number' || typeof (max) !== 'number'  ) {
        return NaN
    }
    else
        if (min > max) {
            return Math.floor(Math.random() * (min - max) + max)

        }
        else return Math.floor(Math.random() * (max - min) + min)
}


let userChoice
let userNumber

do {
    userChoice = prompt("Scegli: pari o dispari?")
} while (userChoice !== "pari" && userChoice !== "dispari")

do {
    userNumber = prompt("Scegli un numero da 1 a 5")
} while (typeof (userNumber) !== 'number' || userNumber > 5 || userNumber < 1)
let computerNumber = createRandomNumber(1, 5)
if (userChoice === 'pari' && (isEven(userNumber, computerNumber))) {
    alert("Hai vinto!")

}
else if (userChoice === 'dispari' && !(isEven(userNumber, computerNumber))) {
    alert("Hai vinto!")

}
else {
    alert("Hai perso!")

}


