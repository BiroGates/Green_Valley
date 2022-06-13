// React
import React from 'react';
import { useState, useEffect } from 'react';


// Style Componenets
import { StyledAdminPage } from './styled';


// Componenets
import MenuOption from '../../../components/AdmPage/MenuOption/index';
import LeftBar from '../../../components/AdmPage/Leftbar';


// Css
import '../../../assets/common/common.css';
import './index.scss';


// Assets
import user_icon from '../../../assets/images/admPage/user_icon.png';
import user_icon_black from '../../../assets/images/admPage/cameraa.png';
import menu_home from '../../../assets/images/admPage/casinha.png'
import menu_hamburger from '../../../assets/images/admPage/menuzinho.png'
import menu_plus from '../../../assets/images/admPage/mais.png'

import storage from 'local-storage'
import { Navigate, useNavigate } from 'react-router-dom';


export default function Home() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(storage('usuario-logado')){
      setNome(storage('usuario-logado').data.nome)
      setEmail(storage('usuario-logado').data.email)
    }else{
      navigate('/login')
    }
  },[])

  return (
    <main className='home-main'>
        <div className='not-responsive-green-bar'>
          <LeftBar/>
        </div>
        <div className='responsive-green-bar'>
          <div className='resposive-home'></div>
          <div className='resposive-adicionar'></div>
          <div className='resposive-consultar'></div>
        </div>
        <div className='home'>
            <div className='change-img'>
              <div className='info-img'>
                 <img src={user_icon_black} alt="" />
              </div>
              <div className='inputs'>
                <label> NOME: </label>
                <input type="text" value={nome} />
                <label> EMAIL: </label>
                <input type="text" value={email}/>
              </div>
            </div>
        </div>  
    </main>
  )
}
