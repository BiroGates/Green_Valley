import React, { useState, useEffect } from 'react'

import './index.scss'

// Components
import LeftBar from '../../../components/AdmPage/Leftbar'
import AdmProduto from '../../../components/AdmPage/ProdutoCard';

import { confirmAlert } from 'react-confirm-alert';

// Api
import { listarTodosOsProdutos, buscarPorNome, pegarImagem, deletarProduto } from '../../../api/produtoApi';
import { useNavigate } from 'react-router-dom';

import trashcan from '../../../assets/images/admPage/lixeira.png'
import lapis from '../../../assets/images/admPage/image43.svg'

export default function Cardapio() {
    const[produtos, setProdutos] = useState([]);
    const[inputValue, setInputValue] = useState('');
    const navigate = useNavigate();


    async function carregarTodosOsProdutos (){
        const resp = await listarTodosOsProdutos();
        setProdutos(resp);  
    }

    async function buscarProdutoPorNome() {
      const resp = await buscarPorNome(inputValue);
      console.log(resp);
      setProdutos(resp);
    }

    async function editar(id) {
        navigate(`/admin/alterar/${id}`)
    }

    async function removerProduto(id) {
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

    useEffect(()=>{
      carregarTodosOsProdutos();
    },[])
    return (
      <main className='cardapio-page'>
          <div className='not-responsive-green-bar'>
            <LeftBar/>
          </div>
          <div className='responsive-green-bar'>
                <div className='resposive-home' onClick={()=> navigate('/admin')}></div>
                <div className='resposive-adicionar' onClick={()=> navigate('/admin/adicionar')}></div>
                <div className='resposive-consultar' onClick={()=> navigate('/admin/cardapio')}></div>
          </div>
          <div className='cardapio'>
              <div className='products'>
                  <div className='src-bar'>
                    <div className='titulo'> CARDAPIO </div>
                    <div className='bar'> <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/></div>
                    <div className='bar-btn' onClick={buscarProdutoPorNome}> BUSCAR </div>
                  </div>
                  <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>IMAGEM</th>
                            <th>PRODUTO</th>
                            <th>PRECO</th>
                            <th>CATEGORIA</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map(item => {
                            return (
                                <tr>
                                    <td>#{ item.id }</td>
                                    <td><img src={pegarImagem(item.imagem)} alt="" /></td>
                                    <td>{item.nome}</td>
                                    <td>{item.preco}</td>
                                    <td>{item.categoria}</td>
                                    <td>
                                        <img src={trashcan} alt='editar'onClick={() => removerProduto(item.id)}  />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img src={lapis} alt='remover' onClick={() => editar(item.id)} />
                                    </td>
                                </tr>  
                            )
                        })}
                    </tbody>
                  </table>
              </div>
          </div>
      </main>
    )
}
