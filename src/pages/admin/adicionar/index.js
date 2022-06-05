import React from 'react'

export default function Adicionar() {
    return (
        <div>
            <div className='addprodutos'>
                <div className='add-container'>
                    <div className='add-img'></div>
                    <form className='add-upload'> <input type='file' onChange={(e) => console.log(e.target.files[0])} className='btn' />  </form>
                    <form className='add-form' >
                        <div className='row-1'>
                            <label> titulo </label>
                            <input type="text" name='nm_produto' value={formData.nm_produto} onChange={(e) => setFormData({ ...formData, nm_produto: e.target.value })} />
                        </div>
                        <div className='row-2'>
                            <div className='item-1'>
                                <label> preco </label>
                                <input type="number" name='nr_preco' value={formData.nr_preco} onChange={(e) => setFormData({ ...formData, nr_preco: e.target.value })} />
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
                            <textarea cols="78" rows="10" value={formData.ds_produto} onChange={(e) => setFormData({ ...formData, ds_produto: e.target.value })} ></textarea>
                        </div>
                        <button className="btn" onSubmit={(e) => e.preventDefault()}> SALVAR </button>
                    </form>

                </div>
            </div>
        </div>
    )
}
