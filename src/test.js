const checkPhone = require('./components/checkPhone');
const checkKey = require('./components/checkKey');

const valid = /^(\+7|8)[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/;

test('001 Пустой номер телефона', () => {
    expect(checkPhone("", valid)).toBe("Пустая строка!");
});

test('002 Правильный номер телефона слитно', () => {
    expect(checkPhone("+79041762534", valid)).toBe(true);
});

test('003 Номер телефона начинается с 7', () => {
    expect(checkPhone("79041762534", valid)).toBe("Номер должен начинаться с +7 или 8!");
});

test('004 Номер телефона с пробелами', () => {
    expect(checkPhone("8 904 176 25 34", valid)).toBe(true);
});

test('005 Номер телефона с дефисами', () => {
    expect(checkPhone("8-904-176-25-34", valid)).toBe(true);
});



test('006 Пустой код', () => {
    expect(checkKey("", "123456")).toBe("Пустая строка!");
});

test('007 Правильный код', () => {
    expect(checkKey("123456", "123456")).toBe(true);
});

test('008 Код содержит более/менее 6 знаков', () => {
    expect(checkKey("123", "123456")).toBe("Код должен содержать 6 цифр!");
});

test('009 Код содержит, буквы', () => {
    expect(checkKey("12т456", "123456")).toBe("Код не должен содержать буквы!");
});