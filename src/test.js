const checkPhone = require('./components/checkPhone');
const checkKey = require('./components/checkKey');

test('первый тест, надеюсь получится', () => {
    expect(checkPhone("89061980125", /^(\+7|8)[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/)).toBe(true);
});

test('второй тест, надеюсь получится', () => {
    expect(checkKey(123456, 123456)).toBe(true);
});