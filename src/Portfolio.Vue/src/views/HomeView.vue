<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
  <Body class="h-screen bg-woodsmoke-950">
    <header class="flex justify-between h-max bg-black">
      <RouterLink to="/home" class="flex justify-start items-center text-7xl text-caz-red-900 font-arial font-bold my-1 ml-7">Caz</RouterLink>

      <RouterLink to="/contactMe" class="flex justify-end items-center text-md text-white font-arial font-bold my-1 mr-7">Contact Me</RouterLink>
    </header>

    <main>
      <nav>
        <RouterLink to="/about">About</RouterLink>
      </nav> 
    </main>
  </Body>
</template>
