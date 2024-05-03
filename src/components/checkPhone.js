function checkPhone(value, valid) {
    if (value === "") {
        return "Введите номер телефона!";
    } else if (valid.test(value)) {
        return true;
    } else {
        return "Неправильный номер!";
    }
}
module.exports = checkPhone;
