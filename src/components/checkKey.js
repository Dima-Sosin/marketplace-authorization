function checkKey(key, code) {
    if (key === "")
    {
        return "Пустая строка!"
    }
    if(/\D/.test(key))
    {
        return "Код не должен содержать буквы!"
    }
    if(key.length !== 6)
    {
        return "Код должен содержать 6 цифр!"
    }
    if (key != code)
    {
        return "Неправильный код!"
    } 
    else 
    {
        return(true)
    }
}
module.exports = checkKey;
