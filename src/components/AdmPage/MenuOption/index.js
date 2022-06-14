import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './index.scss'

import storage from 'local-storage'

// Assets
import seta_home from '../../../assets/images/admPage/seta.png'

export default function MenuOptions({ text, icon, link }) {
  let navigate = useNavigate();
  function sair(){
    if(text == 'Sair'){
      storage.remove('usuario-logado');
      navigate('/login')   
    }else{
      navigate(link)
    }
  } 

  return (
    <main className='left-menu' onClick={sair}>
        <div className='left-part' >
            <div className='icon'> <img src={ icon } alt="" /> </div>
            <div className='name'> { text } </div>
        </div>
    </main>
  )
}
