import React, { useState } from 'react';

function LoginForm() {
    const [nomeUsuario, setnomeUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const usuarios = [
        { nome: "insta", senha: "insta" },
        { nome: "Lucia", senha: "lucia123" },
        { nome: "julia", senha: "julia132" },
        { nome: "maria", senha: "maria123" },
        { nome: "carol", senha: "carol123" }
    ];

    function manipulaLogin() {
        const usuarioValido = usuarios.find(user => user.nome === nomeUsuario && user.senha === senhaUsuario);

        if (usuarioValido) {
            window.location.href = "/Home";
        } else {
            setErrorMessage('Nome de usuário ou senha incorretos.');
        }
    }

    return (
        <div className='fil' >
            <p className='title' >Instagrão</p>
            <input className='input-login'
                type="text"
                placeholder=" Email"
                value={nomeUsuario}
                onChange={(e) => setnomeUsuario(e.target.value)}
                required
            /><br></br>

            <input className='input-login'
                type=" password"
                placeholder=" Senha"
                value={senhaUsuario}
                onChange={(e) => setSenhaUsuario(e.target.value)}
                required
            /><br></br>

            <button className='buut' onClick={manipulaLogin}> Avançar </button>
            <p style={{ color: 'red' }}>{errorMessage}</p>

            <p className='esqueceu' >Esqueceu sua senha ?</p>

            <p className='inscreva'  >Nao tem conta ? <a href=''>Inscreva-se</a>  </p>


          

        </div>
    )
}
export default LoginForm;
