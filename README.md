# About ton-transfer-NFT

This is the repo for discovering and grabbing NFTs dropped in a form with wallet's private keys on [ton](https://ton.org) blockchain.

index.js — script to search for wallets<br>
transfer.js — script for gem transfer

Example Gem: https://explorer.tonnft.tools/nft/EQD5LNIPAH9DytTkkiw6cwNBfiOIJ4647fD7tACfrKl1ODUz


# Installation

1. Download and install [Nodejs](https://nodejs.org/en/).
2. Install all the requirements with:

  ```bash
  npm i --save
  ```

# Search

1. Edit `const seed = hexToBytes` (paste the private key you discovered).
2. Launch the first script with `node index.js`. That gets the wallets matching the discoveted key.
![1](https://user-images.githubusercontent.com/10156691/166644593-1f1bcb63-781d-4095-aafb-c867125d97a7.jpg)
3. Follow the links and find the wallet having incoming transactions.
4. Once the transaction was found it can be checked with https://explorer.tonnft.tools/nft/(paste the address).
5. This gets you an image.
<img width="1636" alt="2 (1)" src="https://user-images.githubusercontent.com/10156691/166644511-374d0397-82df-4301-aae5-4f3cb9edfbd3.png">

# Transfer 

## Requirements

 * wallet version
 * wallet address
 * discovered private key
 * NFT address
 * address to send NFT to

## What to do:

1. Edit transfer.js with:

  WalletClass - wallet version.<br>
  hexToBytes - private key<br>
  nftAddress - NFT address<br>
  myAddress - address to transfer NFT to<br>

2. Launch the script with `node transfer.js`<br>

Note: wallet needs to have at least 0.05 TON to pay for the transaction.


