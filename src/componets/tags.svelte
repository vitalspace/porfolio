<script lang="ts">
  import Tags from "../lib/tags.json";
  //@ts-ignore
  const tags: string[] = Tags[0].tags;
</script>

<div
  class="container mx-auto flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 w-full h-full -z-10"
>
  <div class="flex flex-wrap space-x-2 justify-center items-center">
    {#each tags as tag}
      <a class="bg-pink-500 font-serif text-white rounded-md p-2 m-2 hover:scale-110 transition duration-300" href="/tag/{tag.replaceAll(" ", "-").toLowerCase()}">{tag}</a>
    {/each}
  </div>
</div>
