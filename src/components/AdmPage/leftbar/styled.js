import styled from "styled-components";

const StyledLeftBar = styled.div `
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: row;

    height: auto;

    
    .left-bar{
        width: 400px;
        height: auto;

        min-height: 100vh;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    
        background-color: #007900 ;
    }

    .info-container{
        width: 100%;
        height: 350px;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
    }

    .info-img{
        width: 180px;
        height: 180px;
    }

    .info-img img{
        width: 100%;
        height: 100%;
    }

    .info-user{
        width: 100%;
        height: auto;
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        font-family: 'medio';
        font-size: 1.5em;
        color: white;
    
    }

    .option-container{
        width: 100%;
        height: auto ;
    
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;


    }

`;

export { StyledLeftBar }