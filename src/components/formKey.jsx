import {useState} from 'react';

function checkKey(key, code) {
    if (key === " ")
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
    if (key !== code)
    {
        return "Неправильный код!"
    } 
    else 
    {
        return(true)
    }
}

/**
 * Компонент формы для ввода ключа
 * @returns возвращает HTML код формы
 */
export const FormKey = () => {
    const [key, setKey] = useState("");
    const error = document.getElementById("error-msg");
    const code = "123456";

    const btnClick = (e) => {
        e.preventDefault();
        let result = checkKey(key, code);
        if (result === true){
            alert("Авторизация прошла успешно")
        } else {
            error.textContent = result;
            error.classList.add("error-active");
        }
    }

    return(
        <form class="page">
            <p class="name-marketplace">Marketplace</p>
            <div class="container">
                <p class="title">Авторизация</p>
                <div class="line"></div>
                <div class="input-block">
                    <input 
                        class="input" 
                        type="text"
                        name="input-key"
                        placeholder="Введите код из СМС"
                        onChange={(e) => {
                            setKey(e.target.value);
                            error.classList.remove("error-active");
                        }}
                    />
                    <span class="error" id="error-msg"></span>
                </div>
                <button name="button2" type="submit" class="btn" onClick={(e) => btnClick(e)}>
                    Войти
                </button>
            </div>
        </form>
    )
}