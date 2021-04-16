<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	//import { onMount } from 'svelte';

	//onMount(async () => {
	////	console.log("here");
	////	//const web3 = await import('web3');
	////	//web3.eth.getAccounts((errors, acc) => {
	////	//	console.log(acc[0]);
	////	//});
	//import Web3 from 'web3';

	//var web3 = new Web3("ws://localhost:8545");
	//web3.eth.getAccounts( (errors, acc) => {
	//	console.log(acc[0]);
	//});
	//});

</script>

<svelte:head>
	<title>Hello world!</title>
</svelte:head>

<main>
	<h1>Hello world!</h1>

	<Counter />

	<p>Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	p {
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
