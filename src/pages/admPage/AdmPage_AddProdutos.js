import { Link } from 'react-router-dom';


import './AdmPage_AddProdutos.scss';
import user_icon from '../../assets/images/admPage/user_icon.png';
import casinha from '../../assets/images/admPage/casinha.png';
import menuzinho from '../../assets/images/admPage/menuzinho.png';
import mais from '../../assets/images/admPage/mais.png';
import seta from '../../assets/images/admPage/seta.png';
import croaca from '../../assets/images/admPage/croaca.png';

export default function PaginaAdmAddProdutos() {
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
                <div className='cT-infos'>
                    <img src={ croaca } />

                    <p className='button'> Upload </p>
                    <div className='cT-formulario'>
                        <div className='cT-formulario-linhaOne'>
                            <h4> Nome </h4>
                            <input type={ Text } />
                        </div>
                        <div className='cT-formulario-linhaTwo'>
                            <div>
                                <h4> Preço </h4>
                                <input type={ Text }/>
                            </div>
                            <select>
                                <option value="categoria"> categoria </option>
                                <option value="Doces"> Doces </option>
                                <option value="Salgados"> Salgados </option>
                                <option value="Bebidas"> Bebidas </option>     
                            </select>
                        </div>
                        <div className='cT-formulario-linha'>
                            <h4> Descrição</h4>
                            <textarea>

                            </textarea>
                        </div>
                        <div className='cT-Salvar'>
                            <p className='button'> Salvar </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}