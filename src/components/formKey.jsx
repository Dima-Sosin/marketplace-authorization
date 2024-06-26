import {useState} from 'react';
import checkKey from './checkKey';

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