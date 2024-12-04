


function isEven(x, y) {
    if (typeof (x) === 'number' || typeof (y) === 'number') {
        if ((x + y) % 2 === 0) {
            return true
        }
        else return false
    }
    else return NaN

}
function createRandomNumber(min, max) {
    if (typeof (min) !== 'number' || typeof (max) !== 'number' || ) {
        return NaN
    }
    else
        if (min > max) {
            return Math.floor(Math.random() * (min - max) + max)

        }
        else return Math.floor(Math.random() * (max - min) + min)
}


