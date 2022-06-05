    import { motion, useViewportScroll, useTransform }from 'framer-motion'

import { Link } from 'react-router-dom'

// React Hooks
import { useState, useEffect } from 'react'

// S'Css
import './index.scss'
import '../../../assets/common/common.css'

// Images
// Nav Bar
import logoNav from     '../../../assets/images/landyingPage/unknown.png'
// fx-one
import heroCoffer from  '../../../assets/images/landyingPage/unknown (1).png'
// fx-two
import croasaint from   '../../../assets/images/landyingPage/cro.png'
import torta from       '../../../assets/images/landyingPage/torta.png'
import cafe from        "../../../assets/images/landyingPage/cafe.png"
// fx-three
import grao from        '../../../assets/images/landyingPage/unknown (2).png'
import iconCafe from    "../../../assets/images/landyingPage/unknown (3).png"
import bolo from        "../../../assets/images/landyingPage/unknown (4).png"

// fx-four
import row_img_1 from "../../../assets/images/landyingPage/unknown (5).png"
import row_img_2 from "../../../assets/images/landyingPage/unknown (6).png"
import row_img_3 from "../../../assets/images/landyingPage/unknown (7).png"

import row_img_4 from "../../../assets/images/landyingPage/unknown (8).png" 
import row_img_5 from "../../../assets/images/landyingPage/unknown (9).png" 
import row_img_6 from "../../../assets/images/landyingPage/unknown (10).png"

import row_img_7 from "../../../assets/images/landyingPage/unknown (11).png"
import row_img_8 from "../../../assets/images/landyingPage/unknown (12).png"
import row_img_9 from "../../../assets/images/landyingPage/unknown (13).png"

import grao_flutuante from "../../../assets/images/landyingPage/GraoCafe.png"

import logo_G from "../../../assets/images/landyingPage/logo-G.svg"

//fx-five
import mapa from '../../../assets/images/landyingPage/mapa.png'
import ping_img from "../../../assets/images/landyingPage/icone.png"



