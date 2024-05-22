// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract SimpleRegistry {
    string private entityName;
    uint private entityAge;

    constructor(string memory name, uint age) {
        entityName = name;
        entityAge = age;
    }

    // Function to update the entity's name
    function updateName(string memory newName) public {
        entityName = newName;
    }

    // Function to update the entity's age
    function updateAge(uint newAge) public {
        entityAge = newAge;
    }

    // Function to retrieve the entity's name and age
    function getEntityDetails() public view returns (string memory name, uint age) {
        return (entityName, entityAge);
    }
}