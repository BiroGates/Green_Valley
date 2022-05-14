// React router
import { Link } from 'react-router-dom';

// React routes
import { useState, useEffect } from 'react';

// Components
import AdmProduto from '../../components/AdmProduto';

// Assets
import './AdmPage_Cardapio.scss';
import user_icon from '../../assets/images/admPage/user_icon.png';
import casinha from '../../assets/images/admPage/casinha.png';
import menuzinho from '../../assets/images/admPage/menuzinho.png';
import mais from '../../assets/images/admPage/mais.png';
import seta from '../../assets/images/admPage/seta.png';
import lupa from '../../assets/images/admPage/lupa.png';
import lixeira from '../../assets/images/admPage/lixeira.png';
import cafe from '../../assets/images/admPage/cafezinho.png';
import cappuccino from '../../assets/images/admPage/CaféCappuccino.png';
import macchiato from '../../assets/images/admPage/CaféMacchiato.png';


// Api
import Api from '../../services/Api'
const api = new Api();

export default function PaginaAdmCardapio() {
    // Products
    const [products, setProducts] = useState([]);

    // Getting data
    async function handleApi(){
        let resp = await api.getProducts();
        setProducts(resp)
    }

    useEffect(() => {
        handleApi();
    },[])
    return (
        <div className='PaginaAdm'>
            <section className='containerOne'>
                <div className='cO-user'>
                    <img src={user_icon} />

                    <h2> ADMIN@ADMIN</h2>

                </div>

                <div>
                <Link to='/admpagehome'>
                    <div className='cO-options'>
                        <img className='cO-options-icon' src={casinha} />
                        <h4> Home </h4>
                        <img className='cO-options-seta' src={seta} />
                    </div>
                </Link>
                <Link to='/admpagecardapio'>
                    <div  className='cO-options'>
                        <img className='cO-options-icon' src={menuzinho} />
                        <h4> Cardápio </h4>
                        <img className='cO-options-seta' src={seta} />
                    </div>
                </Link>
                <Link to='/admpageadd'>
                    <div className='cO-options'>
                        <img className='cO-options-icon' src={mais} />
                        <Link to='/admpageadd'><h4> add produtos </h4></Link>
                        <img className='cO-options-seta' src={seta} />
                    </div>
                </Link>
                </div>

            </section>

            <section className='containerTwo'>
                <h2> Cardápio</h2>
                <div className='cT-search'>
                    <img src={ lupa } />
                    <input type={ Text} />
                </div>

                <div className='cT-itens'>
                    <AdmProduto/>

                </div>
            </section>
        </div>
    );
}