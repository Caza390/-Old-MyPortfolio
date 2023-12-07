<script setup lang="ts">
import { twenty_three } from "@/components/Software/Blender/Files/BlenderFiles"

</script>


<template>
  <body>
    <header>
      <div class="flex justify-center my-2">
        <h2 class="text-pf-red-400 text-6xl font-arial font-bold">Blender</h2>
      </div>
      <div class="flex justify-center items-center">        
        <p class="text-white text-2xl text-center font-arial opacity-70 w-[65%]"
        >Blender is a free 3D modelling tool used by many people, it is a widly used tool that is incredibly great for beginners and experienced users especially with all the
        information you can gather on the internet to help get you started.<br>Here you can see all the 3D Models I have made in blender.
        </p>
      </div>
    </header>

    <aside>
      
    </aside>

    <main>
      <div v-for="twentyThree in twenty_three" :key="twentyThree.id.value">
        <div>
          <div>
            <img
              :src= "twentyThree.image"
              alt="badge-stand">
          </div>
          <div>
            <h1 class="text-white text-lg">{{ twentyThree.title }}</h1>
            <h1 class="text-woodsmoke-300 text-sm">{{ twentyThree.date }}</h1>
            <h1 class="text-white">{{ twentyThree.description }}</h1>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>