import { utils } from "web3";

export const getPaymasterAddress = (chainId: string) => {
  switch (chainId) {
    case utils.toHex(11155111):
      return '0x7302A0c9676C3E2e2178cB33ABC2749249Fe224e';
    case utils.toHex(534351):
      return '0x0000000000000000000000000000000000000000';
    case utils.toHex(17000):
      return '0x302aC33BE431Ed2cC7Bd6731c71525a015C8DA57';
    default:
      return '';
  }
}

export const getFactoryAddress = (chainId: string) => {
  switch (chainId) {
    case utils.toHex(11155111):
      return '0xa32021c258055A1b8508F6FAfB85f140AF0426E4';
    case utils.toHex(534351):
      return '0x743C2323E0447bb300c10655Ebc0168d03B4a544';
    case utils.toHex(17000):
      return '0xf5cD05816991F60134b4fc7C86f8705080DB2992';
    default:
      return '';
  }
}

export const ELECTION_FACTORY_ABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "electionAddress", "type": "address" }], "name": "ElectionCreated", "type": "event" }, { "inputs": [{ "internalType": "string", "name": "_title", "type": "string" }, { "internalType": "string", "name": "_description", "type": "string" }, { "internalType": "bool", "name": "_isPublic", "type": "bool" }, { "internalType": "uint256", "name": "_startDate", "type": "uint256" }, { "internalType": "uint256", "name": "_endDate", "type": "uint256" }], "name": "createElection", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_electionID", "type": "uint256" }], "name": "deleteElection", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getElections", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getTotalElections", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getTrustedForwarder", "outputs": [{ "internalType": "address", "name": "forwarder", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "forwarder", "type": "address" }], "name": "isTrustedForwarder", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_forwarder", "type": "address" }], "name": "setTrustedForwarder", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]