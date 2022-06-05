import styled from 'styled-components';

const StyledAdminPage = styled.div`
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: row;

    width: 100%;
    height: auto;


    .home{
        width: 70%;
        height: auto;
    
        display: flex;
        justify-content: center;
        align-items: center;


    }

    .change-img{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }

    .inputs{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        width: 100%;
        height: auto;


    }

    .inputs label{
        font-family: 'medio';
    }

    .inputs input{
        width: 350px;
        height: 30px;

        background-color: rgba(196, 196, 196, 0.35);;

        padding-left: 15px;

        border: none;
        border-radius: 7px;

        font-size: 1em;

    }

    .inputs input:focus{
        outline: none;
    }

    
    .products{
        width: 60%;
        height: auto;
    
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
    }

    .addprodutos{
        width: 70%;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }

    .add-container{
        width: 60%;
        height: 900px;
    
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }

    .add-container > *{
        margin-bottom: 35px;
    }

    .add-img{
        width: 60%;
        height: 400px;
    }

    .add-img img{
        width: 100%;
        height: 100%;
    }

    .add-upload{
        width: 100%;
        height: 50px;
    
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    .add-upload input{
        border-radius: 120px;
        border: none;

        padding: 8px 40px;
        
        font-family: 'medio';
        font-size: 1.1em;

        background-color: #834020;

        color: white;
    
    }
    .add-upload input:hover{
        cursor: pointer;
    }

    .add-form{
        width: 100%;
        height: 500px;
        
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }

    .add-form > *{
        margin-bottom: 30px ;
    }

    .add-form .row-1{
        width: 100%;

        display: flex;
        flex-direction: column;
    }

    .add-form .row-2{
        width: 100%;
        
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: row;

    }

    .add-form .row-2 .item-1{
        
        width: 350px;
        
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
    }

    .add-form .row-2 .item-1 input{
        width: 100%;
    }

    .add-form .row-2 .item-2{
        width: 340px;
        height: 60px;
    
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .add-form .row-2 .item-2 select{
        width: 100%;
        height: 90%;

        border: none;
        border-radius: 10px;

        background-color: rgba(196, 196, 196, 0.35) ;

        font-size: 1.3em;
        font-family: 'medio';
    }
    .add-form .row-2 .item-2 select:focus{
        outline: none;
    }

    .add-form label{
        font-family: 'medio';
        font-size: 1.3em;
        text-transform: capitalize;
    }

    .add-form input{
        height: 50px;
        
        padding-left: 15px;


        border: none;
        border-radius: 10px;

        font-size: 1em;
        font-family: 'regular';

        background-color: rgba(196, 196, 196, 0.35);
    }



    .add-form input:focus{
        outline: none;
    }

    .btn{
        width: 205px;
        height: 50px;
    
        display: flex;
        justify-content: center;
        align-items: center;
        
        border-radius: 120px;
        border: none;

        padding: 8px 40px;
        
        background-color: #834020;

        color: white;
    
        font-family: 'medio';
        font-size: 1em;
        color: white;

        align-self: flex-end;
    }

    .btn:hover{
        cursor: pointer;
    }

`;



export { StyledAdminPage }