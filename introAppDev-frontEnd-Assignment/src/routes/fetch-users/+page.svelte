<script>
	import { env } from "$env/dynamic/private";
	import { onMount } from "svelte";

	const API_BASE_URL = env.API_BASE_URL || "http://localhost:3000";

	let users = $state([]);
	let error = $state(null);

	onMount(async () => {
		try { 
			const res = await fetch(`${API_BASE_URL}/api/users`);
			users = await res.json();
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
		{#each user as users}
			<li>{user.name}</li>
		{/each}
	</ul>
{:else}
	<p>No users found</p>
{/if}