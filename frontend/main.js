import 'core-js/stable';
import 'regenerator-runtime';

import Cadastro from './modules/Cadastro';
import Login from './modules/Login';
import Contato from './modules/Contato';


const login = new Login('.form-login');
const cadastro = new Cadastro('.form-cadastro');
const contato = new Contato('.form-contato');

login.init();
cadastro.init();
contato.init();

//import './assets/css/style.css';

