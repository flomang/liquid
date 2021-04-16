import Web3 from 'web3';

export async function get() {
	var web3 = new Web3("ws://localhost:8545");
	var accounts = await web3.eth.getAccounts( (errors, acc) => {});

	return {
		body: accounts 
	};
}