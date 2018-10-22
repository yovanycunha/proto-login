import React, { Component } from 'react';
import './style.css';

class login extends Component {
    render() { 
        return (
        <div className="Login">
            <div className="LoginSection__Header">
                <img className="LoginSection__Img" src="img/ieee-logo.jpg" alt="Logo"/>
                <p>Ramo Estudantil UFCG</p>
            </div>
            <div className="LoginSection">
                <form action="#" className="LoginForm">
                    <div className="LoginForm__Group">
                        <input id="email" type="email" className="LoginForm__Input" placeholder="Email" required />
                    </div>

                    <div className="LoginForm__Group">
                        <input id="password" type="password" className="LoginForm__Input" placeholder="Senha" required />
                    </div>

                    <div className="LoginForm__Group">

                        <div>
                            <button className="LoginForm__Button ">
                                Entrar
                            </button>
                        </div>
                            <div className="LoginForm__Forgot">
                                <a href="#">Esqueci minha Senha</a>
                            </div>
                    </div>


                </form>
            </div>
        </div>
        );
    }
}
 
export default login;