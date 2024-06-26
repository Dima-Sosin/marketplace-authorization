import { Builder, By, until } from 'selenium-webdriver';
import fs from'fs';

/**
 * Ассинхронная функция интеграыционного тестирования формы ввода номера телефона
 */
async function phoneTest() {
    let driver = await new Builder().forBrowser("chrome").build();           //открываем браузер
    try {
        await driver.get("http://localhost:5173/");                          //заходим на страницу
        

        let input_phone = await driver.wait(until.elementLocated(By.name("input-phone")), 1000);
        let error_msg = await driver.wait(until.elementLocated(By.id("error-msg")), 1000);
        let button1 = await driver.wait(until.elementLocated(By.name("button1")), 1000);


        await input_phone.sendKeys(" ");                                     //пустой номер телефона
        await button1.click();
        await driver.wait(until.elementIsVisible(error_msg), 1000);
        await driver.wait(until.elementTextContains(error_msg, "Пустая строка!"), 1000);
        fs.writeFileSync('src/screenshots/screenshot1.png', await driver.takeScreenshot(), 'base64');


        await input_phone.clear();
        await input_phone.sendKeys("8 904 176 25344");                      //неправильный номер телефона
        await button1.click();
        await driver.wait(until.elementIsVisible(error_msg), 1000);
        await driver.wait(until.elementTextContains(error_msg, "Неправильный номер!"), 1000);
        fs.writeFileSync('src/screenshots/screenshot2.png', await driver.takeScreenshot(), 'base64');

        
        await input_phone.clear();
        await input_phone.sendKeys("7 904 176 25 34");                    //неправильный номер телефона с 7
        await button1.click();
        await driver.wait(until.elementIsVisible(error_msg), 1000);
        await driver.wait(until.elementTextContains(error_msg, "Номер должен начинаться с +7 или 8!"), 1000);
        fs.writeFileSync('src/screenshots/screenshot3.png', await driver.takeScreenshot(), 'base64');


        await input_phone.clear();
        await input_phone.sendKeys("8 904 176 25 34");                    // правильный номер телефона с 8 с пробелами
        fs.writeFileSync('src/screenshots/screenshot4.png', await driver.takeScreenshot(), 'base64');
        await button1.click();
        await driver.navigate().refresh();


        input_phone = await driver.wait(until.elementLocated(By.name("input-phone")), 1000);
        error_msg = await driver.wait(until.elementLocated(By.id("error-msg")), 1000);
        button1 = await driver.wait(until.elementLocated(By.name("button1")), 1000);


        await input_phone.clear();
        await input_phone.sendKeys("+79041762534");                       // правильный номер телефона с +7 слитно
        fs.writeFileSync('src/screenshots/screenshot5.png', await driver.takeScreenshot(), 'base64');
        await button1.click();
        await driver.navigate().refresh();


        input_phone = await driver.wait(until.elementLocated(By.name("input-phone")), 1000);
        error_msg = await driver.wait(until.elementLocated(By.id("error-msg")), 1000);
        button1 = await driver.wait(until.elementLocated(By.name("button1")), 1000);


        await input_phone.clear();
        await input_phone.sendKeys("8-904-176-25-34");                    // правильный номер телефона с 8 через дефис
        fs.writeFileSync('src/screenshots/screenshot6.png', await driver.takeScreenshot(), 'base64');
        await button1.click();
        await driver.navigate().refresh();


        console.log("\nТест №001 пройден успешно!\n")

    } catch (error) {
        console.error('\nТест №001 не пройден, ошибка:', error);
    } finally {
        await driver.quit();
    }
}

/**
 * Ассинхронная функция интеграционного тестирования формы ввода кода из СМС
 */
