<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  body: string;
}

const posts = ref<Post[]>([]);

// ====================================================================

// onMounted(async () => {
//   const response = await fetch('https://dummyjson.com/posts');
//   const data = await response.json();
//   posts.value = data.posts;
// });

// ====================================================================


// const getPosts = async () => {
//   const response = await fetch('https://dummyjson.com/posts');
//   const { posts } = await response.json();
//   return posts;
// };

// onMounted(() => {
//   getPosts().then((data) => {
//     posts.value = data;
//   });
// });

// ====================================================================

onMounted(() => {
  axios.get('https://dummyjson.com/posts')
    .then(({ data }) => {
      posts.value = data.posts;
    })
});
</script>


<!--
<script lang="ts">
import { ref } from "vue";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  body: string;
}

export default {
  setup() {
    const posts = ref<Post[]>([]);
    return {
      posts
    };
  },
  mounted() {
    axios.get("https://dummyjson.com/posts")
      .then(({ data }) => {
        this.posts = data.posts;
      });
  }
}
</script>
-->

<template>
  <div class="container m-auto grid mt-12">
    <h1 v-if="!posts">
      Loading...
    </h1>
    <div v-else class="grid gap-12">
      <h1 class="text-3xl text-center underline font-bold">Posts</h1>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <article :key="post.id" v-for="post in posts"
          class="flex flex-col px-5 py-3 gap-3 border border-stone-700 rounded-md">
          <h2 class="text-lg font-bold">
            {{ post.title }}
          </h2>
          <p>{{ post.body.slice(0, 100) }}...</p>
        </article>
      </div>
    </div>
  </div>
</template>
