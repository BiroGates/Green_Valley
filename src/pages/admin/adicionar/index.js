import React, { useEffect, useState } from 'react'


// Css
import './index.scss';

// Components
import LeftBar from '../../../components/AdmPage/Leftbar'

// Assets
import upload from '../../../assets/images/admPage/upload.png'

export default function Adicionar() {
    const [formData, setFormData] = useState({
        nm_produto: '',
        nr_preco: '',
        ds_produto: '',
        nm_categoria: 'bebidas'
    })

    const [imagem, setImagem] = useState('');

    function alterarImagem() {
        document.getElementById('upload-imagem').click();
    }

    function mostrarImagem(imagem) {
        return URL.createObjectURL(imagem);
    }
    
    return (
        <main className='adicionar-page'>
            <LeftBar/>
            <div className='addprodutos'>
                <div className='add-container'>
                    
                    <div className='upload-imagem' onClick={alterarImagem}>
                        <input type="file" id="upload-imagem" onChange={e => setImagem(e.target.files[0])} />
                        {imagem && 
                            <img className='real-image' src={mostrarImagem(imagem)} alt="" />
                        }
                        {!imagem && 
                            <img src={upload} alt="" />
                        }
                    </div>

                    <form className='add-form' >
                        <div className='row-1'>
                            <input placeholder='Ex: Sonho' type="text" name='nm_produto' value={formData.nm_produto} onChange={(e) => setFormData({ ...formData, nm_produto: e.target.value })} />
                        </div>
                        <div className='row-2'>
                            <div className='item-1'>
                                <input placeholder='Ex: 5.50' type="number" name='nr_preco' value={formData.nr_preco} onChange={(e) => setFormData({ ...formData, nr_preco: e.target.value })} />
                            </div>

                            <div className='item-2'>
                                <select value={formData.nm_categoria} onChange={(e) => setFormData({ ...formData, nm_categoria: e.target.value })}>
                                    <option> bebidas </option>
                                    <option> salgados </option>
                                    <option> doces  </option>
                                </select>
                            </div>
                        </div>
                        <div className='row-3'>
                            <textarea placeholder='Ex: Sonho de doce de leite com flocos de coco' value={formData.ds_produto} onChange={(e) => setFormData({ ...formData, ds_produto: e.target.value })} ></textarea>
                        </div>
                        <button className="btn" onSubmit={(e) => e.preventDefault()}> SALVAR </button>
                    </form>

                </div>
            </div>
        </main>
    )
}
