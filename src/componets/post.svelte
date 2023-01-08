<script lang="ts">
  import Blog from "../lib/posts.json";

  const url = new URL(window.location.href);
  const dataBase = url.search.split("=");
  const rute = dataBase[0].split("?")[1];
  const id = dataBase[1];
  //@ts-ignore
  const posts = Blog[1].Blog;
  //@ts-ignore

  let post: {
    title: string;
    subject: string;
    img: string;
    tags: string;
    smallDescription: string;
    body1: string;
    body2: string;
    body3: string;
    body4: string;
  };

  if (rute == "id" && id) {
    post = posts.find((e: string) => e.id == id);
  } else {
  }
</script>

{#if post}
  <div class="container mx-auto">
    <div class="blog-post rounded-lg bg-zinc-700 p-8 shadow-lg">
      <h1 class="mb-4 text-3xl font-bold leading-tight text-white">
        {post.title}
      </h1>
      <h2 class="mb-4 text-xl font-bold text-gray-300">{post.subject}</h2>
      <div class="blog-post-image mb-8">
        <img
          src={post.img}
          alt={post.title}
          class="w-full sm:w-1/2 rounded-lg shadow-md"
        />
      </div>
      <div class="blog-post-tags mb-4">
        <span class="mr-2 font-bold text-gray-400">Tags:</span>
        <ul class="flex flex-wrap">
          {#each post.tags as tag}
            <a
              class="mr-2 mb-2 rounded-full bg-gray-200 px-3 py-1 font-semibold"
              href="/tags?tag={tag}"
            >
              <li />
              {tag}</a
            >
          {/each}
        </ul>
      </div>
      <p
        class="blog-post-small-description mb-8 text-sm font-light text-gray-400"
      >
        {post.smallDescription}
      </p>
      <div class="blog-post-body text-white">
        <p class="mb-4 text-lg leading-relaxed">{post.body1}</p>
        <p class="mb-4 text-lg leading-relaxed">{post.body2}</p>
        <p class="mb-4 text-lg leading-relaxed">{post.body3}</p>
        <p class="mb-4 text-lg leading-relaxed">{post.body4}</p>
      </div>
    </div>
  </div>
{/if}
