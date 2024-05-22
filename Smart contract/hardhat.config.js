require("@nomicfoundation/hardhat-toolbox");
require ("dotenv").config();

const { API_KEY, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_KEY,
      accounts: [ `0x${PRIVATE_KEY}`]
    },
  },
  

};
