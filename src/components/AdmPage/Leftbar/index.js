import React, { useEffect } from 'react'

// Css
import './index.scss'

import storage from 'local-storage';

import { useNavigate } from 'react-router-dom';

// Assets
import user_icon from '../../../assets/images/admPage/user_icon.png';
import menu_home from '../../../assets/images/admPage/casinha.png'
import menu_hamburger from '../../../assets/images/admPage/menuzinho.png'
import menu_plus from '../../../assets/images/admPage/mais.png'
import sair from '../../../assets/images/admPage/sair.png'

// Components
import MenuOptions from '../MenuOption';

export default function LeftBar() {
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(!storage('usuario-logado')){
      navigate('/login');
    }
  },[])
  return (
    <main className='green-bar'>
        <div className='left-bar'>
          <div className='info-container'>
            <div className='info-img'> <img src={ user_icon } alt="user-icon" /> </div>
            <div className='info-user'> ADMIN@ADMIN </div>
          </div>
          <div className='option-container'>
            <MenuOptions text="Home" icon={menu_home} link="/admin"/>
            <MenuOptions text="Cardapio" icon={menu_hamburger} link="/admin/cardapio"/>
            <MenuOptions text="Adicionar" icon={menu_plus} link="/admin/adicionar"/>
            <MenuOptions text="Sair" icon={sair} link="/login"/>
          </div>
        </div>
    </main>
  )
}
