import React from 'react'

// Css
import '../../assets/common/common.css';
// Style Components
import { StyleAdmProduto } from './styled'

// Assets
import cafe from '../../assets/images/admPage/cafezinho.png';
import lixeira from '../../assets/images/admPage/lixeira.png';

export default function AdmProduto() {
  return (
    <StyleAdmProduto>
        <div className='item-container'>
            <div className='item-img'> <img src={ cafe } alt="" /> </div>
            <div className='item-text'>
                <div className='item-text-name'> Cafe gostoso </div>
                <div className='item-text-desc'> aoeoeoeooe </div>
                <div className='item-text-footer'>
                    <span className='price'> R$ 4,90 </span>
                    <div className='edit'>
                        <div className="edit-trash"> <img src={ lixeira } alt="" /> </div>
                        <div className='edit-btn'> EDIT </div>
                    </div>
                </div>
            </div>
        </div>
    </StyleAdmProduto>
  )
}
