<script setup lang="ts">
import { onMounted } from 'vue';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  scrollToTop();
});
</script>


<template>
  <body class="flex">
    <aside class="min-h-screen bg-black border-t-2 border-pf-red-950 rounded-r-lg">
      <ul class="sticky top-1/2 transform -translate-y-1/2 flex flex-col items-center">
        <li>
          <button @click="scrollToTop"
          class="text-white text-3xl font-arial m-5 py-1 w-36 rounded-lg border-y border-b-pf-red-950 border-t-black hover:border-r-4 hover:border-r-pf-red-950 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >Top</button>
        </li>
        <li>
          <button @click=""
          class="text-white text-3xl font-arial mt-5 mb-10 py-1 w-36 rounded-lg border-y border-t-pf-red-950 border-b-black hover:border-r-4 hover:border-r-pf-red-950 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >Skill Stats</button>
        </li>
        <li>
          <RouterLink to="/contact_me" class="text-2xl text-pf-red-300 font-arial font-bold bg-pf-red-950 rounded-xl py-2 px-2 hover:bg-pf-red-900"
          >Contact Me</RouterLink>
        </li>
      </ul>
    </aside>

    <div>
      <header>
        <div class="flex justify-center my-2">
          <h2 class="text-pf-red-400 text-6xl font-arial font-bold">Projects</h2>
        </div>
        <div class="flex justify-center items-center">        
          <p class="text-white text-2xl text-center font-arial opacity-70 w-[65%]"
          >Welcome to all my projects page. This page is to show all the work I have done in my time but couldn't easily categories it. These projects can range from site development to application creation.
          </p>
        </div>
      </header>

      <main>
        <div>
          <p>Here is some stats lmao</p>
          <image src="./Images/Chart.png" alt="Chart" />
        </div>
      </main>
    </div>
  </body>
</template>