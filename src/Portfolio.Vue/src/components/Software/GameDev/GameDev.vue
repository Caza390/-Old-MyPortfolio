<script setup lang="ts">
import { onMounted } from 'vue';
import { undertaking } from "@/components/Software/GameDev/Files/GameFiles"

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollToUndertaking = () => {
  const undertakingSection = document.getElementById('undertaking');
  if (undertakingSection) {
    undertakingSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
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
          <button @click="scrollToUndertaking"
          class="text-white text-xl font-verdana m-5 py-1 w-36 rounded-lg border-y border-pf-red-950 hover:border-r-4 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >Undertaking</button>
        </li>
        <li>
          <RouterLink to="/contact_me" class="text-2xl text-pf-red-300 font-verdana font-bold bg-pf-red-950 rounded-xl py-2 px-2 hover:bg-pf-red-900"
          >Contact Me</RouterLink>
        </li>
      </ul>
    </aside>

    <div>
      <header>
        <div class="flex justify-center my-2">
          <h2 class="text-pf-red-400 text-6xl font-verdana font-bold">Game Development</h2>
        </div>
        <div class="flex justify-center items-center">        
          <p class="text-white text-2xl text-center font-helvetica opacity-70 w-[65%]"
          >Welcome to the Game Development page, here you can see all my gaming related projects that I have made using Unreal Engine 4. This site will also link with 
          <RouterLink to="/3d_modelling" class="text-pf-red-500 text-2xl text-center font-helvetica opacity-70 w-[65%] hover:text-pf-red-300 hover:underline">Models</RouterLink>.
          You can also see some work that I have made on my 
          <a href="https://www.youtube.com/@Caz4" target="_blank" class="text-pf-red-500 text-2xl text-center font-helvetica opacity-70 w-[65%] hover:text-pf-red-300 hover:underline">YouTube Channel</a>
          <br>
          I have also gotten myself involved in a bootcamp program from Game Academy to learn more things about the gaming industry besides from just the development.
          </p>
        </div>
      </header>

      <main class="mx-10">
        <h2 id="undertaking" class="text-pf-red-300 text-3xl underline font-verdana font-bold mt-10">Undertaking</h2>
        <div v-for="Undertaking in undertaking" :key="Undertaking.id.value" :id="'year-' + Undertaking.startDate.getFullYear()">
          <div class="bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30 flex">
            <div class="m-2 mr-5 flex-shrink-0">
              <img class="rounded"
                :src="Undertaking.image"
                :alt="Undertaking.image"
                style="width: 350px; object-fit: cover;">
            </div>
            <div class="flex flex-col">
              <div>
                <h1 class="text-white text-2xl font-helvetica font-bold mt-2">{{ Undertaking.title }}</h1>
                <div>
                  <h1 class="text-woodsmoke-300 text-md font-helvetica">{{ Undertaking.startDate.toLocaleDateString('en-GB') }}</h1>
                </div>
              </div>
              <div class="flex">
                <h1 class="text-white text-lg font-helvetica mt-4">{{ Undertaking.description }}</h1>
                <RouterLink :to="Undertaking.route" class="text-white text-lg font-helvetica font-bold mt-4 ml-1 hover:text-pf-red-300 hover:underline">Click Here to find out more.</RouterLink>
              </div>
            </div>
          </div>
        </div>    
      </main>
    </div>
  </body>
</template>