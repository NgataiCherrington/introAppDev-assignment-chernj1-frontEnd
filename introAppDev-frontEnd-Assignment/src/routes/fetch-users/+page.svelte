<script>
    export let users; // contains what you returned from load()
  </script>
  
  {#if data.users}
    <pre>{JSON.stringify(data.users, null, 2)}</pre>
  {:else}
    <p>Error: {data.error}</p>
  {/if}