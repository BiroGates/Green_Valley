import React from 'react'

import { StyledLeftBar } from './styled'

// Assets
import user_icon from '../../../assets/images/admPage/user_icon.png';
import casinha from '../../../assets/images/admPage/casinha.png'
import menuzinho from '../../../assets/images/admPage/menuzinho.png'
import maiszinho from '../../../assets/images/admPage/mais.png'
// Components
import MenuOptions from '../MenuOption/index.js';

export default function LeftBar() {
  return (
    <StyledLeftBar>
        <div className='left-bar'>
            <div className='info-container'>
                <div className='info-img'> <img src={user_icon} alt="" /> </div>
                <div className='info-user'> ADMIN@ADMIN </div>
            </div>
            <div className='option-container'>
            </div>
            <MenuOptions texto="Home" icone={ casinha } link="/"/>
            <MenuOptions texto="Menu" icone={ menuzinho } link="/admin/menu"/>
            <MenuOptions texto="Adicionar" icone={ maiszinho } link="/menu/adicionar"/>
        </div>
    </StyledLeftBar>
  )
}
