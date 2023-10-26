import { styled } from "styled-components";

export const HeaderStyle = styled.div `
    background-color: black; //#000715;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    text-transform: uppercase;
    position: sticky;
    top :0;
    z-index:1000;

    img{
        margin-left: 100px;
    }
   
        p{
            color: White;
            text-decoration : none;
            font-size : 12px;          
            margin-left:0px;
        }

    select{
        font-size: 16px;       
        margin-right: 0px;
    } 

    nav{
        margin-right:100px;
        display:flex;
        column-gap : 80px; //espaco entre os elementos

        a{
            color: White;
            text-decoration : none;
            font-size : 18px;  
            font-weight :bold ;

            &:hover{
                color: yellow;
                text-shadow: 1px 1px 2px red, 0 0 1em red, 0 0 0.2em red;
            }
        }
    }

    @media (max-width: 740px){
        flex-direction: column ;
        row-gap: 20px;
        img{
            margin-left: 0px;
        }
        nav{
            margin-right: 0px;
        }
    } 

`