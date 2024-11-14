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
            document.querySelector('.erro-email').innerHTML = '<div class="alert alert-danger">E-mail inválido.</div>';
            error = true;
        }
        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            document.querySelector('.erro-senha').innerHTML = '<div class="alert alert-danger">A senha precisa ter entre 3 e 50 caracteres</div>';
            error = true;
          }
        if(!error) el.submit();

        
    }
}