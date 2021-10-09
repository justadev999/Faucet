import styled from "styled-components"

export const FaucetWrapper = styled.div`
width: 50rem;
max-width: 80%;
padding: 1rem;
margin: 1rem auto;
`

export const Faucet = styled.div`
width: 100%;
max-width: 95%;
padding: 1rem;
margin: 0.8rem auto;
background: #343536;
margin-top: 1em;

border-radius: 12px;
box-shadow: 0px 3px 6px rgba(0, 0, 0 , 0.4);
`

export const BalanceView = styled.div`
`

export const IntroLabel = styled.div`
font-family: Poppins;
font-size: 2.5em;
font-weight: 700;
color: #f2f2f2;
margin-bottom: 0.3em;
`

export const CaptionLabel = styled.p`
font-family: Poppins;
font-size: 1em;
color: #f2f2f2;

`

export const BalanceLabel = styled.p`
font-family: Poppins;
font-size: 3rem;
line-height: 1.2;
color: #505152;
margin-top: 0.5rem;
`

export const ButtonWrapper = styled.div`
width: 100%;
margin-top: 2em;
display: flex;
`

export const DepositButton = styled.button`
padding: 1rem 2rem;
border-radius: 12px;
border: none;
margin-right: 1em;
background: #b86bff;
box-shadow: 0px 3px 6px rgba(0, 0, 0 , 0.4);
cursor: pointer;

&:hover{
    opacity: 0.9;
    box-shadow: 0px 3px 6px rgba(0, 0, 0 , 0.2);
}
`

export const WithdrawButton = styled.button`
padding: 1rem 2rem;
border-radius: 12px;
border: none;
margin-right: 2em;
background: #00d1b2;
box-shadow: 0px 3px 6px rgba(0, 0, 0 , 0.4);
cursor: pointer;

&:hover{
    opacity: 0.9;
    box-shadow: 0px 3px 6px rgba(0, 0, 0 , 0.2);
}
`

export const CurrentAddress = styled.p`
font-family: Poppins;
font-size: 1rem;
color: #505152;
`