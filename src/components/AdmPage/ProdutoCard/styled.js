import styled from "styled-components";

// fonts

const StyleAdmProduto = styled.div`

    .item-container{
        width: 750px;
        height: 280px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        
        margin-bottom: 50px;
    }

    .item-img{
        width: 350px;
        height: 100%;
    }
    .item-img img{
        width: 100%;
        height: 100%;
    }

    .item-text{
        width: 400px;
        height: 100%;

        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
    
    
    }
    
    .item-text-name{
        width: 85%;
        height: auto;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
    
        font-size: 1.2em;
        font-family: 'medio';
    
    }

    .item-text-desc{
        width: 85%;
        height: auto;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;

        font-size: 1em;
        font-family: 'regular';

    }

    .item-text-footer{
        width: 85%;
        height: auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    .item-text-footer .price{
        font-size: 1.2em;
        font-family: 'medio';
    }

    .edit{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    .edit-trash{
        width: 30px;
        height: 30px;

        margin-right: 15px;
        transition: .3s;
    }

    .edit-trash:hover{
        transform: scale(1.1);
        cursor: pointer;
    }

    .edit-trash img{
        width: 100%;
        height: 100%;
    }

    .edit-btn{
        width: 130px;
        height: 30px;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 15px;

        background-color: #834020 ;
        
        border-radius: 10px;
    
        font-size: 1em;
        font-family: 'medio';
        color: white;

        transition: .3s;
    }
    
    .edit-btn:hover{
        transform: scale(1.1);
        cursor: pointer;
    }

`;


export { StyleAdmProduto };