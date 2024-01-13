<script setup lang="ts">
import { ref, watch } from 'vue';
import { useWindowSize } from '@/view';

const screenSize = useWindowSize(); // Use this to track the screen size
const isDesktop = ref(screenSize.width.value >= 1024); // Adjust the breakpoint accordingly

watch(screenSize, () => {
  isDesktop.value = screenSize.width.value >= 1024; // Update isDesktop when the screen size changes
});
</script>


<template>
  <!-- Desktop View -->
  <body v-if="isDesktop">
    <div class="flex justify-center items-center m-16">
      <div class="mx-14">
        <div class="bg-black rounded-3xl max-w-4xl py-6 px-8">
          <h2 class="text-white text-6xl font-verdana font-bold">Hello, my name is Callum Carter-Begbie. This is my portfolio!</h2>
          <br>
          <p class="text-pf-red-400 text-3xl font-helvetica">
          I am someone who is dedicated to achieving thair best at all times. There are many projects I like to get my hands involved in ranging from music, computer projects, cars or even real world projects like 3D printing and room lighting.
          <br><br>
          When working in the automotive industy (paint in particular). I found myself getting involved in something technological with software or any other computing related stuff - hence pushing for a software career
          </p>
        </div>
        <div class="flex mt-5">
          <RouterLink to="/contact_me" class="text-3xl text-pf-red-300 font-verdana font-bold bg-pf-red-950 rounded-3xl mr-3 py-5 px-5 hover:bg-pf-red-900"
        >Contact Me</RouterLink>
          <a href="https://www.instagram.com/caza390/" target="_blank">
            <img src="./icons/Instagram.png" alt="instagram" class="h-20 mx-3">
          </a>
          <a href="https://www.linkedin.com/in/callum-carter-begbie-7854bb183/" target="_blank">
            <img src="./icons/LinkedIn.png" alt="linkedIn" class="h-20 mx-3">
          </a>
          <a href="https://twitter.com/caza390" target="_blank">
            <img src="./icons/Twitter.png" alt="twitter" class="h-20 mx-3">
          </a>
          <a href="https://github.com/Caza390" target="_blank">
            <img src="./icons/GitHub.png" alt="gitHub" class="h-20 ml-3">
          </a>
        </div>
      </div>
      <div class="mx-14">
        <img src="../assets/Me.png" alt="me" class="object-contain rounded-3xl h-[676px]">
      </div>
    </div>
  </body>


  <!-- Phone View -->
  <body v-else>
    <div class="flex justify-center items-center">
      <div class="bg-black rounded-3xl max-w-4xl my-4 mx-4 py-6 px-8">
        <h2 class="text-white">Hello, my name is Callum Carter-Begbie. This is my portfolio!</h2>
      </div>
    </div>
  </body>
</template>