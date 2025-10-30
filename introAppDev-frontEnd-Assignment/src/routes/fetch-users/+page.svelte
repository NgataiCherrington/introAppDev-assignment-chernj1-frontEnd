<script>
  import { enhance } from "$app/forms";

  let data = $props();

  let users = $state(data.users?.data?.data || []);
  let error = $state(data.error);
</script>

{#if error}
  <p>{error}</p>
{:else if users.length > 0}
  <h1>Users</h1>
  <ul>
    {#each users as user}
      <li>{user.firstName} {user.lastName}</li>
      <form method="POST" action="?/delete" use:enhance>
        <input type="hidden" name="id" value={user.id} />
        <button type="submit">Delete</button>
      </form>
    {/each}
  </ul>
{:else}
  <p>No users found</p>
{/if}
