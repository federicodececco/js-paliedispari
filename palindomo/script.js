
function palindromeCheck(word) {

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            return false
        }
    }
    return true
}

let userInput = prompt("Scrivi una parola")
if (palindromeCheck(userInput)) {
    alert("La parola è palindrma!")
}
else alert("La parola non è palindroma")


