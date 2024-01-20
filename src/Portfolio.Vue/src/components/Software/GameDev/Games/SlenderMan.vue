<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useWindowSize } from '@/view';
import { playerFiles } from "@/components/Software/GameDev/Files/SlenderMan"

const screenSize = useWindowSize();
const isDesktop = ref(screenSize.width.value >= 1024);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const player = () => {
  const playerSection = document.getElementById('player');
  if (playerSection) {
    playerSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const slenderMan = () => {
  const slenderManSection = document.getElementById('slenderMan');
  if (slenderManSection) {
    slenderManSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

onMounted(() => {
  scrollToTop();
});
</script>


<template>
  <body v-if="isDesktop" class="flex">
    <aside class="min-h-screen bg-black border-t-2 border-pf-red-950 rounded-r-lg">
      <ul class="sticky top-1/2 transform -translate-y-1/2 flex flex-col items-center">
        <li>
          <button @click="scrollToTop"
          class="text-white text-3xl font-verdana m-5 py-1 w-36 rounded-lg border-y border-b-pf-red-950 border-t-black hover:border-r-4 hover:border-r-pf-red-950 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >Top</button>
        </li>
        <li>
          <button @click="player"
          class="text-white text-2xl font-verdana m-5 py-1 w-36 rounded-lg border-y border-pf-red-950 hover:border-r-4 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >Player</button>
        </li>
        <li>
          <button @click="slenderMan"
            class="text-white text-xl font-verdana m-5 mb-10 py-1 w-36 rounded-lg border-y border-t-pf-red-950 border-b-black hover:border-r-4 hover:border-r-pf-red-950 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >SlenderMan</button>
        </li>
        <li>
          <RouterLink to="/projects" class="text-2xl text-pf-red-300 font-verdana font-bold bg-pf-red-950 rounded-xl py-2 px-8 hover:bg-pf-red-900"
          >Return</RouterLink>
        </li>
      </ul>
    </aside>

    <div>
      <header>
        <div class="flex justify-center my-2">
          <h2 class="text-pf-red-400 text-6xl font-verdana font-bold">SlenderMan</h2>
        </div>
        <div class="flex justify-center items-center">        
          <p class="text-white text-2xl text-center font-helvetica opacity-70 w-[65%]"
          >SlenderMan is a horror game project I have chosen to take on. I went for the name since it follows the basic concept of SlenderMan. This is a game that populariesed back in the 2012. The mechanics of SlenderMan is pretty simple. You wonder around a Forest looking for 8 pages, only to be Stalked by a Tall creepy enterty that is out to hunt you down before you collect all pages.
          </p>
        </div>
      </header>

      <main class="my-2 mx-10">
        <h2 id="player" class="text-pf-red-300 text-3xl underline font-verdana font-bold mt-20">Player</h2>
        <div>
          <h1 class="text-white text-xl font-helvetica mt-2">The players objective is to collect all the items and escape. I'm thinking about keeping the page idea but also having something where the player collects numbers for a numbpad to get into a house which will result in the escape. The mechanics of the player is Movement, Sprint, Interact and Flashlight.</h1>
          <div v-for="Player in playerFiles" :key="Player.id.value">
            <div class="bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30 flex">
              <div class="m-2 mr-5 flex-shrink-0">
                <img class="rounded"
                  :src="Player.image"
                  :alt="Player.image"
                  style="width: 500px; object-fit: cover;">
              </div>
              <div class="flex flex-col">
                <div>
                  <h1 class="text-white text-2xl font-helvetica font-bold mt-2">{{ Player.title }}</h1>
                  <p class="text-white text-xl font-helvetica mt-2"
                  >{{ Player.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
<!--
        <h2 id="slenderMan" class="text-pf-red-300 text-3xl underline font-verdana font-bold mt-20">SlenderMan</h2>
        <div>
          <h1 class="text-white text-xl font-helvetica mt-2">The goal of SlenderMan is to prevent the player from achieving their goal. SlenderMan will spawn after the first page had been collected, as the player collects more pages, SlenderMan will progressivly gets faster. Sometimes SlenderMan will spawn from random trigger points and also jumpscares from time to time to change the players path. Once near the SlenderMan the player will visually see statick and pull the player camera to SlenderMans direction. If you die to SlenderMan it will result in a Deathscreen / Jumpscare before starting you back in the beginning.</h1>
          <div class="bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30 flex">
            <div class="m-2 mr-5 flex-shrink-0">
              <img class="rounded"
                src=""
                alt=""
                style="width: 500px; object-fit: cover;">
            </div>
            <div class="flex flex-col">
              <div>
                <p class="text-white text-lg font-helvetica mt-2"
                >Description
                </p>
              </div>
            </div>
          </div>
        </div>
-->
      </main>
    </div>
  </body>
  

  <!-- Phone View -->
  <body v-else>
    <div>
      <header>
        <div class="flex justify-center my-2">
          <h2 class="text-pf-red-400 text-6xl text-center font-verdana font-bold">Slender<br>Man</h2>
        </div>
        <div class="flex justify-center items-center">        
          <p class="text-white text-2xl text-center font-helvetica opacity-70 m-4"
            >SlenderMan is a horror game project I have chosen to take on. I went for the name since it follows the basic concept of SlenderMan. This is a game that populariesed back in the 2012. The mechanics of SlenderMan is pretty simple. You wonder around a Forest looking for 8 pages, only to be Stalked by a Tall creepy enterty that is out to hunt you down before you collect all pages.
          </p>
        </div>
      </header>

      <main class="mx-4">
        <h2 id="player" class="text-pf-red-300 text-3xl underline font-verdana font-bold mt-20">Player</h2>
        <div>
          <h1 class="text-white text-lg font-helvetica mt-2">The players objective is to collect all the items and escape. I'm thinking about keeping the page idea but also having something where the player collects numbers for a numbpad to get into a house which will result in the escape. The mechanics of the player is Movement, Sprint, Interact and Flashlight.</h1>
          <div v-for="Player in playerFiles" :key="Player.id.value">
            <div class="flex flex-col items-center bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30">
              <div class="m-2 mr-5 flex-shrink-0">
                <img class="rounded"
                  :src="Player.image"
                  :alt="Player.image"
                  style="width: 350px; object-fit: cover;">
              </div>
              <div>
                <div>
                  <h1 class="text-white text-2xl font-helvetica font-bold mt-2">{{ Player.title }}</h1>
                  <p class="text-white text-lg font-helvetica mt-2"
                  >{{ Player.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <br>
  </body>
</template>