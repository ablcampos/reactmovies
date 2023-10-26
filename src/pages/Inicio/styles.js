import { styled } from "styled-components";

export const CardsHome = styled.div `

    max-width: 850px;
    margin: 0 auto;
    display: flex;
    justify-content : space-between;
    position : relative;
    top: -30px;
    

    img{
        opacity : 0.7;
        transition: 0.3s;
        &:hover{
            opacity : 1;
            top:-32px;
        }

    }

    @media (max-width:900px) {
        flex-direction: column;
        align-items: center;
        row-gap: 20px;  
        padding : 20px;
    }

`