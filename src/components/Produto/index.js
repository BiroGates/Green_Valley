import { StyledProdutos } from "./styled"

import { motion } from 'framer-motion'
import '../../assets/common/common.css'



import croasaint from '../../assets/images/menu/cafe.jpg'
import { useEffect, useState } from "react"
import { pegarImagem } from "../../api/produtoApi"

export default function Produtos({ nome, descricao, preco, imagem }) {
  const [realImage, setRealImage] = useState();
  
  async function getUrl() {
    const url =  pegarImagem(imagem);
    setRealImage(url);
  }

  useEffect(()=>{
    getUrl();
  },[])
  return (
    <StyledProdutos>
        <motion.div 
            className="container"
            initial={{opacity: 0, scale: 0}}
            transition={{duration: .5}}
            animate={{opacity: 1, scale: 1}}
            >
            <div className="img">
              <img src={realImage} alt="" />
            </div>
            <div className="titulo">{ nome }</div>
            <div className="desc"> { descricao } </div>
            <div className="preco">R$ {preco}</div>
        </motion.div>
    </StyledProdutos>
  )
}
