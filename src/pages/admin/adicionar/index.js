import React, { useState } from 'react'

// Css
import './index.scss';

// Components
import LeftBar from '../../../components/AdmPage/Leftbar'

export default function Adicionar() {
    const [formData, setFormData] = useState({
        nm_produto: '',
        nr_preco: '',
        ds_produto: '',
        nm_categoria: 'bebidas'
      })
    
    return (
        <main className='adicionar-page'>
            <LeftBar/>
            <div className='addprodutos'>
                <div className='add-container'>
                    
                    <div className='upload-imagem'>
                        img
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
