<script setup lang="ts">
import { defineComponent, computed } from 'vue';

const emailAddress = 'callum.carterbegbie@gmail.com';
const emailLink = computed(() => `mailto:${emailAddress}`);

const discordUsername = 'CallumCB';
const discordProfileLink = `https://discord.com/users/${1160906964176474193}`;
</script>


<template>
<body>
  <div class="flex justify-center items-center m-20">
    <div>
      <div class="bg-black rounded-3xl max-w-4xl py-4 px-6">
        <p class="text-white text-3xl font-arial font-bold"
        >Contact me with either email, phone or discord. 
        <br>
        I often check my email account and made a discord profile for business use.
        <br>
        Personally I prefer to be contacted by these but if you would like to use phone call/text that is also okay - I do have WhatsApp.
        </p>
        <br>
        <br>
        <p class="text-pf-red-400 text-3xl font-arial font-bold">
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
        <p class="text-white text-3xl font-arial font-bold"
        >I look forward to hearing from you!
        </p>
      </div>
    </div>
  </div>
</body>
</template>