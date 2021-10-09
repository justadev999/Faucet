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
  WithdrawButton,
  CurrentAddress
} from "./APP_CSS"
import "./GeneralCss.css"
import { FaEthereum } from "react-icons/fa"
import Footer from "./components/Footer/Footer"
import Web3 from "web3"

console.log(Web3);

function App() {

  // useEffect(() => {
  //   const loadProvider = async () => {
  //     console.log(window.web3);
  //     console.log(window.ethereum);
  //   }
  //   loadProvider()
  // })

  let currency = "ETH"
  let balance = 10
  let currentAddress = "0xe4C1ECe539aFd62d60050D392A957204d2F69f36"
  return <>
    <Header />
    <FaucetWrapper>
      <IntroLabel>Ciao 👋 Benvenuto nel faucet di ETH Turin.</IntroLabel>
      <CaptionLabel>Potrai compiere due azioni: RITIRARE e DEPOSITARE
        <span> <FaEthereum className="eth__logo" /></span>
        (Finti, quindi, non ti eccitare troppo)
      </CaptionLabel>
      <Faucet>
        <BalanceView>
          <CurrentAddress> <strong>Address: </ strong> {currentAddress}</CurrentAddress>
          <BalanceLabel>Current Balance <strong>{balance}</strong> {currency}</BalanceLabel>
        </BalanceView>
        <ButtonWrapper>
          <DepositButton>Deposit</DepositButton>
          <WithdrawButton>Withdraw</WithdrawButton>
        </ButtonWrapper>
      </Faucet>
    </FaucetWrapper>
    <Footer />
  </>
}
export default App;
