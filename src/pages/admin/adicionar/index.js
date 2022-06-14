import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

//Api
import { alterarProduto, buscarPorId, enviarImagem, enviarProduto, pegarImagem } from '../../../api/produtoApi';

// Coisas
import storage from 'local-storage';

// Css
import './index.scss';
import { toast } from 'react-toastify';

// Navigate
import { useNavigate } from 'react-router-dom';

// Components
import LeftBar from '../../../components/AdmPage/Leftbar'

// Assets
import upload from '../../../assets/images/admPage/upload.png'
import user from '../../../assets/images/admPage/user_icon.png'

export default function Adicionar() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState();
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('bebidas');
   
    
    const [id, setId] = useState(0);
    const {idParam} = useParams();
    const [imagem, setImagem] = useState('');
    
    const navigate = useNavigate();

    async function salvarClick() {
        try{
            const funcionario = storage('usuario-logado').data.id;
            if(!imagem) throw new Error('Por favor enviei uma imagem!');
            if(id == 0){
                const resp = await enviarProduto(nome, preco, descricao, categoria, funcionario);
                await enviarImagem(imagem, resp.insertedId);
                setId(resp.insertedId);
                toast.dark('🚀 Produto inserido com sucesso!');
                
            }else{
                if(!imagem) throw new Error('Por favor enviei uma imagem!');
                if( !nome        ||
                    !preco       ||
                    !categoria   ||
                    !descricao   ||
                    !id)
                        throw new Error('Todos os campos são necessarios!');
                    
                const resp = await alterarProduto(nome, preco, descricao, categoria, id)
                
                await enviarImagem(imagem, id);
                toast.dark('🚀 Produto alterado com sucesso!');
            }   
        }catch(error) {
            if(error.response){
                toast.dark('❗ Todos os campos são necessarios!');
            }else{
                toast.dark('❗ ' + error.message); 
            }
        }
    }

    async function novoClick() {
        setNome('');
        setCategoria('bebidas')
        setDescricao('');
        setPreco(0);
        
        setId(0);
        setImagem('');
        navigate('/admin/adicionar')
    }

    function alterarImagem() {
        document.getElementById('upload-imagem').click();
    }

    function mostrarImagem() {
        if(typeof(imagem) == 'object'){
            return URL.createObjectURL(imagem);
        }else{
            return pegarImagem(imagem)
        }
    }
    
    async function carregarProduto() {
        const resposta = await buscarPorId(idParam)
        setNome(resposta.nome);
        setCategoria(resposta.categoria)
        setDescricao(resposta.descricao);
        setPreco(resposta.preco);
        
        setId(resposta.id);
        setImagem(resposta.imagem);
    }

    useEffect(()=>{
        if(idParam) {
            carregarProduto();
        }
    },[])

    return (
        <main className='adicionar-page'>
            <div className='not-responsive-green-bar'>
                <LeftBar/>
            </div>
            <div className='responsive-green-bar'>
                <div className='resposive-home' onClick={()=> navigate('/admin')}></div>
                <div className='resposive-adicionar' onClick={()=> navigate('/admin/adicionar')}></div>
                <div className='resposive-consultar' onClick={()=> navigate('/admin/cardapio')}></div>
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
                    <div className='botoes'>
                        <button className="btn" onClick={salvarClick}> {id == 0 ? 'SALVAR' : 'ALTERAR'} </button>
                        <button className="btn" onClick={novoClick}> NOVO </button>
                    </div>

                </div>
            </div>
        </main>
    )
}
