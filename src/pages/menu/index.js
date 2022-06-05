import React from 'react'

import './index.scss';
import LeftBar from '../../components/AdmPage/leftbar';


export default function Menu() {
  return (
    <main>
        <LeftBar/>
        <div className='cardapio-container'>
            <div className='cardapio'>
                <div className='src-bar'>
                    <div className='titulo'> CARDAPIO </div>
                    <div className='bar'> <input type="text" /> </div>
                </div>
                <div className='products'>
                </div>
            </div>
        </div>
    </main>
  )
}