async function keyTest() {
    let driver = await new Builder().forBrowser("chrome").build();         //открываем браузер
    try {
        await driver.get("http://localhost:5173/");                        //заходим на страницу


        await driver.findElement(By.name("input-phone")).sendKeys("8 904 176 25 34");  // правильный номер телефона с 8 с пробелами
        await driver.findElement(By.name("button1")).click();


        let input_key = await driver.wait(until.elementLocated(By.name("input-key")), 1000);;
        let error_msg = await driver.wait(until.elementLocated(By.id("error-msg")), 1000);
        let button2 = await driver.wait(until.elementLocated(By.name("button2")), 1000);


        await input_key.sendKeys(" ");                         //вводим пустую строку               
        await button2.click();
        await driver.wait(until.elementIsVisible(error_msg), 1000);
        await driver.wait(until.elementTextContains(error_msg, "Пустая строка!"), 1000);
        fs.writeFileSync('src/screenshots/screenshot7.png', await driver.takeScreenshot(), 'base64');


        await input_key.clear();
        await input_key.sendKeys("123");                 //вводим меньше 6 знаков
        await button2.click();
        await driver.wait(until.elementIsVisible(error_msg), 1000);
        await driver.wait(until.elementTextContains(error_msg, "Код должен содержать 6 цифр!"), 1000);
        fs.writeFileSync('src/screenshots/screenshot8.png', await driver.takeScreenshot(), 'base64');

        
        await input_key.clear();
        await input_key.sendKeys("12т456");               //вводим код содержащий буквы
        await button2.click();
        await driver.wait(until.elementIsVisible(error_msg), 1000);
        await driver.wait(until.elementTextContains(error_msg, "Код не должен содержать буквы!"), 1000);
        fs.writeFileSync('src/screenshots/screenshot9.png', await driver.takeScreenshot(), 'base64');


        await input_key.clear();
        await input_key.sendKeys("654321");               //вводим неправильный код
        await button2.click();
        await driver.wait(until.elementIsVisible(error_msg), 1000);
        await driver.wait(until.elementTextContains(error_msg, "Неправильный код!"), 1000);
        fs.writeFileSync('src/screenshots/screenshot10.png', await driver.takeScreenshot(), 'base64');


        await input_key.clear();
        await input_key.sendKeys("123456");               //вводим правильный код
        fs.writeFileSync('src/screenshots/screenshot11.png', await driver.takeScreenshot(), 'base64');
        await button2.click();


        console.log("\nТест №002 пройден успешно!\n")

    } catch (error) {
        console.error('\nТест №002 не пройден, ошибка:', error);
    } finally {
        await driver.quit();
    }
      
}

/**
 * Ассинхронная функция интеграционного тестирования наличия элементов интерфейса
 */
async function checkTest() {
    let driver = await new Builder().forBrowser("chrome").build();            //открываем браузер
    try {
        await driver.get("http://localhost:5173/");                           //заходим на страницу


        let marketplace = await driver.wait(until.elementLocated(By.className("name-marketplace")), 1000);
        let title = await driver.wait(until.elementLocated(By.className("title")), 1000);
        let button = await driver.wait(until.elementLocated(By.name("button1")), 1000);


        await driver.wait(until.elementIsVisible(marketplace), 1000);   //проверяем надпись marketplace
        await driver.wait(until.elementTextContains(marketplace, "Marketplace"), 1000);


        await driver.wait(until.elementIsVisible(title), 1000);    //проверяем заголовок "Авторизация"
        await driver.wait(until.elementTextContains(title, "Авторизация"), 1000);


        await driver.wait(until.elementIsVisible(button), 1000);    //проверяем надпись на кнопке
        await driver.wait(until.elementTextContains(button, "Продолжить"), 1000);
        
        fs.writeFileSync('src/screenshots/screenshot12.png', await driver.takeScreenshot(), 'base64');


        await driver.findElement(By.name("input-phone")).sendKeys("8 904 176 25 34");  //вводим правильный номер телефона
        await driver.findElement(By.name("button1")).click();


        marketplace = await driver.wait(until.elementLocated(By.className("name-marketplace")), 1000);
        title = await driver.wait(until.elementLocated(By.className("title")), 1000);
        button = await driver.wait(until.elementLocated(By.name("button2")), 1000);


        await driver.wait(until.elementIsVisible(marketplace), 1000);   //проверяем надпись marketplace
        await driver.wait(until.elementTextContains(marketplace, "Marketplace"), 1000);


        await driver.wait(until.elementIsVisible(title), 1000);    //проверяем заголовок "Авторизация"
        await driver.wait(until.elementTextContains(title, "Авторизация"), 1000);


        await driver.wait(until.elementIsVisible(button), 1000);    //проверяем надпись на кнопке
        await driver.wait(until.elementTextContains(button, "Войти"), 1000);

        fs.writeFileSync('src/screenshots/screenshot13.png', await driver.takeScreenshot(), 'base64');


        console.log("\nТест №003 пройден успешно!\n")

    } catch (error) {
        console.error('\nТест №003 не пройден, ошибка:', error);
    } finally {
        await driver.quit();
    }
}

phoneTest();       //запускаем тест №001
keyTest();         //запускаем тест №002
checkTest();       //запускаем тест №003