<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useWindowSize } from '@/view';

const screenSize = useWindowSize();
const isDesktop = ref(screenSize.width.value >= 1024);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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
            class="text-white text-3xl font-verdana m-5 mb-10 py-1 w-36 rounded-lg border-y border-b-pf-red-950 border-t-black hover:border-r-4 hover:border-r-pf-red-950 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950">Top</button>
        </li>
        <li>
          <RouterLink to="/projects"
            class="text-2xl text-pf-red-300 font-verdana font-bold bg-pf-red-950 rounded-xl py-2 px-8 hover:bg-pf-red-900">
            Return</RouterLink>
        </li>
      </ul>
    </aside>

    <div>
      <header>
        <div class="flex justify-center my-2">
          <h2 class="text-pf-red-400 text-6xl font-verdana font-bold">Decaf Mechanics</h2>
        </div>
        <div class="flex justify-center items-center">
          <p class="text-white text-2xl text-center font-helvetica opacity-70 w-[65%]">Decaf Mechanics was a band that I was involved in. I played bass and provided backing vocals/rap. This was also the first time I did some website design during my boot camp course with QA. A month later, unfortunately, the band broke up due to a fallout, leaving it unfinished.</p>
        </div>
      </header>

      <main class="mx-10">
        <h2 class="text-pf-red-300 text-3xl underline font-helvetica font-bold mt-20">Website</h2>
        <div>
          <div class="bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30 flex">
            <div class="m-2 mr-5 flex-shrink-0">
              <img class="rounded"
                src="@/components/Software/Projects/Files/Images/2023/DecafMechanics.png"
                alt="decafMechanics"
                style="width: 500px; object-fit: cover;">
            </div>
            <div class="flex flex-col">
              <div>
                <p class="text-white text-lg font-helvetica mt-2"
                  >Since I was just testing everything, I didn't really think much about colour schemes for the site aside from following the bands logo colours.  I also drafted a rough idea to describe the band, which I sent over to the group to provide them with a demo. The purpose of this site was for us to use when looking for places to play. It was intended to showcase merchandise we had with 
                  <a href="https://www.mindstormproductions.co.uk/" target="_blank" class="text-orange-500 font-arial hover:text-orange-300 hover:underline"
                  >Mindstorm Productions
                  </a>, videos of our performances, an 'about us' section, and links to our social media pages — something good enough for the band to promote and share.<br><br>Due to the band's fallout, the group split, and I decided to put this project to rest.
                </p>
              </div>
              <p class="text-white font-helvetica opacity-70 mt-2">28/01/2023 - 22/02/2023</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </body>
  

  <!-- Phone View -->
  <body v-else>
    <div>
      <header>
        <div class="flex justify-center my-2">
          <h2 class="text-pf-red-400 text-6xl text-center font-verdana font-bold">Decaf Mechanics</h2>
        </div>
        <div class="flex justify-center items-center">        
          <p class="text-white text-2xl text-center font-helvetica opacity-70 m-4"
          >Decaf Mechanics was a band that I was involved in. I played bass and provided backing vocals/rap. This was also the first time I did some website design during my boot camp course with QA. A month later, unfortunately, the band broke up due to a fallout, leaving it unfinished.
          </p>
        </div>
      </header>

      <main class="mx-4">
        <h2 class="text-pf-red-300 text-3xl underline font-verdana font-bold mt-10">Website</h2>
        <div class="flex flex-col items-center bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded-xl hover:bg-opacity-30">
          <div class="m-2 mr-5 flex-shrink-0">
            <img class="rounded"
                src="@/components/Software/Projects/Files/Images/2023/DecafMechanics.png"
                alt="decafMechanics"
                style="width: 500px; object-fit: cover;">
          </div>
          <div>
            <div>
              <div>
                <p class="text-white text-lg font-helvetica mt-2"
                  >Since I was just testing everything, I didn't really think much about colour schemes for the site aside from following the bands logo colours.  I also drafted a rough idea to describe the band, which I sent over to the group to provide them with a demo. The purpose of this site was for us to use when looking for places to play. It was intended to showcase merchandise we had with 
                  <a href="https://www.mindstormproductions.co.uk/" target="_blank" class="text-orange-500 font-arial hover:text-orange-300 hover:underline"
                  >Mindstorm Productions
                  </a>, videos of our performances, an 'about us' section, and links to our social media pages — something good enough for the band to promote and share.<br><br>Due to the band's fallout, the group split, and I decided to put this project to rest.
                </p>
              </div>
              <p class="text-white font-helvetica opacity-70 mt-2">28/01/2023 - 22/02/2023</p>
            </div>
            <div>
              <h1 class="text-white text-lg font-helvetica mt-4 mx-2"></h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  </body>
</template>