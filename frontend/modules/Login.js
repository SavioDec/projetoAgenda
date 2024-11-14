import validator from 'validator';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
    }

    init() {
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;

        if(!validator.isEmail(emailInput.value)){
            document.querySelector('.erro-login').innerHTML = '<div class="alert alert-danger">E-mail ou senha inválidos.</div>';

            error = true;
        }else if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            document.querySelector('.erro-login').innerHTML = '<div class="alert alert-danger">E-mail ou senha inválidos.</div>';
            error = true;
        }
        if(!error) el.submit();

        console.log(emailInput.value, passwordInput.value);
    }
}