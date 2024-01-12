<script setup lang="ts">
import { ref, watch } from 'vue';
import pdfPath from '@/assets/Callum_Carter-Begbie_CV.pdf';
import { useWindowSize } from '@/view';
import { useRoute, useRouter } from 'vue-router';

const openPdf = () => {
  window.open(pdfPath, '_blank');
};

const screenSize = useWindowSize();
const isDesktop = ref(screenSize.width.value >= 1024);

const selectedTab = ref(localStorage.getItem('selectedTab') || '/');
const route = useRoute();
const router = useRouter();
const navigateToTab = () => {
  if (selectedTab.value === '/cv') {
    openPdfPhone();
  } else {
    router.push(selectedTab.value);
    localStorage.setItem('selectedTab', selectedTab.value);
  }
};
const openPdfPhone = () => {
  if (selectedTab.value === '/cv') {
    window.location.href = pdfPath;
  }
};

watch(screenSize, () => {
  isDesktop.value = screenSize.width.value >= 1024;
  selectedTab.value = route.path;
});
</script>

<template>
  <!-- Desktop View -->
  <Body v-if="isDesktop" class="min-h-screen bg-woodsmoke-950">
    <header class="flex justify-between h-max bg-black">
      <RouterLink to="/" class="flex justify-start items-center text-8xl text-pf-red-900 font-verdana font-bold border-r-4 border-pf-red-950 my-2 ml-7 pb-2 px-3"
      >Caz</RouterLink>

      <!--  Tabs  -->
      <div class="flex justify-between items-center">
        <RouterLink to="/projects" class="text-2xl text-white font-verdana font-bold border-r border-pf-red-950 py-2 px-4 hover:border-b-2"
        >Projects</RouterLink>
        <RouterLink to="/game_dev" class="text-2xl text-white font-verdana font-bold border-x border-pf-red-950 py-2 px-4 hover:border-b-2"
        >Game Dev</RouterLink>
        <RouterLink to="/3d_modelling" class="text-2xl text-white font-verdana border-x border-pf-red-950 font-bold py-2 px-4 hover:border-b-2"
        >Models</RouterLink>
        <button @click="openPdf" class="text-2xl text-white font-verdana border-l border-pf-red-950 font-bold py-2 px-4 hover:border-b-2"
        >CV</button>
      </div>

      <div class="flex justify-end items-center my-1 mr-7">
        <RouterLink to="/contact_me" class="text-2xl text-pf-red-300 font-verdana font-bold bg-pf-red-950 rounded-xl py-3 px-4 hover:bg-pf-red-900"
        >Contact Me</RouterLink>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </Body>


  <!-- Phone View -->
  <body v-else class="min-h-screen bg-woodsmoke-950">
    <header class="flex justify-between h-max bg-black">
      <RouterLink to="/" class="flex justify-start items-center text-5xl text-pf-red-900 font-verdana font-bold border-r-2 border-pf-red-950 my-3 ml-4 pb-1 px-3"
      >Caz</RouterLink>

      <div class="flex justify-between items-center">
        <select v-model="selectedTab" @change="navigateToTab" class="flex justify-end items-center font-verdana text-xl text-pf-red-300 font-bold bg-pf-red-950 rounded-xl mr-7 py-2 px-3">
          <option value="/">About</option>
          <option value="/projects">Projects</option>
          <option value="/game_dev">Game Dev</option>
          <option value="/3d_modelling">Models</option>
          <option value="/cv">CV</option>
        </select>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </body>
</template>