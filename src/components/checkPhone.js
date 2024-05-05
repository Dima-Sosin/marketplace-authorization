function checkPhone(number, valid) {
    if (number === "") 
    {
        return "Пустая строка!";
    }
    if (!(/^(\+7|8)/.test(number)))
    {
        return "Номер должен начинаться с +7 или 8!";
    }
    if(valid.test(number)) 
    {
        return true;
    } 
    else 
    {
        return "Неправильный номер!";
    }
}
module.exports = checkPhone;
