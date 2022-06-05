import React from 'react'

import './index.scss'

// Assets
import seta_home from '../../../assets/images/admPage/seta.png'

export default function MenuOptions({ text, icon }) {

  return (
    <main className='left-menu'>
        <div className='left-part' >
            <div className='icon'> <img src={ icon } alt="" /> </div>
            <div className='name'> { text } </div>
        </div>
        <div className='arrow' > <img src={ seta_home } alt="" /> </div>
    </main>
  )
}
