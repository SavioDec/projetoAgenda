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
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        if (emailInput.value && !validator.isEmail(emailInput.value)) {
            alert("email")
            document.querySelector('.erro-email').innerHTML = '<div class="alert alert-danger">E-mail inválido.</div>';
            error = true;
          }
          if (!nomeInput.value){
            document.querySelector('.erro-nome').innerHTML = '<div class="alert alert-danger">necessário adicionar um nome</div>';
            error = true;
            }
          if (!emailInput.value && !telefoneInput.value) {
            document.querySelector('.erro-telefone').innerHTML =  '<div class="alert alert-danger">Pelo menos um dos campos precisam ser preenchidos: e-mail ou telefone. </div>';
            error = true;
          }
        if(!error) el.submit();



    }
}