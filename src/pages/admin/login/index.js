import React, { useEffect, useState } from 'react'
import  './index.scss'

import { Link } from 'react-router-dom';

import graoCafe from '../../../assets/images/landyingPage/GraoCafe.png'
import logo from '../../../assets/images/landyingPage/Logo.png'

import storage from 'local-storage';

import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

import { login } from '../../../api/funcionarioApi';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    
    async function entrar(){
      try{
        const resposta = await login(email, senha);
        storage('usuario-logado', resposta)
        
        toast.dark('Usuario Logado Com Sucesso!');

        setTimeout(()=>{
          navigate('/admin')
        }, 3000)
      }catch(error) {
          toast.error(error.response.data.error);
      }
    }

    useEffect(()=>{
      if(storage('usuario-logado')){
        navigate('/admin');
      }
    },[])
    return (
      <div className="main-login">
          <div className="grao-1"><img className='grao-img' src={ graoCafe } alt=""/></div>
          <div className="grao-2"><img className='grao-img' src={ graoCafe } alt=""/></div>
          <div className="grao-3"><img className='grao-img' src={ graoCafe } alt=""/></div>
          <div className="grao-4"><img className='grao-img' src={ graoCafe } alt=""/></div>
          <div className="container">
              <div className="logo"><img src={ logo } alt=""/></div>
              <div className="vertical-bar"></div>
              <div className="login-form">
                  <div className="input-text"> <input type="text" placeholder='Ex: teste@teste.com.br' value={email} onChange={e => setEmail(e.target.value)} /> </div>
                  <div className="input-text"> <input type="password" placeholder='******' value={senha} onChange={e => setSenha(e.target.value)} /> </div>
                  <div className="login-btn" onClick={entrar}> LOGIN </div>
              </div>
          </div>
      </div>
    )
}