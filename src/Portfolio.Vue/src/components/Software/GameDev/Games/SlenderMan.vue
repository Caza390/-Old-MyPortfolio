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
          class="text-white text-3xl font-verdana m-5 py-1 w-36 rounded-lg border-y border-b-pf-red-950 border-t-black hover:border-r-4 hover:border-r-pf-red-950 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >Top</button>
        </li>
        <li>
          <RouterLink to="/projects" class="text-2xl text-pf-red-300 font-verdana font-bold bg-pf-red-950 rounded-xl py-2 px-8 hover:bg-pf-red-900"
          >Return</RouterLink>
        </li>
      </ul>
    </aside>

    <div>
      <header>
        <div class="flex justify-center my-2">
          <h2 class="text-pf-red-400 text-6xl font-verdana font-bold">SlenderMan</h2>
        </div>
        <div class="flex justify-center items-center">        
          <p class="text-white text-2xl text-center font-helvetica opacity-70 w-[65%]"
          >SlenderMan is a horror game project I have chosen to take on. I went for the name since it follows the basic concept of SlenderMan. This is a game that populariesed back in the 2012. This created a popular theme with people where you are a person wondering a forest which turns out to have a tall, intimidating figure known as SlenderMan. To get away you need to collect 8 Pages and leave.
          </p>
        </div>
      </header>

      <main class="my-2 mx-10">
        <h2 id="site" class="text-pf-red-300 text-3xl underline font-verdana font-bold mt-20">Title</h2>
        <div>
          <h1 class="text-white text-xl font-helvetica mt-2">Topic Sub</h1>
          <div class="bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30 flex">
            <div class="m-2 mr-5 flex-shrink-0">
              <img class="rounded"
                src="@/components/Software/Projects/Files/Images/Portfolio/HomePage.png"
                alt="homePage"
                style="width: 500px; object-fit: cover;">
            </div>
            <div class="flex flex-col">
              <div>
                <p class="text-white text-lg font-helvetica mt-2"
                >Description
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </body>
</template>