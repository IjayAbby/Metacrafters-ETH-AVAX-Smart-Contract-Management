import './App.css';
import { ethers } from 'ethers';
import contractABI from './abi.json';
import { useState, useEffect } from 'react';

function App() {
  const contractAddress = "0x0AeC8EC2879F21CbEEBc9A4c56eed821f3A93e39";



  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [contractName, setContractName] = useState("");
  const [contractAge, setContractAge] = useState("");

  const [isConnected, setIsConnected] = useState(false);
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
        // await getEntityDetailsFromContract();
      } catch (error) {
        console.error('Error connecting to wallet:', error);
      }
    } else {
      console.error('MetaMask is not installed!');
    }
  };

  async function requestAccount() {


    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function sendMessageToContract() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      console.log("CONTRACT", contract);

      try {
        if (inputName) {
          const nameTransaction = await contract.updateName(inputName);
          await nameTransaction.wait();
          console.log("Name set successfully");
        }

        if (inputAge) {
          const ageTransaction = await contract.updateAge(parseInt(inputAge));
          await ageTransaction.wait();
          console.log("Age set successfully");
        }

            fetchContractDetails();// Retrieve updated details after setting
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }


    async function fetchContractDetails() {
      if (typeof window.ethereum !== "undefined") {
         await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      console.log("CONTRACT222", contract);

        try {
          const tx = await contract.getEntityDetails();
          console.log(tx);
          setContractName(tx.name);
          setContractAge(Number(tx.age));
        } catch (err) {
          console.error("Error:", err);
        }
      }
    }




  useEffect(() => {
        fetchContractDetails();
    console.log("MOUNTEDDDDD"); // Fetch the contract details on component mount
  }, []);

  return (
    <div className="App">
      <button onClick={connectWallet}>{isConnected ? "Account Connected" : "Connect wallet"}</button>
      <div style={{ margin: "20px" }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter your age"
          value={inputAge}
          onChange={(e) => setInputAge(e.target.value)}
        />
        <button onClick={sendMessageToContract}>Set Details</button>
      </div>
      <div>
        <p>Contract Name: {contractName}</p>
        <p>Contract Age: {contractAge}</p>
      </div>
    </div>
  );
}

export default App;