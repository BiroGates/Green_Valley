import React, { useEffect, useState } from 'react'

//APi
import { alterarProduto, enviarImagem, enviarProduto, pegarImagem } from '../../../api/produtoApi';

// Css
import './index.scss';
import { toast } from 'react-toastify';

// Components
import LeftBar from '../../../components/AdmPage/Leftbar'

// Assets
import upload from '../../../assets/images/admPage/upload.png'

export default function Adicionar() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState();
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
   
    
    const [id, setId] = useState(0);
    const [imagem, setImagem] = useState('');
    
    async function salvarClick() {
        try{
            const funcionario = 1;
            if(!imagem) throw new Error('Por favor enviei uma imagem!');
            if(id == 0){
                const resp = await enviarProduto(nome, preco, descricao, categoria, funcionario);
                await enviarImagem(imagem, resp.insertedId);
                setId(resp.insertedId);
                toast.dark('Produto inserido com sucesso!');
                
            }else{
                const resp = await alterarProduto(nome, preco, descricao, categoria, id)
                toast.dark('Produto alterado com sucesso!');
                
            }   
        }catch(error) {
            if(error.response){
                console.log(error.response);
                toast.dark('❗ Todos os campos são necessarios!');
            }else{
                console.log(error);
            }
        }
    }

    async function novoClick() {
        setNome('');
        setCategoria('bebidas')
        setDescricao('');
        setPreco();
        
        setId(0);
        setImagem('');
    }

    function alterarImagem() {
        document.getElementById('upload-imagem').click();
    }

    function mostrarImagem() {
        if(typeof(imagem) == 'object'){
            return URL.createObjectURL(imagem);
        }else{
            return pegarImagem(imagem);
        }
    }
    
    return (
        <main className='adicionar-page'>
            <div className='not-responsive-green-bar'>
                <LeftBar/>
            </div>
            <div className='responsive-green-bar'>
                <div className='resposive-home'></div>
                <div className='resposive-adicionar'></div>
                <div className='resposive-consultar'></div>
          </div>
            <div className='addprodutos'>
                <div className='add-container'>
                    
                    <div className='upload-imagem' onClick={alterarImagem}>
                        <input type="file" id="upload-imagem" onChange={e => setImagem(e.target.files[0])} />
                        {imagem && 
                            <img className='real-image' src={mostrarImagem()} alt="" />
                        }
                        {!imagem && 
                            <img src={upload} alt="" />
                        }
                    </div>

                    <form className='add-form' >
                        <div className='row-1'>
                            <input placeholder='Ex: Sonho' type="text" name='nm_produto' value={nome} onChange={(e) => setNome(e.target.value)} />
                        </div>
                        <div className='row-2'>
                            <div className='item-1'>
                                <input placeholder='Ex: 5.50' type="number" name='nr_preco' value={preco} onChange={(e) => setPreco(e.target.value)} />
                            </div>

                            <div className='item-2'>
                                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                    <option> bebidas </option>
                                    <option> salgados </option>
                                    <option> doces  </option>
                                </select>
                            </div>
                        </div>
                        <div className='row-3'>
                            <textarea placeholder='Ex: Sonho de doce de leite com flocos de coco' value={descricao} onChange={(e) => setDescricao(e.target.value)} ></textarea>
                        </div>
                    </form>
                    <button className="btn" onClick={salvarClick}> {id == 0 ? 'SALVAR' : 'ALTERAR'} </button>
                    <button className="btn" onClick={novoClick}> NOVO </button>

                </div>
            </div>
        </main>
    )
}
