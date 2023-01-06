<script lang="ts">
  import Posts from "../lib/posts.json";
</script>

<div class="sm:flex  sm:container sm:mx-auto sm:space-x-10 mt-4">
  <div class="w-full border-2 border-blue-400 h-28 sm:h-60 sm:w-96">
    ajslkdjkasd
  </div>

  <div class="w-full flex flex-wrap">
    {#each Posts as elem}
      <div
        class="w-full sm:mx-1 rounded-t-md sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
      >
        <a href={`/post?id=`+elem.id}>
          <img class="w-full rounded-t-md" src={elem.img} alt={elem.subject} title={elem.subject} />
          <div class="bg-zinc-700">
            <header class="py-2 pl-2">
              <h2 class="text-white">{elem.title}</h2>
              <small class="text-gray-200">{elem.subject}</small>
            </header>
            <p class="pl-2 text-xs py-2 text-gray-300">
              {elem.smallDescription}
            </p>
          </div>
          <footer class="bg-zinc-900 py-2 pl-2 rounded-b-md">
            <small class="text-gray-300">{elem.tags[0]}</small>
          </footer>
        </a>
      </div>
    {/each}

    <!-- <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400">a</div> -->
    <!-- <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">a</div> -->
    <!-- <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400">a</div> -->
    <!-- <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-500">a</div> -->
    <!-- <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-400">a</div> -->
  </div>
</div>
