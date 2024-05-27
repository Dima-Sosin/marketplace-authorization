/**
 * Функция осуществляет проверку введенного кода из СМС
 * @param {*} key код, который ввел пользователь
 * @param {*} code правильный код
 * @returns возвращает или сообщение ошибке или true
 */
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
