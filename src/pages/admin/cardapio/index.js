import React, { useState, useEffect } from 'react'

import './index.scss'

// Components
import LeftBar from '../../../components/AdmPage/Leftbar'
import AdmProduto from '../../../components/AdmPage/ProdutoCard';

// Api
import listarTodosOsProdutos from '../../../api/produtoApi';



export default function Cardapio() {
    const[produtos, setProdutos] = useState([0,1,2,4]);

    async function getData (){
        const resp = await listarTodosOsProdutos();
        setProdutos(resp);  
    }

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
                <div className='bar'> <input type="text" /></div>
                <div className='bar-btn'> BUSCAR </div>
              </div>
              <div className='products'>
                  {produtos.map(item =>{
                    return <AdmProduto/>
                  })}
              </div>
          </div>
      </main>
    )
}
