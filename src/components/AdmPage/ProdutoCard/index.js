import React, { useEffect, useState } from 'react'

// Css
import '../../../assets/common/common.css';
// Style Components
import { StyleAdmProduto } from './styled'

// Assets
import cafe from '../../../assets/images/admPage/cafezinho.png';
import lixeira from '../../../assets/images/admPage/lixeira.png';
import lapis from '../../../assets/images/admPage/image43.svg';
import { deletarProduto, pegarImagem } from '../../../api/produtoApi';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom'

export default function AdmProduto({ nome, desc, preco, imagem, id, carregarTodosOsProdutos}) {
    const [realIamge, setRealImage] = useState();
    
    const navigate = useNavigate();

    async function editar() {
        navigate(`/admin/alterar/${id}`)
    }

    async function getUrl() {
        const url =  pegarImagem(imagem);
        setRealImage(url);
    }

    async function removerProduto() {
        confirmAlert({
            title:'Remover Produto',
            message: 'Deseja remover esse produto ?',
            buttons:[
                {
                    label: 'SIM',
                    onClick: async () => {
                        const resp = await deletarProduto(id);
                        carregarTodosOsProdutos();
                    }
                },
                {
                    label: 'NÃO'
                }
            ]
        })
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
                        <div className="edit-trash" onClick={removerProduto}> <img src={ lixeira } alt="lixeira"  /> </div>
                        <div className='edit-btn' onClick={editar}> <img src={ lapis } alt="" /> </div>
                    </div>
                </div>
            </div>
        </div>
    </StyleAdmProduto>
  )
}
