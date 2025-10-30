<script>
  let { data, form } = $props();
  let teams = data.teams.data;
  let message = data.teams.message;
  let errors = form?.errors;
  let error = data.error;
  let tokenError = form?.error;
</script>

<form method="POST" action="?/create">
  <label for="teamName">Team name</label>
  <input
    type="text"
    id="teamName"
    name="teamName"
    value={form?.name ?? ""}
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
