import styled from "styled-components";


export const Nav = styled.nav`
width: 100%;
height: 4em;
padding: 1rem;

display: flex;
justify-content: center;
 `

export const ImageWrapper = styled.div`

 `

export const LogoImg = styled.img`
width: 100px;
height: auto;
margin: 0.2rem;
`

export const ConnectButton = styled.button`
padding: 1rem 2rem;
    border-radius: 12px;
    border: none;
    margin-right: 2em;
    background: #00d1b2;
    box-shadow: 0px 3px 6px rgb(0 0 0 / 40%);
    cursor: pointer;

    &:hover{

        opacity: 0.9;
    }

    /* &:hover:first-child{
        transform: translateX(100px);
    } */
`