<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { twenty_three, twenty_twenty } from "@/components/Software/3dModelling/Files/3dModellingFiles"
import { useWindowSize } from '@/view';

const screenSize = useWindowSize();
const isDesktop = ref(screenSize.width.value >= 1024);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollToYear = (year: number) => {
  const yearElement = document.getElementById(`year-${year}`);
  if (yearElement) {
    const offset = -100;
    window.scrollTo({
      top: yearElement.offsetTop - offset,
      behavior: "smooth",
    });
  }
};

watch(screenSize, () => {
  isDesktop.value = screenSize.width.value >= 1024;
});

onMounted(() => {
  scrollToTop();
});
</script>


<template>
  <body v-if="isDesktop" class="flex">
    <aside class="min-h-screen bg-black border-t-2 border-pf-red-950 rounded-r-lg">
      <ul class="sticky top-1/2 transform -translate-y-1/2 flex flex-col items-center">
        <li>
          <button @click="scrollToTop"
          class="text-white text-3xl font-verdana m-5 py-1 w-36 rounded-lg border-y border-b-pf-red-950 border-t-black hover:border-r-4 hover:border-r-pf-red-950 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >Top</button>
        </li>
        <li>
          <button @click="() => scrollToYear(2023)"
          class="text-white text-2xl font-verdana m-5 py-1 w-36 rounded-lg border-y border-pf-red-950 hover:border-r-4 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >2023</button>
        </li>
        <li>
          <button @click="() => scrollToYear(2020)"
          class="text-white text-2xl font-verdana mt-5 mb-10 py-1 w-36 rounded-lg border-y border-t-pf-red-950 border-b-black hover:border-r-4 hover:border-r-pf-red-950 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >2020</button>
        </li>
        <li>
          <RouterLink to="/contact_me" class="text-2xl text-pf-red-300 font-verdana font-bold bg-pf-red-950 rounded-xl py-2 px-2 hover:bg-pf-red-900"
          >Contact Me</RouterLink>
        </li>
      </ul>
    </aside>

    <div>
      <header>
        <div class="flex justify-center py-2">
          <h2 class="text-pf-red-400 text-6xl font-verdana font-bold">3D Modelling</h2>
        </div>
        <div class="flex justify-center items-center">        
          <p class="text-white text-2xl text-center font-helvetica opacity-70 w-[65%]"
          >This page displays all the 3D projects that I have worked on for various projects like game development and 3D printing. The perfered software I use is Blender since it is free and widly used by many.
          </p>
        </div>
      </header>

      <main class="mx-10">
        <h2 id="year-2023" class="text-pf-red-300 text-3xl underline font-verdana font-bold mt-20">2023</h2>
        <div v-for="twentyThree in twenty_three" :key="twentyThree.id.value" :id="'year-' + twentyThree.date.getFullYear()">
          <div class="bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30 flex">
            <div class="m-2 mr-5 flex-shrink-0">
              <img class="rounded"
                :src="twentyThree.image"
                :alt="twentyThree.image"
                style="width: 350px; object-fit: cover;">
            </div>
            <div class="flex flex-col">
              <div>
                <h1 class="text-white text-2xl font-helvetica font-bold mt-2">{{ twentyThree.title }}</h1>
                <h1 class="text-woodsmoke-300 text-md font-helvetica">{{ twentyThree.date.toLocaleDateString('en-GB') }}</h1>
              </div>
              <h1 class="text-white text-lg font-helvetica mt-4">{{ twentyThree.description }}</h1>
            </div>
          </div>
        </div>

        <h2 id="year-2020" class="text-pf-red-300 text-3xl underline font-verdana font-bold mt-10">2020</h2>
        <div v-for="twentyTwenty in twenty_twenty" :key="twentyTwenty.id.value" :id="'year-' + twentyTwenty.date.getFullYear()">
          <div class="bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30 flex">
            <div class="m-2 mr-5 flex-shrink-0">
              <img class="rounded"
                :src="twentyTwenty.image"
                :alt="twentyTwenty.image"
                style="width: 350px; object-fit: cover;">
            </div>
            <div class="flex flex-col">
              <div>
                <h1 class="text-white text-2xl font-helvetica font-bold mt-2">{{ twentyTwenty.title }}</h1>
                <h1 class="text-woodsmoke-300 text-md font-helvetica">{{ twentyTwenty.date.toLocaleDateString('en-GB') }}</h1>
              </div>
              <h1 class="text-white text-lg font-helvetica mt-4">{{ twentyTwenty.description }}</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  </body>


  <!-- Phone View -->
  <body v-else>
    <div class="m-10">
      <h2 class="text-white text-4xl font-verdana font-bold mb-3">3D Modelling:</h2>
      <p class="text-white text-2xl font-verdana font-bold">Please access site on desktop to see this page</p>
    </div>
  </body>
</template>