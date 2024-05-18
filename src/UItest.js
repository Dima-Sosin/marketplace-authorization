import { Builder, By } from 'selenium-webdriver';
import assert from "assert";

async function phoneTest() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://localhost:5173/");        //открываем браузер
        await driver.sleep(1000);
        

        let input_phone = await driver.findElement(By.name("input-phone"));
        let button1 = await driver.findElement(By.name("button1"));
        let error_msg = await driver.findElement(By.id("error-msg"))


        await input_phone.sendKeys("8 904 176 25344");  //неправильный номер телефона
        await button1.click();
        await driver.sleep(1000);
        const errorText2 = await error_msg.getText();
        assert.strictEqual(errorText2, "Неправильный номер!");


        await input_phone.clear();
        await input_phone.sendKeys("");                  //пустой номер телефона
        await button1.click();
        await driver.sleep(1000);
        const errorText1 = await error_msg.getText();
        assert.strictEqual(errorText1, "Неправильный номер!");

        
        await input_phone.clear();
        await input_phone.sendKeys("7 904 176 25 34");  //неправильный номер телефона с 7
        await button1.click();
        await driver.sleep(1000);
        const errorText3 = await error_msg.getText();
        assert.strictEqual(errorText3, "Номер должен начинаться с +7 или 8!");


        await input_phone.clear();
        await input_phone.sendKeys("8 904 176 25 34");  // правильный номер телефона с 8 с пробелами
        await driver.sleep(1000);
        await button1.click();
        await driver.sleep(1000);
        await driver.navigate().refresh();


        input_phone = await driver.findElement(By.name("input-phone"));
        button1 = await driver.findElement(By.name("button1"));
        error_msg = await driver.findElement(By.id("error-msg"));


        await input_phone.clear();
        await input_phone.sendKeys("+79041762534");  // правильный номер телефона с +7 слитно
        await driver.sleep(1000);
        await button1.click();
        await driver.sleep(1000);
        await driver.navigate().refresh();

        input_phone = await driver.findElement(By.name("input-phone"));
        button1 = await driver.findElement(By.name("button1"));
        error_msg = await driver.findElement(By.id("error-msg"));

        await input_phone.clear();
        await input_phone.sendKeys("8-904-176-25-34");  // правильный номер телефона с 8 через дефис
        await driver.sleep(1000);
        await button1.click();
        await driver.sleep(1000);
        await driver.navigate().refresh();


        console.log("\nТест №001 пройден успешно!\n")

    } catch (error) {
        console.error('\nТест №001 не пройден, ошибка:', error);
    } finally {
        await driver.quit();
    }
}

async function keyTest() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://localhost:5173/");
        await driver.sleep(1000);


        await driver.findElement(By.name("input-phone")).sendKeys("8 904 176 25 34");  // правильный номер телефона с 8 с пробелами
        await driver.sleep(1000);
        await driver.findElement(By.name("button1")).click();
        await driver.sleep(1000);


        let input_key = await driver.findElement(By.name("input-key"));
        let button2 = await driver.findElement(By.name("button2"));
        let error_msg = await driver.findElement(By.id("error-msg"));


        await input_key.sendKeys("123");               //вводим меньше 6 знаков
        await button2.click();
        await driver.sleep(1000);
        const errorText2 = await error_msg.getText();
        assert.strictEqual(errorText2, "Код должен содержать 6 цифр!");


        await input_key.clear();                            //вводим пустую строку
        await input_key.sendKeys("");               
        await button2.click();
        await driver.sleep(1000);
        const errorText1 = await error_msg.getText();
        assert.strictEqual(errorText1, "Код должен содержать 6 цифр!");

        
        await input_key.clear();
        await input_key.sendKeys("12т456");               //вводим неправильный код
        await button2.click();
        await driver.sleep(1000);
        const errorText3 = await error_msg.getText();
        assert.strictEqual(errorText3, "Код не должен содержать буквы!");


        await input_key.clear();
        await input_key.sendKeys("123456");               //вводим правильный код
        await button2.click();
        await driver.sleep(1000);

        console.log("\nТест №002 пройден успешно!\n")

    } catch (error) {
        console.error('\nТест №002 не пройден, ошибка:', error);
    } finally {
        await driver.quit();
    }
      
}

async function checkTest() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://localhost:5173/");
        await driver.sleep(1000);

        let marketplace = await driver.findElement(By.className("name-marketplace"));
        let title = await driver.findElement(By.className("title"));
        let button = await driver.findElement(By.name("button1"));


        let nameMarketplace = await marketplace.getText();   //проверяем надпись marketplace
        assert.strictEqual(nameMarketplace, "Marketplace");


        let nameTitle = await title.getText();   //проверяем заголовок "Авторизация"
        assert.strictEqual(nameTitle, "Авторизация");


        let nameButton = await button.getText();   //проверяем надпись на кнопке "Продолжить"
        assert.strictEqual(nameButton, "Продолжить");


        await driver.findElement(By.name("input-phone")).sendKeys("8 904 176 25 34");  //вводим правильный номер телефона
        await driver.sleep(1000);
        await driver.findElement(By.name("button1")).click();
        await driver.sleep(1000);


        marketplace = await driver.findElement(By.className("name-marketplace"));
        title = await driver.findElement(By.className("title"));
        button = await driver.findElement(By.name("button2"));


        nameMarketplace = await marketplace.getText();   //проверяем надпись marketplace
        assert.strictEqual(nameMarketplace, "Marketplace");


        title = await title.getText();   //проверяем заголовок "Авторизация"
        assert.strictEqual(title, "Авторизация");


        nameButton = await button.getText();   //проверяем надпись на кнопке "Войти"
        assert.strictEqual(nameButton, "Войти");


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