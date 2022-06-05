import React from 'react'
import  './index.scss'

import { Link } from 'react-router-dom';

import graoCafe from '../../../assets/images/landyingPage/GraoCafe.png'
import logo from '../../../assets/images/landyingPage/Logo.png'

export default function LoginPage() {
  return (
    <div class="main-login">
        <div className="grao-1"><img className='grao-img' src={ graoCafe } alt=""/></div>
        <div className="grao-2"><img className='grao-img' src={ graoCafe } alt=""/></div>
        <div className="grao-3"><img className='grao-img' src={ graoCafe } alt=""/></div>
        <div className="grao-4"><img className='grao-img' src={ graoCafe } alt=""/></div>
        <div className="container">
            <div className="logo"><img src={ logo } alt=""/></div>
            <div className="vertical-bar"></div>
            <div className="login-form">
                <div className="input-text"> <input type="text" placeholder='Ex: teste@teste.com.br' value="" /> </div>
                <div className="input-text"> <input type="password" placeholder='******' value="" /> </div>
                <Link to='/admin'><div class="login-btn"> LOGIN </div></Link>
            </div>
        </div>
    </div>
  )
}