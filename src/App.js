import React from "react"
import Header from "./components/Header/Header"
import {
  FaucetWrapper,
  Faucet,
  BalanceView,
  IntroLabel,
  CaptionLabel,
  BalanceLabel,
  ButtonWrapper,
  DepositButton,
  WithdrawButton
} from "./APP_CSS"
import "./GeneralCss.css"
import { FaEthereum } from "react-icons/fa"

function App() {
  let currency = "ETH"
  let balance = 10

  return <>
    <Header />
    <FaucetWrapper>
      <IntroLabel>Ciao 👋 Benvenuto nel faucet di Turin ETH.</IntroLabel>
      <CaptionLabel>Potrai compiere due azioni: RITIRARE e DEPOSITARE
        <span> <FaEthereum className="eth__logo" /></span>
        (Finti, quindi, non ti eccitare troppo)
      </CaptionLabel>
      <Faucet>
        <BalanceView>
          <BalanceLabel>Current Balance <strong>{balance}</strong> {currency}</BalanceLabel>
        </BalanceView>
        <ButtonWrapper>
          <DepositButton>Deposit</DepositButton>
          <WithdrawButton>Withdraw</WithdrawButton>
        </ButtonWrapper>
      </Faucet>
    </FaucetWrapper>
  </>
}

export default App;
{/* <h1>Developed with 🥵 ###!!🤬OMFKNG##🥲 by <a onClick={() => window.open("https://github.com/RainbowWZRD")}>RNBWZRD</a>  </h1> */ }