<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
  <HelloWorld />

  <nav>
    <RouterLink to="/home">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav> 

    <div>
      <RouterView />
    </div>
</template>
