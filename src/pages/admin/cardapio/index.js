import React from 'react'

import './index.scss'

import LeftBar from '../../../components/AdmPage/Leftbar'

export default function Cardapio() {
  return (
    <main className='cardapio-page'>
        <LeftBar/>
        <div className='cardapio'>
            <div className='src-bar'>
            <div className='titulo'> CARDAPIO </div>
            <div className='bar'> <input type="text" /> </div>
            </div>
            <div className='products'>
            
            </div>
        </div>
    </main>
  )
}
