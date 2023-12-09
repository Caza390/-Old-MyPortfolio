<script setup lang="ts">
import { RouterLink, RouterView, routerViewLocationKey } from 'vue-router'
</script>

<template>
  <Body class="min-h-screen bg-woodsmoke-950">
    <aside>
      <div class="fixed w-60 bg-woodsmoke-700 h-screen">
        <ul>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>2024</button>
          </li>
          <li>
            <button>2023</button>
          </li>
          <li>
            <button>2022</button>
          </li>
        </ul>        
      </div>      
    </aside>

    <header class="flex justify-between h-max bg-black">
      <RouterLink to="/" class="flex justify-start items-center text-8xl text-pf-red-900 font-arial font-bold border-r-4 border-pf-red-950 my-1 ml-7 pr-3"
      >Caz</RouterLink>

      <!--  Tabs  -->
      <div class="flex justify-between items-center">
        <RouterLink to="/page/projects" class="text-2xl text-white font-arial font-bold border-r border-pf-red-950 py-1 px-4 hover:border-b-2"
        >Projects</RouterLink>
        <RouterLink to="/page/game_dev" class="text-2xl text-white font-arial font-bold border-x border-pf-red-950 py-1 px-4 hover:border-b-2"
        >Game Dev</RouterLink>
        <RouterLink to="/page/blender" class="text-2xl text-white font-arial border-l border-pf-red-950 font-bold py-1 px-4 hover:border-b-2"
        >Blender</RouterLink>
        <button class="text-2xl text-white font-arial border-l border-pf-red-950 font-bold py-1 px-4 hover:border-b-2"
        >CV</button>
      </div>

      <div class="flex justify-end items-center my-1 mr-7">
        <RouterLink to="/contact_me" class="text-2xl text-pf-red-300 font-arial font-bold bg-pf-red-950 rounded-xl py-1 px-2 hover:bg-pf-red-900"
        >Contact Me</RouterLink>
      </div>
      </header>

    <main>
      <RouterView />
    </main>
  </Body>
</template>