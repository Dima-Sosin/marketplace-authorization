import {useState} from 'react';
import {FormKey} from './formKey';
import checkPhone from './checkPhone';

/**
 * Компонент формы для ввода номера телефона
 * @returns возвращает HTML код формы
 */
export const FormPhone = () => {
    const [phone, setPhone] = useState("");
    const [isPhone, setIsPhone] = useState(true);

    const valid = /^(\+7|8)[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/;

    const error = document.getElementById("error-msg");

    const btnClick = (e) => {
        e.preventDefault();
        let result = checkPhone(phone, valid);
        if (result === true) {
            setIsPhone(false)
        } else {
            error.textContent = result;
            error.classList.add("error-active");
        }
    }

    return (<>
        {isPhone &&
            <form className="page">
                <p className="name-marketplace">Marketplace</p>
                <div className="container">
                    <p className="title">Авторизация</p>
                    <div className="line"></div>
                    <div className="input-block">
                        <input
                            className="input"
                            type="text"
                            name="input-phone"
                            placeholder="Введите номер телефона"
                            onChange={(e) => {
                                setPhone(e.target.value);
                                error.classList.remove("error-active");
                            }}
                        />
                        <span className="error" id="error-msg"></span>
                    </div>
                    <button name="button1" className="btn" type="submit" onClick={(e) => btnClick(e)}>
                        Продолжить
                    </button>
                </div>
            </form>
        }
        {!isPhone &&
            <FormKey/>
        }
    </>);
};
