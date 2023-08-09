import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { SearchIcon, MenuIcon } from "../../icons";

import ConnectWallet from "../ConnectWallet.js";
import Modal from "../../components/Modal";

import { cont_address, cont_abi, tokenABI, Token_address } from "../config";
import Web3 from "web3";
import { useAccount, useDisconnect } from 'wagmi'


import { useWeb3Modal } from '@web3modal/react'
import Web3Modal from "web3modal";

const Header = (props) => {
  const { open, close } = useWeb3Modal()
  const [openMenu, setOpenMenu] = useState(false);
  const [openWalletList, setOpenWalletList] = useState(false);
  // const [_address, set_user_address] = useState(null);
  // const [balance, setBalance] = useState(0);
  const { address, isConnected,isDisconnected } = useAccount()
  const[clicked,set_clicked]=useState(false)

  useEffect(() => {
    document.addEventListener("click", () => {
      setOpenMenu(false);
      setOpenWalletList(false);
    });

  }, []);


  // async function mount() {
  //   if (isDisconnected) {
  //     return;
  //   }      const web3= new Web3(new Web3.providers.HttpProvider("https://rpc.senjepowersscan.com"));

  //     const balance = await web3.eth.getBalance(address);


  //     setBalance((balance/10**18).toFixed(6));

    
  // }

  const Actions = () => {
    return (
      <div className="action flex items-center">

        <div className="btn button">
          <p>{(props.balance/10**18).toFixed(6)} SPC</p>
        </div>
        <>
        <button
              className="btn2 button"
              // onClick={(e) => connectWallet()}
              onClick={() => open()}
            >
              {isConnected?address.slice(0,5)+"..."+address.slice(38,42): "Connect Wallet" }
             
              {/* <Web3Button/> */}
            </button>
        
          <div
            className={`wallet-list flex flex-col ${
              openWalletList ? "show" : "hide"
            }`}
          >
            <div className="tag flex items-center">
              <img className="img" src="./images/user1.png" />
              <div className="lbl">MetaMask</div>
            </div>
            <div className="tag flex items-center">
              <img className="img" src="./images/user1.png" />
              <div className="lbl">Trust Wallet</div>
            </div>
            <div className="tag flex items-center">
              <img className="img" src="./images/user1.png" />
              <div className="lbl">Wallets Connect</div>
            </div>
          </div>
        </>
      </div>
    );
  };
  return (
    <div className="header-camp flex">
      <div className="wrapWidth wrap flex items-center">
        <div className="left flex items-center">
          <Link to={"/"}>
            <img src="./images/sp-Logo.png" className="logo-img cursor-pointer" />
          </Link>
        </div>
        <div className="right flex items-center justify-end">
          <div className="desktop-menu flex items-center">
            <Actions />
          </div>
          <div
            className="menu-icon"
            onClick={(e) => {
              e.stopPropagation();
              setOpenMenu(!openMenu);
            }}
          >
            <MenuIcon />
          </div>
          <div
            className={`menu-list flex flex-col ${openMenu ? "show" : "hide"}`}
          >
            <Actions />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;
