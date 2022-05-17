import React from 'react'

// Styled Components
import { StyledMenuOptions } from './styled'

// Assets
import seta_home from '../../../assets/images/admPage/seta.png'

export default function MenuOptions({ icon, text, setCurrentPage }) {

  const handleCurrentPage = () => {
    setCurrentPage(text.toLowerCase());
  }

  return (
    <StyledMenuOptions onClick={handleCurrentPage}>
        <div className='left-part' >
            <div className='icon'> <img src={ icon } alt="" /> </div>
            <div className='name'> { text } </div>
        </div>
        <div className='arrow' > <img src={ seta_home } alt="" /> </div>
    </StyledMenuOptions>
  )
}
