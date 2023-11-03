<script setup lang="ts">
import { RouterLink, RouterView, routerViewLocationKey } from 'vue-router'
</script>

<template>
  <Body class="min-h-screen bg-woodsmoke-950">
    <header class="flex justify-between h-max bg-black">
      <RouterLink to="/home" class="flex justify-start items-center text-8xl text-caz-red-900 font-arial font-bold border-r-4 border-caz-red-950 my-1 ml-7 pr-3"
      >Caz</RouterLink>

      <div class="flex justify-end items-center my-1 mr-7">
        <RouterLink to="/contact_me" class="text-2xl text-caz-red-300 font-arial font-bold bg-caz-red-950 rounded-xl py-1 px-2 hover:bg-caz-red-900"
        >Contact Me</RouterLink>
      </div>
      </header>

    <main class="">
      <RouterView />
    </main>
  </Body>
</template>