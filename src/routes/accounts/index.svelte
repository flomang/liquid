<script context="module">
	export const prerender = true;
	export async function load({ fetch }) {
		const res = await fetch('/accounts/addresses');
		return {
			props: {
				accounts: await res.json()
			}
		};
	}
</script>

<script>
	export let accounts;
</script>

<svelte:head>
	<title>Accounts</title>
</svelte:head>

<h1>Accounts</h1>

<ul>
	{#each accounts as acc}
		<li>{acc}</li>
	{/each}
</ul>

<style>
	ul {
		padding: 0;
		margin: 0;
	}
	li {
	}
</style>