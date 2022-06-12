import React, { useState, useEffect } from 'react'

import './index.scss'

// Components
import LeftBar from '../../../components/AdmPage/Leftbar'
import AdmProduto from '../../../components/AdmPage/ProdutoCard';

// Api
import { listarTodosOsProdutos, buscarPorNome, pegarImagem } from '../../../api/produtoApi';



export default function Cardapio() {
    const[produtos, setProdutos] = useState([]);
    const[inputValue, setInputValue] = useState('');

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
            <div className='resposive-home'></div>
            <div className='resposive-adicionar'></div>
            <div className='resposive-consultar'></div>
          </div>
          <div className='cardapio'>
              <div className='src-bar'>
                <div className='titulo'> CARDAPIO </div>
                <div className='bar'> <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/></div>
                <div className='bar-btn' onClick={inputValue ? buscarProdutoPorNome : carregarTodosOsProdutos}> BUSCAR </div>
              </div>
              <div className='products'>
                  {produtos ? produtos.map(item =>{
                    return <AdmProduto
                            key={item.id}
                            imagem={item.imagem}
                            nome = {item.nome} 
                            desc ={item.descricao}
                            preco= {item.preco}
                            id={item.id}
                            />
                  }): ''}
              </div>
          </div>
      </main>
    )
}
