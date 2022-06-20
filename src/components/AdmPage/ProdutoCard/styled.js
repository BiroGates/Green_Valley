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
        word-wrap: break-word
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

        overflow: auto;
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
        width: 40px;
        height: auto
    }

    .edit-btn:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
    
    @media (max-width:720px) {
        .item-container{
            width: 100%;
            height: auto;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            
            margin-bottom: 50px;
            border-bottom: 2px solid #772241;
        }
        .item-img{
            display: flex;
            justify-content: center;
            align-items: center;

            width: 250px;
            height: 80%;
        }
        .item-img img{
            width: 100%;
            height: 100%;
            margin: 0px 0px 20px 0px;
        }
        .item-text-name{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
        }
        .item-text > *{
            padding-bottom: 40px;
    
        }
        .edit{
            width: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
        }
        .edit img{
            margin: 0;
        }
    }

`;


export { StyleAdmProduto };