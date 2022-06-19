import './index.scss'
import '../../../assets/common/common.css'

import { useEffect, useState } from 'react'

import ProdutoCard from '../../../components/AdmPage/ProdutoCard'
import { buscarPorCategoria, listarTodosOsProdutos, pegarImagem } from '../../../api/produtoApi.js'

export default function Menu() {
  const [produtos, setProdutos] = useState([]);

  async function carregarTodosOsProdutos (){
    const resp = await listarTodosOsProdutos();
    setProdutos(resp);  
  }

  async function carregarPorCategoria(categoria) {
    const resposta = await buscarPorCategoria(categoria);
    setProdutos(resposta)
  }

  useEffect(()=>{
    carregarTodosOsProdutos();
  },[])
  return (
    <div className='main-menu'>
        <div className='title'> Cardápio </div>
        <div className='filter-buttons'>
            <div className='btn' onClick={() => carregarPorCategoria('bebidas')}> Bebidas </div>
            <div className='btn'onClick={() => carregarPorCategoria('doces')}> Doces </div>
            <div className='btn'onClick={() => carregarPorCategoria('salgados')}> Salgados </div>
            <div className='btn'onClick={() => carregarTodosOsProdutos()}> Todos </div>
        </div>
        
        <div className='produtos-container'>  
          {produtos.map(item => 
            <div className='produto'>
              <div><img src={pegarImagem(item.imagem)} alt="" /></div>
              <div> {item.nome} </div> 
              <div> {item.descricao} </div>
            </div>
          )}
        </div>  
    </div>
  )
}
