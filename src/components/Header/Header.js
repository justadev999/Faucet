import React, { useState, useEffect } from 'react'
// import Logo from "../../Images/ethtutin_logo.png"
import {
    Nav,
    ImageWrapper,
} from "./HeaderElements"
import Web3 from 'web3'

const Header = () => {
    const [web3API, setWeb3API] = useState({
        provider: null,
        web3: null
    })

    console.log(web3API);

    useEffect(() => {
        const loadProvider = async () => {
            let provider = null
            if (window.ethereum) {
                provider = window.ethereum

                try {
                    await provider.enable()
                } catch (err) {
                    console.log('Non ti logghiamo pezzo di fango');
                }
                console.log(provider);
            } else if (window.web3) {
                provider = window.web3.currentProvider
                console.log(provider);
            } else if (!process.env.production) {
                provider = new Web3.providers.HttpProvider("http.//localhost:7545")
                console.log(provider);
            }
            setWeb3API({
                web3: new Web3(provider),
                provider
            })
        }
        loadProvider()
    }, [])

    return <Nav>
        <ImageWrapper>
            {/* <ConnectButton
                onClick={async () => {
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    console.log(accounts)
                }
                }
            >Connect Wallet
                <span><FaWallet style={{ marginLeft: "0.2rem" }} /></span>
            </ConnectButton> */}
        </ImageWrapper>
    </Nav>
}

export default Header
