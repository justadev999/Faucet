import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
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
  CurrentAddress,
} from './APP_CSS';
import './GeneralCss.css';
import { FaEthereum } from 'react-icons/fa';
import Footer from './components/Footer/Footer';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { loadContract } from './utils/load-contract';

function App() {
  const [web3API, setWeb3API] = useState({
    provider: null,
    web3: null,
    contract: null,
  });
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  console.log(account, setAccount, web3API);

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      const contract = await loadContract('FaucetContract', provider);

      if (provider) {
        provider.request({ method: 'eth_requestAccounts' });
        setWeb3API({
          web3: new Web3(provider),
          provider,
          contract,
        });
      } else {
        console.log('Please,install Metamask 🦊');
      }
    };
    loadProvider();
  }, []);

  useEffect(() => {
    const loadBalance = async () => {
      const { contract, web3 } = web3API;
      const balance = await web3.eth.getBalance(contract.address);
      setBalance(web3.utils.fromWei(balance, 'ether'));
    };
    console.log(balance, 'BALANCE');
    web3API.contract && loadBalance();
  }, [web3API, balance]);

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3API.web3.eth.getAccounts();
      setAccount(accounts[0]);
    };
    web3API.web3 && getAccount();
  }, [web3API.web3]);

  const addFunds = async () => {
    const { contract, web3 } = web3API;
    await contract.addFunds({
      from: account,
      value: web3.utils.toWei('1', 'ether'),
    });
    window.location.reload();
  };

  const withdraw = async () => {
    const { contract, web3 } = web3API;
    await contract.withdraw({
      from: contract,
      value: '1',
    });
    window.location.reload();
  };

  let currency = 'ETH';

  return (
    <>
      <Header />
      <FaucetWrapper>
        <IntroLabel>Ciao 👋 Benvenuto nel faucet di ETH Turin.</IntroLabel>
        <CaptionLabel>
          Potrai compiere due azioni: RITIRARE e DEPOSITARE
          <span>
            <FaEthereum className="eth__logo" />
          </span>
          (Finti, quindi, non ti eccitare troppo)
        </CaptionLabel>
        <Faucet>
          <BalanceView>
            <CurrentAddress>
              <strong>Address: </strong> {account ? account : 'Not Logged'}
            </CurrentAddress>
            <BalanceLabel>
              Current Balance <strong>{balance}</strong> {currency}
            </BalanceLabel>
          </BalanceView>
          <ButtonWrapper>
            <DepositButton onClick={addFunds}>
              Deposit 1
              <span>
                <FaEthereum className="eth__logo" />
              </span>
            </DepositButton>
            <WithdrawButton onClick={withdraw}>Withdraw</WithdrawButton>
          </ButtonWrapper>
        </Faucet>
      </FaucetWrapper>
      <Footer />
    </>
  );
}
export default App;
