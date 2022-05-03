const TonWeb = require("tonweb");

function hexToBytes(hex) {
	    for (var bytes = [], c = 0; c < hex.length; c += 2)
		        bytes.push(parseInt(hex.substr(c, 2), 16));
	    return new Uint8Array(bytes);
}

(async () => {
const {NftCollection, NftItem, NftMarketplace, NftSale} = TonWeb.token.nft;
const tonweb = new TonWeb(new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC'));
const seed = hexToBytes('8b113467f4d4437f60b9b49bb1cafa2d79b7140e23fd2a4c32f960b7d4ed77955e74d2c2da031684d436e41de46bf195da473ee45b1a7ca9bb8cdc44cdc6e05c');
const keyPair = TonWeb.utils.nacl.sign.keyPair.fromSecretKey(seed);
    const WalletClass = tonweb.wallet.all["v3R2"];
    const wallet = new WalletClass(tonweb.provider, {
	            publicKey: keyPair.publicKey,
	            wc: 0
	        });
    const nftAddress = new TonWeb.utils.Address("EQBjGEQSQDux2pCmOwiudgYx0wO4CnxjAjakgeMgpMst3lk6");
    const myAddress = new TonWeb.utils.Address("EQC38-cbo1HivDOdH0oOzyZfTKVpSkatn1ydXJYsrg5KvLNI");
    const nftItem = new NftItem(tonweb.provider, {address: nftAddress});
    
    const seqno = (await wallet.methods.seqno().call()) || 0;
	        console.log({seqno});
	await new Promise(resolve => setTimeout(resolve, 1000));

	        const amount = TonWeb.utils.toNano(0.04);

	        console.log(
			            await wallet.methods.transfer({
					                    secretKey: keyPair.secretKey,
					                    toAddress: await nftAddress,
					                    amount: amount,
					                    seqno: seqno,
					                    payload: await nftItem.createTransferBody({
								                        newOwnerAddress: myAddress,
								                        forwardAmount: TonWeb.utils.toNano(0.02),
								                        forwardPayload: new TextEncoder().encode('gift'),
								                        responseAddress: myAddress
								                    }),
					                    sendMode: 3,
					                }).send().catch(e => console.log(e))
			        );
    
})();
