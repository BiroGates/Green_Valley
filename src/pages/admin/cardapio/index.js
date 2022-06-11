import React from 'react'

import './index.scss'

import LeftBar from '../../../components/AdmPage/Leftbar'

import lupa from '../../../assets/images/admPage/lupa.png'

export default function Cardapio() {
  return (
    <main className='cardapio-page'>
        <div className='not-responsive-green-bar'>
          <LeftBar/>
        </div>
        <div className='responsive-green-bar'>
          <div className='resposive-home'></div>
          <div className='resposive-adicionar'></div>
          <div className='resposive-consultar'></div>
        </div>
        <div className='cardapio'>
            <div className='src-bar'>
              <div className='titulo'> CARDAPIO </div>
              <div className='bar'> <input type="text" /></div>
              <div className='bar-btn'> BUSCAR </div>
            </div>
            <div className='products'>
            
            </div>
        </div>
    </main>
  )
}
