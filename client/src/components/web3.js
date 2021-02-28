import Web3 from "web3";

var web3;
const ethereum = window.ethereum;

if (ethereum) {
  web3 = window.web3 = new Web3(window.ethereum);
  try {
    ethereum.enable();
  } catch (error) {
   console.error(error);
  }
} else if (window.web3) {
  web3 = window.web3 = new Web3(web3.currentProvider || 'http://localhost:7545');
} else {
  console.log("Browser not available for ethereum!");
}

export default web3;