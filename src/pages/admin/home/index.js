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



export default function Home() {
  return (
    <main className='home-main'>
        <LeftBar/>
        <div className='home'>
            <div className='change-img'>
              <div className='info-img'> <img src={user_icon_black} alt="" /> </div>
              <div className='inputs'>
                <label> NOME: </label>
                <input type="text" />
                <label> EMAIL: </label>
                <input type="text" />
                <label> SENHA: </label>
                <input type="password" />
              </div>
            </div>
        </div>  
    </main>
  )
}