export default function LandyingPage() {
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const [canGoDown, setCanGoDown] = useState(false);
    const handleGoDown = () => {
        if(scrollPosition >= 1300) setCanGoDown(true);
    }

    const [canRotate, setCanRotate] = useState(false);
    const handleRotate = () => {
        if(scrollPosition >= 600) setCanRotate(true); 
    }
    
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleRotate();
        handleGoDown();
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };

      }, [scrollPosition]);

    return (
    <div className='main'>
        <div className="fx-one">
            <div className="one-nav">
                <div className="one-nav-width">
                    <div className="one-nav-text">
                        <img src={logoNav} alt=""/>
                        <Link to='/'>HOME</Link>
                        <Link to='/menu'>MENU</Link>
                    </div>
                    <div className="one-nav-button">
                        <Link to="/login">ADMINISTRAÇÃO</Link>
                    </div>
                </div>
            </div>
            <div className="one-hero-section">
                <motion.div 
                    className="one-hero-text"
                    initial={{ x : -450, opacity: 0 }}
                    transition={{duration: .8}}
                    animate={{ x : 0, opacity: 1 }}
                    >
                    <h1>QUEM SOMOS</h1>
                    <p>Somos uma cafeteria que está há 33 anos, trazendo um cardápio completo e delicioso,
                        que tem como foco proporcionar aos nossos clientes
                        momentos agradáveis dentro do nosso estabelecimento
                    </p>

                    <div class="one-button">
                        <a href="">DESCOBRIR</a>
                    </div>
                </motion.div>
                <motion.div 
                    class="one-hero-image"
                    initial={{ x : 450, opacity: 0 }}
                    transition={{duration: .8}}
                    animate={{ x : 100, opacity: 1 }}
                    >
                    <img src={ heroCoffer } alt=""/>
                </motion.div>
            </div>
        </div>

        <div className="fx-two">
            <div className="fx-two-hero">
                <div className="two-hero-images">
                    <motion.div 
                        className="cro"
                        initial={{scale: 1}}
                        transition={{duration: .3}}
                        whileHover={{scale: 1.05}}
                        >
                        <img src={ croasaint }alt=""/>
                    </motion.div>
                    <motion.div 
                        class="cafe"
                        initial={{scale: 1}}
                        transition={{duration: .3}}
                        whileHover={{scale: 1.05}}
                        >
                        <img src={ torta } alt=""/>
                        <img src={ cafe } alt=""/>
                    </motion.div>
                </div>
                <div className="two-hero-text">
                    <h1>PRINCIPAIS PEDIDOS</h1>
                    <p>Café, croissant, sonho, não importa oque peça temos certeza que vai sair daqui com um gostinho
                        de quero mais, alguns dos nossos principais pedidos que fazem jus ao nome GREEN VALLEY
                    </p>

                    <motion.div 
                        class="two-button"
                        transition={{duration: .5}}
                        whileHover={{scale : 1.2}}
                        whileTap={{scale: .9}}
                        >
                        <Link to='/menu'>MENU</Link>
                    </motion.div>
                </div>
            </div>
        </div>
        <div className="fx-three">
            <div className="three-hero">
                {canRotate && 
                    <motion.div 
                        className="three-hero-ingredientes"
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                        }}
                        >
                        <h1>INGREDIENTES</h1>
                        <img src={ grao } alt=""/>
                        <p>Nossos ingredientes são de otima qualidade, frescos. Utilisamos os melhores produtos para o
                            melhor cliente, você.
                            Igrediuentes profissionais, um toque especial em cada produto.</p>
                    </motion.div>
                }
                {canRotate && 
                    <motion.div 
                        className="three-hero-entrega"
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                        }}
                        >
                        <h1>ENTREGA NA HORA</h1>
                        <img src={ iconCafe } alt=""/>
                        <p>Não gostamos da palavra atraso, entregamos no prazo, com muita qualidade e profissionalismo.
                            Atraso para nós, não é nada profissional, e nada conveniente para o cliente.</p>
                    </motion.div>
                }
                {canRotate && 
                    <motion.div 
                        className="three-hero-bolo"
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                        }}
                        >
                        <h1>BOLOS FRESCOS</h1>
                        <img src={ bolo } alt=""/>
                        <p>O bolo fresco tem um grande diferencial, o sabor, quando você come, percebe-se que foi feito na
                            hora, com Amor e alegria.
                            Um bolo não feito na hora, perde muito a qualidade.</p>
                    </motion.div>
                }
            </div>
        </div>
        <div className="fx-four">
            {canGoDown && 
                <motion.div 
                    className="fx-four-hero"
                    initial={{y : -700, opacity: 0}}
                    transition={{duration: 1}}
                    animate={{y : 0, opacity: 1}}
                    >
                    <div className="fx-four-text">
                        <h1>GALERIA</h1>
                        <p>ALGUNS DOS PRODUTOS MAIS CONSUMIDOS EM NOSSO ESTABELECIMENTO</p>
                    </div>
                    <div className="fx-four-images">
                        <div className="linha-1">
                            <img src={row_img_1} alt=""/>
                            <img src={row_img_2} alt=""/>
                            <img src={row_img_3} alt=""/>
                        </div>

                        <div className="linha-2">
                            <img src={row_img_4}alt=""/>
                            <img src={row_img_5} alt=""/>
                            <img src={row_img_6} alt=""/>
                        </div>

                        <div className="linha-3">
                            <img src={row_img_7 } alt=""/>
                            <img src={row_img_8} alt=""/>
                            <img src={row_img_9 } alt=""/>
                        </div>

                        <div className="fx-four-coffee">
                            <img src={grao_flutuante} alt=""/>
                        </div>
                        <div className="fx-four-coffee2">
                            <img src={grao_flutuante} alt=""/>
                        </div>
                        <div className="fx-four-coffee3">
                            <img src={grao_flutuante} alt=""/>
                        </div>
                    </div>
                </motion.div>
            }
        </div>
        <div className="fx-five">
            <div className="fx-five-title">
                <p>LOCALIZAÇÃO</p>
            </div>
            <div className="fx-five-hero">
                <div className="fx-five-local">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.806196523009!2d-46.664217199999996!3d-23.611282499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a0c2464805b%3A0x89a2a0fef31e3cf!2sAv.%20Moaci%2C%20416%20-%20Planalto%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004083-000!5e0!3m2!1spt-BR!2sbr!4v1651966666528!5m2!1spt-BR!2sbr" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="endereco">
                    <p>
                        Av. Moaci, 416 - Moema, São Paulo
                        SP, 04083-000
                    </p>

                    <div className="fx-five-button">
                        <img src={ping_img} alt=""/>
                        <a href="https://www.google.com.br/maps/place/Av.+Moaci,+416+-+Planalto+Paulista,+S%C3%A3o+Paulo+-+SP,+04083-000/@-23.6112776,-46.6664059,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce5a0c2464805b:0x89a2a0fef31e3cf!8m2!3d-23.6112825!4d-46.6642172"><p>Como chegar</p></a>
                    </div>
                </div>
            </div>

        </div>
        <div className="rodape">
            <div className="rodape-hero">
                <div className="sua-cafeteria">
                    <h1>Sua Cafetaria!</h1>

                    <div className="nacionalidade">
                        <p>Português do Brasil</p>
                    </div>
                    
                    <div className="rodape-imagem29">
                        <img src={logo_G} />
                    </div>
                </div>
                <div className="rodape-esquerda">
                    <div class="produto">
                        <a href=""><b>Produto</b></a>
                        <a href="">Catalógo</a>
                        <a href="">Café da manhã</a>
                        <a href="">Bebidas</a>
                        <a href="">Salgados</a>
                        <a href="">Sobremesas</a>
                    </div>

                    <div className="produto1">
                        <a href=""><b>Empresas</b></a>
                        <a href="">Quem somos?</a>
                        <a href="">Nosso ideais</a>
                        <a href="">cardápio</a>
                        <a href="">Depoimentos</a>
                        <a href="">Galeria</a>
                        <a href="">Localização</a>
                        <a href="">Contatos</a>
                    </div>
                </div>
                <div className="rodape-direita">
                    <div className="produto2">
                        <a href=""><b>Recursos</b></a>
                        <a href="">Suporte</a>
                        <a href="">Segurança</a>
                        <a href="">Comentarios</a>
                    </div>

                    <div className="produto3">
                        <a href=""><b>Politíca</b></a>
                        <a href="">Termos</a>
                        <a href="">Privacidade</a>
                        <a href="">Cookies</a>
                        <a href="">Diretrizes</a>
                        <a href="">Licenças</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
