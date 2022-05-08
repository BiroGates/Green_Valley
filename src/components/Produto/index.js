import { StyledProdutos } from "./styled"

import { motion } from 'framer-motion'
import '../../assets/common/common.css'


import croasaint from '../../assets/images/landyingPage/cro.png'

export default function Produtos() {
  return (
    <StyledProdutos>
        <motion.div 
            className="container"
            initial={{opacity: 0, scale: 0}}
            transition={{duration: 1}}
            animate={{opacity: 1, scale: 1}}
            >
            <div className="img"><img src={croasaint} alt="" /></div>
            <div className="titulo">Café Tradicional</div>
            <div className="desc">Café passado na hora, encorporado com óleos essenciais muito presentes e sabor inconfundivel.</div>
            <div className="preco">R$ 4,90</div>
        </motion.div>
    </StyledProdutos>
  )
}
