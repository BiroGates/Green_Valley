import styled from 'styled-components';



const StyledProdutos = styled.div `

    .container{
        width: 400px;
        height: 500px;
        
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;

        background-color: white;

        margin-top: 80px;
        border-radius: 30px;
    
        font-family: 'medio';
    }

    .img{
        width: 322px;
        height: 250px;
    }
    .img img{
        width: 100%;
        height: 100%;
    }

    .titulo, .desc, .preco{
        width: 80%;
    }

    .preco{
        display: flex;
        justify-content: flex-end;
        align-items: center;

        font-weight: 900;

    }

`;

export { StyledProdutos }