<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useWindowSize } from '@/view';

const emailAddress = 'callum.carterbegbie@gmail.com';
const emailLink = computed(() => `mailto:${emailAddress}`);

const screenSize = useWindowSize();
const isDesktop = ref(screenSize.width.value >= 1024);

watch(screenSize, () => {
  isDesktop.value = screenSize.width.value >= 1024;
});
</script>


<template>
  <!-- Desktop View -->
  <body v-if="isDesktop">
    <div class="flex justify-center items-center m-20">
      <div>
        <div class="bg-black rounded-3xl max-w-4xl py-6 px-8">
          <p class="text-white text-3xl font-helvetica font-bold"
          >Contact me with either email, phone or discord. 
          <br>
          I often check my email account and made a discord profile for business use.
          <br>
          Personally I prefer to be contacted by these but if you would like to use phone call/text that is also okay - I do have WhatsApp.
          </p>
          <br>
          <br>
          <p class="text-pf-red-400 text-3xl font-helvetica font-bold">
            Email : <a :href="emailLink">{{ emailAddress }}</a>
            <br>
            Discord : CallumCB
            <br>
            Number : 07842 608878
            <br>
            LinkedIn : <a href="https://www.linkedin.com/in/callum-carter-begbie-7854bb183/" target="_blank">Callum Carter-Begbie</a>
          </p>
          <br>
          <br>
          <p class="text-white text-3xl font-helvetica font-bold"
          >I look forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  </body>


  <!-- Phone View -->
  <body v-else>
    <div class="flex justify-center items-center">
      <div>
        <div class="bg-black rounded-3xl max-w-4xl my-10 mx-4 py-4 px-6">
          <p class="text-white text-xl font-helvetica font-bold"
          >Contact me with either email, phone or discord. 
          <br>
          I often check my email account and made a discord profile for business use.
          <br>
          Personally I prefer to be contacted by these but if you would like to use phone call/text that is also okay - I do have WhatsApp.
          </p>
          <br>
          <br>
          <p class="text-pf-red-400 text-xl font-helvetica font-bold">
            Email : <a :href="emailLink">{{ emailAddress }}</a>
            <br>
            Discord : CallumCB
            <br>
            Number : 07842 608878
            <br>
            LinkedIn : <a href="https://www.linkedin.com/in/callum-carter-begbie-7854bb183/" target="_blank">Callum Carter-Begbie</a>
          </p>
          <br>
          <br>
          <p class="text-white text-xl font-helvetica font-bold"
          >I look forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  </body>
</template>