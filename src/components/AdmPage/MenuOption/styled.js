import styled from 'styled-components';

const StyledMenuOptions = styled.div`
    width: 100%;
    height: 125px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;

    border-radius: 20px;

    transform: scale(.9);
    transition: .3s;
    
    margin-bottom: 50px;

    &:hover{
        cursor: pointer;
        
        transform: scale(1);
        
        border-radius: 0px ;

        background-color: rgba(0, 0, 0, 0.12);;
    }
  
    .left-part{
        width: 250px;
        height: 50px;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        
    }

    .left-part > *{
        margin-left: 20px;
    }

    .icon{
        width: 40px;
        height: 40px;
    }
    .icon img{
        width: 100%;
        height: 100%;
    }

    .name{
        color: white;
        font-family: 'medio';
        font-size: 1.3em;
    }

    .arrow{
        width: 40px;
        height: 40px;
    }

    .arrow img{
        width: 100%;
        height: 100%;
    }

`;

export { StyledMenuOptions };