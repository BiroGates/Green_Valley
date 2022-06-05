import React from 'react'

// Css
import './index.scss'

// Assets
import user_icon from '../../../assets/images/admPage/user_icon.png';

// Components
import MenuOptions from '../MenuOption';

export default function LeftBar() {
  return (
    <main className='green-bar'>
        <div className='left-bar'>
          <div className='info-container'>
            <div className='info-img'> <img src={ user_icon } alt="user-icon" /> </div>
            <div className='info-user'> ADMIN@ADMIN </div>
          </div>
          <div className='option-container'>
            <MenuOptions/>
            <MenuOptions/>
            <MenuOptions/>
          </div>
        </div>
    </main>
  )
}
