<script>
  import { onMount } from "svelte";

  let { data, form } = $props();
  let teams = $state([]);
  let message = data.teams.message;
  let errors = form?.errors;
  let error = data.error;
  let tokenError = form?.error;

  const API_BASE_URL =
    "https://ngatai-introappdev-backend.onrender.com" ||
    "http://localhost:3000";

  onMount(async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/teams`);
      const json = await res.json();

      teams = json.data.data; // Access the nested data.data array
    } catch (err) {
      error = err.message;
    }
  });
</script>

<form method="POST" action="?/create">
  <label for="userId">User ID</label>
  <input
    type="text"
    id="userId"
    name="userId"
    value={form?.userId ?? ""}
    placeholder="Enter your user ID"
  />

  <label for="teamName">Team name</label>
  <input
    type="text"
    id="teamName"
    name="teamName"
    value={form?.teamName ?? ""}
    placeholder="Enter team name"
  />

  <button type="submit">Submit</button>
</form>

{#if form?.success}
  <p>{form.message}</p>
{/if}

{#if form?.success === false}
  <p>{form.error}</p>
{/if}

{#if errors && errors.length > 0}
  <ul>
    {#each errors as error}
      <li>{error.message}</li>
    {/each}
  </ul>
{/if}

{#if teams && teams.length > 0}
  <h1>Teams</h1>
  <table>
    <thead>
      <tr>
        <th>Team Name</th>
      </tr>
    </thead>
    <tbody>
      {#each teams as team}
        <tr>
          <td>{team.teamName}</td>
          <td>
            <form method="POST" action="?/delete">
              <input type="hidden" name="id" value={team.id} />
              <button type="submit">Delete</button>
            </form>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
{:else if message}
  <p>{message}</p>
{/if}
