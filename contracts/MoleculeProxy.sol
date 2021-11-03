// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0<0.9.0;

interface Molecule_ERC721 {
    function balanceOf(address sender) external view returns(uint);
}
contract MoleculeProxy {

    address public owner;
    address public moleculeNftAddress;
   
    constructor() public  {
        owner = msg.sender;
    }
    modifier onlyOwner {
        require(msg.sender == owner, "You are not the owner.");
        _;
    }

     function setMoleculeNftAddress (address addr) public onlyOwner {
        moleculeNftAddress = addr ;
    } 
   
    function isAllowed(address sender) public view returns(bool){
      
       Molecule_ERC721 M =  Molecule_ERC721(moleculeNftAddress);
        bool status =false;
        uint balance = M.balanceOf(sender);
        if(balance >= 1 ){
            status = true;
        }
         require(status == true , "Molecule contract : NOT WHITELISTED ADDRESS");
        return status;
    }    
}
