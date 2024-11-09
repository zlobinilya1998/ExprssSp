export class Validation {
    static required = (v) => {
        if (v) return true;
        return 'Поле является обязательным для заполнения'
    }
    static phone = {
        isRu: (v: string) => {
            const regExp = /^8\d{10}$/;
            if (regExp.test(v)) return true;
            return 'Введите корректный номер телефона';
        }
    }
    static isEmail = (v: string) => {
        const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regExp.test(v)) return true;
        return 'Вветие корректный емейл'
    }
}