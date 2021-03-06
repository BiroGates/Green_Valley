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

    .info-img{
        width: 150px;
        height: 150px;
    }
    .info-img img{
        width: 100%;
        height: 100%;
    }

`;



export { StyledAdminPage }