


function isEven(x, y) {
    if (!isNaN(parseFloat(x)) && !isNaN(parseFloat(y))) {
        if ((x + y) % 2 === 0) {
            return true
        }
        else return false
    }
    else return NaN

}
function createRandomNumber(min, max) {
    if (isNaN(parseFloat(min)) || isNaN(parseFloat(max))) {
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

} while (isNaN(parseFloat(userNumber)) || userNumber > 5 || userNumber < 1)

let computerNumber = createRandomNumber(1, 5)

if (userChoice === 'pari' && (isEven(userNumber, computerNumber)) || userChoice === 'dispari' && !(isEven(userNumber, computerNumber))) {

    alert("Hai vinto!")

}

else {

    alert("Hai perso!")

}


