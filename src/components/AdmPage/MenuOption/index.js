import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './index.scss'

// Assets
import seta_home from '../../../assets/images/admPage/seta.png'

export default function MenuOptions({ text, icon, link }) {
  let navigate = useNavigate();
  

  return (
    <main className='left-menu' onClick={() => navigate(link)}>
        <div className='left-part' >
            <div className='icon'> <img src={ icon } alt="" /> </div>
            <div className='name'> { text } </div>
        </div>
        <div className='arrow' > <img src={ seta_home } alt="" /> </div>
    </main>
  )
}
