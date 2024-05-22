## METACRAFTERS ETH + AVAX PROOF: Intermediate EVM Course

## MODULE: Smart Contract Management

### Project: Function Frontend


### Task Description

For this project, create a simple contract with 2-3 functions. Then show the values of those functions in frontend of the application.

### Project Description

SimpleRegistry Smart Contract and React Frontend Example
This repository contains a simple Ethereum smart contract named SimpleRegistry and a React frontend application that interacts with the smart contract. The smart contract stores information about an entity's name and age and provides functions to update and retrieve this information.

### USAGE
- Find the contract under the src folder
- Head to [remix](https://remix.ethereum.org/), paste the contract and deploy replace the new address under the frontend and abi.json
- - npm install to get the node dependencies on the frontend 
- Feel free to play around with the contract.

## How it works

#### Smart Contract Functions
constructor(string memory _name, uint _age)
Initializes the entity's name and age when the contract is deployed.
updateName(string memory _newName) public
Updates the entity's name with the provided new name.
updateAge(uint _newAge) public
Updates the entity's age with the provided new age.
getEntityDetails() public view returns (string memory name, uint age)
Retrieves the current entity's name and age.

#### React Frontend Features
Connects to an Ethereum provider (e.g., MetaMask).
Loads the SimpleRegistry smart contract using ethers.js.
Displays the current entity's details on the frontend.
Allows users to update the entity's name and age.


## Author

👤 **Ijay Abby**

- Github: [@IjayAbby](https://github.com/IjayAbby)
- Twitter: [@Ijay_js](https://twitter.com/Ijay_js)
- LinkedIn: [Abigael Nyangasi](https://www.linkedin.com/in/ijayabby4/)

## Show your support

Give a :star2: if you like this project! :blush:

## Acknowledgments

- [Metacrafters](https://academy.metacrafters.io/content/solidity-avax-intermediate/building-on-avax/assessment/project) for amazing resources.