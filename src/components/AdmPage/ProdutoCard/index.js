import React, { useEffect, useState } from 'react'

// Css
import '../../../assets/common/common.css';
// Style Components
import { StyleAdmProduto } from './styled'

// Assets
import cafe from '../../../assets/images/admPage/cafezinho.png';
import lixeira from '../../../assets/images/admPage/lixeira.png';
import { pegarImagem } from '../../../api/produtoApi';



export default function AdmProduto({ nome, desc, preco, imagem, id}) {
    const [realIamge, setRealImage] = useState();
    
    async function getUrl() {
        const url = await pegarImagem(imagem);
        setRealImage(url);
    }
    
    useEffect(() => {
        getUrl();
    },[])
    return (
    <StyleAdmProduto>
        <div className='item-container'>
            <div className='item-img'> 
                <img src={ realIamge } alt="Imagem dahora" /> 
            </div>
            <div className='item-text'>
                <div className='item-text-name'> { nome } </div>
                <div className='item-text-desc'> { desc } </div>
                <div className='item-text-footer'>
                    <span className='price'> R$ { preco } </span>
                    <div className='edit'>
                        <div className="edit-trash"> <img src={ lixeira } alt="lixeira"  /> </div>
                        <div className='edit-btn'> EDIT </div>
                    </div>
                </div>
            </div>
        </div>
    </StyleAdmProduto>
  )
}
