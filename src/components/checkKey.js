function checkKey(value, code) {
    if (value === "") {
        return ("Введите код из СМС!")
    } else if (value != code) {
        return ("Неправильный код!")
    } else {
        return(true)
    }
}
module.exports = checkKey;
