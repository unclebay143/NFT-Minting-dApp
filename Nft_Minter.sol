// 1. SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// 2. Importing web3 Libraries from OpenZeppelin
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// 3. Creating Nft_Minter Smart Contract with storage ability
contract Nft_Minter is ERC721URIStorage {
   // 4. Initializing Counter utility
   using Counters for Counters.Counter;
    
   // 5. Setting Counters as token id
   Counters.Counter private _tokenIds;

   // 6. Contructors with Contract token name and symbol
   constructor() ERC721("MyNFT", "MNFT") {}

   // 7. Solidity function to mint Nft
   function mintToken(string memory tokenURI) public returns (uint256) {

      // 7.1 Increase the token id by 1
      _tokenIds.increment();

      // 7.2 Assign the new id in 7.1 to the new Nft
      uint256 newTokenId = _tokenIds.current();
        
      // 7.3 Mint the Nft and tie the sender address as owner 
      _mint(msg.sender, newTokenId);

      // 7.4 Set the token URI for the new Nft
      _setTokenURI(newTokenId, tokenURI);
        
      return newTokenId;
   }
}
