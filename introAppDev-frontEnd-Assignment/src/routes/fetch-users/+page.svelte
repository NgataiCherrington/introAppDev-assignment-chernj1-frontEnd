<script>
  import { enhance } from "$app/forms";
  import { invalidateAll } from "$app/navigation";

  let data = $props();

  //   let users = $state(data.users?.data?.data || []);
  //   let error = $state(data.error);

  $effect(() => {
	console.log("Data from load:", data);
  });
</script>

{#if error}
  <p>{error}</p>
{:else if data.users?.data?.data && data.users.data.data.length > 0}
  <h1>Users</h1>
  <ul>
    {#each data.users.data.data as user}
      <li>{user.firstName} {user.lastName}</li>
      <form 
	  	method="POST" 
		action="?/delete" 
		use:enhance={() => {
			return async ({ result, update }) => {
				if(result.type === 'success') {
					await invalidateAll();
				}
				await update();
			}
		}
		}>
        <input type="hidden" name="id" value={user.id} />
        <button type="submit">Delete</button>
      </form>
    {/each}
  </ul>
{:else}
  <p>No users found</p>
{/if}
