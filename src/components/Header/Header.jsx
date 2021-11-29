import React from 'react'
import Logo from "../../Images/ETH_TURIN__logo.png"
import {
    Nav,
    NavWrapper,
    LogoImg,
    ConnectButton
} from "./HeaderElements"
import Web3 from 'web3'

console.log(Web3)

const Header = () => {
    // const [web3API, setWeb3API] = useState({
    //     provider: null,
    //     web3: null
    // })

    // const [account, setAccount] = useState(null)
    // console.log(account, setAccount, web3API)

    // useEffect(() => {
    //     const loadProvider = async () => {
    //         let provider = null
    //         if (window.ethereum) {
    //             provider = window.ethereum
    //             try {
    //                 await provider.enable()
    //             } catch (err) {
    //                 console.log('Non ti logghiamo pezzo di fango');
    //             }
    //             console.log(provider);
    //         } else if (window.web3) {
    //             provider = window.web3.currentProvider
    //             console.log(provider);
    //         } else if (!process.env.production) {
    //             provider = new Web3.providers.HttpProvider("http.//localhost:7545")
    //             console.log(provider);
    //         }
    //         setWeb3API({
    //             web3: new Web3(provider),
    //             provider
    //         })
    //     }
    //     loadProvider()
    // }, [])

    // useEffect(() => {
    //     const getAccount = async () => {
    //         const accounts = await web3API.web3.eth.getAccounts()
    //         setAccount(accounts[0])
    //     }
    //     web3API.web3 && getAccount()
    // }, [web3API.web3])

    return <Nav>
        <NavWrapper>
            <LogoImg src={Logo} />

            <ConnectButton onClick={async () => {
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    console.log(accounts)
            }}> Connect Wallet
            </ConnectButton>
        </NavWrapper>
    </Nav>
}

export default Header