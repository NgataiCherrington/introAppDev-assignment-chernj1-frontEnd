<script>
	import { env } from "$env/dynamic/public";
	import { onMount } from "svelte";

	let users = $state([]);
	let error = $state(null);

	const API_BASE_URL = env.API_BASE_URL || "http://localhost:3000";

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
{:else if users.data.length > 0}
	<h1>Users</h1>
	<ul>
		{#each user as users}
			<li>{user.data.firstName}</li>
			<li>{user.data.lastName}</li>
		{/each}
	</ul>
{:else}
	<p>No users found</p>
{/if}