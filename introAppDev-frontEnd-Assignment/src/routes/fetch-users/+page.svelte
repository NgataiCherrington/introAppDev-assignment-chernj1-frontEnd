<script>
	import { env } from "$env/dynamic/public";
	import { onMount } from "svelte";

	let users = $state([]);
	let error = $state(null);

	const PUBLIC_API_BASE_URL = env.PUBLIC_API_BASE_URL || "http://localhost:3000";

	onMount(async () => {
		try { 
			const res = await fetch(`${PUBLIC_API_BASE_URL}/api/users`);
			const json = await res.json();

			users = json.data.data // Access the nested data.data array
		} catch(err) {
			error = err.message;
		}
	});
</script>

{#if error}
	<p>{error}</p>
{:else if users.length > 0}
	<h1>Users</h1>
	<ul>
		{#each users as user}
			<li>{user.firstName} {user.lastName}</li>
		{/each}
	</ul>
{:else}
	<p>No users found</p>
{/if}