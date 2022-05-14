import { Link } from 'react-router-dom';


import './AdmPage.scss';
import user_icon from '../../assets/images/admPage/user_icon.png';
import casinha from '../../assets/images/admPage/casinha.png';
import menuzinho from '../../assets/images/admPage/menuzinho.png';
import mais from '../../assets/images/admPage/mais.png';
import seta from '../../assets/images/admPage/seta.png';
import camera from '../../assets/images/admPage/cameraa.png';

export default function PaginaAdmHome() {
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
                <div className='cT-user'>
                    <img src={camera} />
                </div>

                <div className='inputs'>
                    <div className='cT-input'>
                        <p> Nome: </p>
                        <input type={Text} />
                    </div>
                    <div className='cT-input'>
                        <p> Email: </p>
                        <input type={Text} />
                    </div>
                    <div className='cT-input'>
                        <p> Senha: </p>
                        <input type={'password'} />
                    </div>
                </div>


            </section>
        </div>
    );
}