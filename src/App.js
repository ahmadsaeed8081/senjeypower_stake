/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import {SPC} from "./components/SPC.ts"
import Main from "./Pages/Home";

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { polygonMumbai} from 'wagmi/chains'



import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider);

function App() {
  const [_address, set_address] = useState(null);
  const [web3, set_web3] = useState(null);
  const [provider, set_provider] = useState(null);
  
  const [isWalletConnected, set_isWalletConnected] = useState(false);


  const chains = [SPC]
const projectId = '9dc66ab4d76b28b1a452d5dc0083e466'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)




  function set_user(_add,_provider,_web3){
    console.log("ihjono")
    set_isWalletConnected(true);
    set_provider(_provider);
    set_web3(_web3);

  }


  return (
    <div className="App">

    <WagmiConfig config={wagmiConfig}>

      {/* <Header set_user={set_user}/> */}
      <Routes>
        <Route path="/" element={<Main />} exact />
      </Routes>
      {/* <Footer /> */}
    </WagmiConfig>

<Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
</div>


  );
}

export default App;
