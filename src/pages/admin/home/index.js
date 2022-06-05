// React
import React from 'react';

// React Hooks
import { useState, useEffect } from 'react';

// Componenets
import MenuOption from '../../../components/AdmPage/MenuOption/index';
import LeftBar from '../../../components/AdmPage/Leftbar';

// Style Componenets
import { StyledAdminPage } from './styled';

// Css
import '../../../assets/common/common.css';

// Assets
/*======= AdminPage =========*/
import user_icon from '../../../assets/images/admPage/user_icon.png';
import user_icon_black from '../../../assets/images/admPage/cameraa.png';

/*======= Menu Componente =========*/
import menu_home from '../../../assets/images/admPage/casinha.png'
import menu_hamburger from '../../../assets/images/admPage/menuzinho.png'
import menu_plus from '../../../assets/images/admPage/mais.png'

export default function Home() {
  // Form Data
  const [formData, setFormData] = useState({
    nm_produto: '',
    nr_preco: '',
    ds_produto: '',
    nm_categoria: 'bebidas'
  })

  return (
    <StyledAdminPage>
        <LeftBar/>
        <div className='home'>
            <div className='change-img'>
              <div className='info-img'> <img src={user_icon_black} alt="" /> </div>
              <div className='inputs'>
                <label> NOME: </label>
                <input type="text" />
                <label> EMAIL: </label>
                <input type="text" />
                <label> SENHA: </label>
                <input type="password" />
              </div>
            </div>
        </div>
      
          <div className='addprodutos'>
            <div className='add-container'>
                <div className='add-img'></div>
                <form className='add-upload'> <input type='file' onChange={(e) => console.log(e.target.files[0])} className='btn'/>  </form>
                  <form className='add-form' >
                      <div className='row-1'>
                        <label> titulo </label>
                        <input type="text" name='nm_produto' value={formData.nm_produto} onChange={(e) => setFormData({...formData, nm_produto: e.target.value})} />
                      </div>
                      <div className='row-2'>
                        <div className='item-1'>
                          <label> preco </label>
                          <input type="number" name='nr_preco' value={formData.nr_preco} onChange={(e) => setFormData({...formData, nr_preco: e.target.value})} />
                        </div>
                        
                        <div className='item-2'>
                          <select value={formData.nm_categoria} onChange={(e) => setFormData({...formData, nm_categoria: e.target.value})}>
                            <option> bebidas </option>
                            <option> salgados </option>
                            <option> doces  </option>
                          </select>
                        </div>
                      </div>
                      <div className='row-3'>
                        <textarea cols="78" rows="10" value={formData.ds_produto} onChange={(e) => setFormData({...formData, ds_produto: e.target.value})} ></textarea>
                      </div>
                    <button className="btn" onSubmit={(e) => e.preventDefault()}> SALVAR </button>
                  </form>
              
              </div>
          </div>
        
    </StyledAdminPage>
  )
}
