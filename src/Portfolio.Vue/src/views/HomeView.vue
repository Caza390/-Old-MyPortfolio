<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import pdfPath from '@/assets/Callum_Carter-Begbie_CV.pdf';
import { useWindowSize } from '@/view';
import { useRoute, useRouter } from 'vue-router';

const screenSize = useWindowSize();
const isDesktop = ref(screenSize.width.value >= 1024);

const modalOpen = ref(false);
const router = useRouter();
const currentRoute = useRoute();
const buttonText = ref(String(currentRoute.name) || 'Menu');

const openPdf = () => {
  window.open(pdfPath, '_blank');
};

watch(screenSize, () => {
  isDesktop.value = screenSize.width.value >= 1024;
});

const openModal = () => {
  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
}
const selectSection = (section: string) => {
  if (section === 'cv') {
    window.open(pdfPath, '_blank');
  } else {
    router.push('/' + section.toLowerCase());
    closeModal();
  }
};

router.beforeEach((to, from, next) => {
  buttonText.value = String(to.name) || 'Menu';
  next();
});

watch(() => currentRoute.name, (newRouteName) => {
  buttonText.value = String(newRouteName) || 'Menu';
});

onMounted(() => {
  buttonText.value = String(currentRoute.name) || 'Menu';
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
      <RouterLink to="/" class="flex justify-start items-center text-6xl text-pf-red-900 font-verdana font-bold border-r-2 border-pf-red-950 my-3 ml-4 pb-1 px-3"
      >Caz</RouterLink>

    <div class="flex justify-between items-center">
      <button @click="openModal" class="text-lg text-pf-red-300 font-verdana font-bold bg-pf-red-950 rounded-xl mr-4 py-3 px-4 hover:bg-pf-red-900">{{ buttonText }}</button>
    </div>
    </header>

    <main>
      <div v-if="modalOpen" class="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div v-if="modalOpen" class="modal absolute bg-black left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10 border-4 border-pf-red-300 rounded-xl w-2/3">
        <p class="text-white text-xl font-verdana font-bold mt-5 mx-5 border-b-2 inline-block">Select Page:</p>
        <table class="table-auto my-2 mx-5">
        <tbody>
          <tr>
            <td @click="selectSection('')" class="text-center align-middle text-white text-lg font-verdana py-2 px-4 border-b border-red-950">About</td>
          </tr>
          <tr>
            <td @click="selectSection('projects')" class="text-center align-middle text-white text-lg font-verdana py-2 px-4 border-y border-red-950">Projects</td>
          </tr>
          <tr>
            <td @click="selectSection('game_dev')" class="text-center align-middle text-white text-lg font-verdana py-2 px-4 border-y border-red-950">Game Development</td>
          </tr>
          <tr>
            <td @click="selectSection('3d_modelling')" class="text-center align-middle text-white text-lg font-verdana py-2 px-4 border-y border-red-950">3D Models</td>
          </tr>
          <tr>
            <td @click="selectSection('contact_me')" class="text-center align-middle text-white text-lg font-verdana py-2 px-4 border-y border-red-950">Contact Me</td>
          </tr>
          <tr>
            <td @click="selectSection('cv')" class="text-center align-middle text-white text-lg font-verdana py-2 px-4 border-t border-red-950">CV</td>
          </tr>
        </tbody>
      </table>
      <button @click="closeModal" class="text-lg text-pf-red-300 font-verdana font-bold bg-pf-red-950 rounded-xl mb-5 ml-5 py-3 px-4 hover:bg-pf-red-900">Close</button>
    </div>

      <RouterView />
    </main>
  </body>
</template>