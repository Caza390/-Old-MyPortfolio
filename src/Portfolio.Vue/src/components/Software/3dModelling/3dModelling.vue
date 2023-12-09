<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { twenty_three, twenty_twenty } from "@/components/Software/3dModelling/Files/3dModellingFiles"

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollToYear = (year: number) => {
  const yearElement = document.getElementById(`year-${year}`);
  if (yearElement) {
    const offset = -100; // Change this if it doesn't line up to the top.
    window.scrollTo({
      top: yearElement.offsetTop - offset,
      behavior: "smooth",
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
          class="text-white text-3xl font-arial m-5 py-1 w-36 rounded-lg border-y border-b-pf-red-950 border-t-black hover:border-r-4 hover:border-r-pf-red-950 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >Top</button>
        </li>
        <li>
          <button @click="() => scrollToYear(2023)"
          class="text-white text-3xl font-arial m-5 py-1 w-36 rounded-lg border-y border-pf-red-950 hover:border-r-4 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >2023</button>
        </li>
        <li>
          <button @click="() => scrollToYear(2020)"
          class="text-white text-3xl font-arial m-5 py-1 w-36 rounded-lg border-y border-t-pf-red-950 border-b-black hover:border-r-4 hover:border-r-pf-red-950 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >2020</button>
        </li>
      </ul>
    </aside>

    <div>
      <header>
        <div class="flex justify-center py-2">
          <h2 class="text-pf-red-400 text-6xl font-arial font-bold">3D Modelling</h2>
        </div>
        <div class="flex justify-center items-center">        
          <p class="text-white text-2xl text-center font-arial opacity-70 w-[65%]"
          >Welcome to my 3D Modelling page! This is where I have created 3D models for various projects ranging from game development to models for 3D printing. Feel free to browse around my site to see my history of development and progression.
          </p>
        </div>
      </header>

      <main class="mx-10">
        <h2 id="year-2023" class="text-pf-red-300 text-3xl underline font-arial font-bold mt-10">2023</h2>
        <div v-for="twentyThree in twenty_three" :key="twentyThree.id.value" :id="'year-' + twentyThree.date.getFullYear()">
          <div class="bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30 flex">
            <div class="m-2 mr-5 flex-shrink-0">
              <img class="rounded"
                :src="twentyThree.image"
                alt="badge-stand"
                style="width: 350px; object-fit: cover;">
            </div>
            <div class="flex flex-col">
              <div>
                <h1 class="text-white text-2xl font-arial font-bold mt-2">{{ twentyThree.title }}</h1>
                <h1 class="text-woodsmoke-300 text-md font-arial">{{ twentyThree.date.toLocaleDateString('en-GB') }}</h1>
              </div>
              <h1 class="text-white text-lg font-arial mt-4">{{ twentyThree.description }}</h1>
            </div>
          </div>
        </div>

        <h2 id="year-2020" class="text-pf-red-300 text-3xl underline font-arial font-bold mt-10">2020</h2>
        <div v-for="twentyTwenty in twenty_twenty" :key="twentyTwenty.id.value" :id="'year-' + twentyTwenty.date.getFullYear()">
          <div class="bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30 flex">
            <div class="m-2 mr-5 flex-shrink-0">
              <img class="rounded"
                :src="twentyTwenty.image"
                alt="badge-stand"
                style="width: 350px; object-fit: cover;">
            </div>
            <div class="flex flex-col">
              <div>
                <h1 class="text-white text-2xl font-arial font-bold mt-2">{{ twentyTwenty.title }}</h1>
                <h1 class="text-woodsmoke-300 text-md font-arial">{{ twentyTwenty.date.toLocaleDateString('en-GB') }}</h1>
              </div>
              <h1 class="text-white text-lg font-arial mt-4">{{ twentyTwenty.description }}</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  </body>
</template>