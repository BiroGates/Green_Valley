import './index.scss'
import '../../../assets/common/common.css'

import Produtos from '../../../components/Produto'



export default function Menu() {
  return (
    <div className='main-menu'>
        <div className='title'> Cardápio </div>
        <div className='filter-buttons'>
            <div className='btn'> Bebidas </div>
            <div className='btn'> Doces </div>
            <div className='btn'> Salgados </div>
        </div>
        <div className='produtos-container'>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
        </div>
    </div>
  )
}
