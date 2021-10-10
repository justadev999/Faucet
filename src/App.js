import React, {useState, useEffect} from "react"
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
import detectEthereumProvider from '@metamask/detect-provider'

console.log(Web3);

function App() {
  const [web3API, setWeb3API] = useState({
    provider: null,
    web3: null
})
const [account, setAccount] = useState(null)
// const [balance, setBalance] = useState(null)
console.log(account, setAccount, web3API)

useEffect(() => {
    const loadProvider = async () => {
        const  provider = await detectEthereumProvider()

        if (provider) {
          provider.request({method : "eth_requestAccounts"})
          setWeb3API({
            web3: new Web3(provider),
            provider
        })
        } else {
          console.log('Please,install Metamask 🦊');
        }
    }
    loadProvider()
}, [])

useEffect(() => {
    const getAccount = async () => {
        const accounts = await web3API.web3.eth.getAccounts()
        setAccount(accounts[0])
    }
    web3API.web3 && getAccount()
}, [web3API.web3])

// useEffect(() => {
//   const getBalance = async() => {
//     const balance = await web3API.web3.eth.getBalance()
//     setBalance(balance.account)
//   }
//   web3API.web3 && getBalance()
// }, web3API.web3)

let currency = "ETH"
  let balance = 10
  return <>
    <Header  />
    <FaucetWrapper>
      <IntroLabel>Ciao 👋 Benvenuto nel faucet di ETH Turin.</IntroLabel>
      <CaptionLabel>Potrai compiere due azioni: RITIRARE e DEPOSITARE
        <span> <FaEthereum className="eth__logo" /></span>
        (Finti, quindi, non ti eccitare troppo)
      </CaptionLabel>
      <Faucet>
        <BalanceView>
          <CurrentAddress> <strong>Address: </ strong> {account ? account : "Not Logged"}</CurrentAddress>
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
