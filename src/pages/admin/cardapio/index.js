import React, { useState, useEffect } from 'react'

import './index.scss'

// Components
import LeftBar from '../../../components/AdmPage/Leftbar'
import AdmProduto from '../../../components/AdmPage/ProdutoCard';

// Api
import { listarTodosOsProdutos, buscarPorNome, pegarImagem } from '../../../api/produtoApi';
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
      setProdutos(resp);
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
                    <div className='bar-btn' onClick={inputValue ? buscarProdutoPorNome : carregarTodosOsProdutos}> BUSCAR </div>
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
                        <tr>
                            <td>#01</td>
                            <td>Harry Potter e a Pedra Filosofal</td>
                            <td>8,0</td>
                            <td>04/01/05</td>
                            <td>Sim</td>
                            <td>
                                <img src={trashcan} alt='editar' />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <img src={lapis} alt='remover' />
                            </td>
                        </tr>
                        <tr>
                            <td>#01</td>
                            <td>Harry Potter e a Pedra Filosofal</td>
                            <td>8,0</td>
                            <td>04/01/05</td>
                            <td>Sim</td>
                            <td>
                                <img src={trashcan} alt='editar' />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <img src='/assets/images/icon-remover.svg' alt='remover' />
                            </td>
                        </tr>
                        <tr>
                            <td>#01</td>
                            <td>Harry Potter e a Pedra Filosofal</td>
                            <td>8,0</td>
                            <td>04/01/05</td>
                            <td>Sim</td>
                            <td>
                              <img src={trashcan} alt='editar' />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <img src='/assets/images/icon-remover.svg' alt='remover' />
                            </td>
                        </tr>
                        <tr>
                            <td>#01</td>
                            <td>Harry Potter e a Pedra Filosofal</td>
                            <td>8,0</td>
                            <td>04/01/05</td>
                            <td>Sim</td>
                            <td>
                                <img src={trashcan} alt='editar' />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <img src='/assets/images/icon-remover.svg' alt='remover' />
                            </td>
                        </tr>
                        <tr>
                            <td>#01</td>
                            <td>Harry Potter e a Pedra Filosofal</td>
                            <td>8,0</td>
                            <td>04/01/05</td>
                            <td>Sim</td>
                            <td>
                                <img src={trashcan} alt='editar' />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <img src='/assets/images/icon-remover.svg' alt='remover' />
                            </td>
                        </tr>
                      
                    </tbody>
                  </table>
              </div>
          </div>
      </main>
    )
}
