<script>
    export let data; // contains what you returned from load()
  </script>
  
  {#if data.myData}
    <pre>{JSON.stringify(data.myData, null, 2)}</pre>
  {:else}
    <p>Error: {data.error}</p>
  {/if}