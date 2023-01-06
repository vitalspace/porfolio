<script lang="ts" client:only>
  import { get } from "svelte/store";
  const url = new URL(window.location.href);
  console.log(url.search);
</script>
