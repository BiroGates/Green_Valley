import styled from "styled-components";

const StyledComfirmBox = styled.div `

    width: 120vw;
    height: 100vh;

    position: fixed;

    background-color: rgba(0, 0, 0, 0.5);

    z-index: 3;

    *{
        border: 1px solid red;
    }

    .box{
        width: 50%;
        height: 50%;
   
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        position: fixed;

        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        background-color: white;
    }

    .close{
        width: 100%;
        height: auto;
        
        display: flex;
        justify-content: flex-end;
        align-items: center;

        margin-bottom: 50px;
        padding-right: 80px;
    }
    .close div:hover{
        cursor: pointer;
    }

    .texts{
        width: 80%;
        height: 60%;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
    }

    .pop-title{
        width: 100%;
        height: auto;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        font-size: 1.8em;
        font-family: 'medio';
    }

    .pop-desc{
        width: 50%;
        height: auto;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1.2em;
        font-family: 'regular';
    }

    .pop-buttons{
        width: 70%;
        height: 50px;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

    }

    .pop-buttons .yes, .no{
        width: 120px;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-family: 'medio';
        font-size: 1em;
        color: white;
    }

    .pop-buttons .yes{
        background-color: red;
    }

    .pop-buttons .no{
        background-color: #007900 ;
    }

    .pop-buttons .yes,.no:hover{
        cursor: pointer;
    }
`;


export { StyledComfirmBox }