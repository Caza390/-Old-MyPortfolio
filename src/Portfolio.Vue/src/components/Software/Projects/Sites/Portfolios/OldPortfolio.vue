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

const scrollToVersionOne = () => {
  const versionOneSection = document.getElementById('versionOne');
  if (versionOneSection) {
    versionOneSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const scrollToVersionTwo = () => {
  const versionTwoSection = document.getElementById('versionTwo');
  if (versionTwoSection) {
    versionTwoSection.scrollIntoView({
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
          <button @click="scrollToVersionOne"
          class="text-white text-2xl font-verdana m-5 py-1 w-36 rounded-lg border-y border-pf-red-950 hover:border-r-4 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >Version 1</button>
        </li>
        <li>
          <button @click="scrollToVersionTwo"
            class="text-white text-2xl font-verdana m-5 mb-10 py-1 w-36 rounded-lg border-y border-t-pf-red-950 border-b-black hover:border-r-4 hover:border-r-pf-red-950 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >Version 2</button>
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
          <h2 class="text-pf-red-400 text-6xl font-verdana font-bold">Old Portfolio</h2>
        </div>
        <div class="flex justify-center items-center">
          <p class="text-white text-2xl text-center font-helvetica opacity-70 w-[65%]">Here you can see the previous version of my portfolio and the progrssion that I had made which led me to my newer, better and improved version of my <RouterLink to="/projects/main_portfolio" class="text-pf-red-500 font-arial hover:text-pf-red-300 hover:underline">Current Site.</RouterLink>
          </p>
        </div>
      </header>

      <main class="my-2 mx-10">
        <h2 id="versionOne" class="text-pf-red-300 text-3xl underline font-verdana font-bold mt-20">Version One</h2>
        <div>
          <div class="bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30 flex">
            <div class="m-2 mr-5 flex-shrink-0">
              <img class="rounded"
                src="@/components/Software/Projects/Files/Images/2023/OldPortfolio_v1.png"
                alt="versionOne"
                style="width: 500px; object-fit: cover;">
            </div>
            <div class="flex flex-col">
              <div>
                <p class="text-white text-lg font-helvetica mt-2"
                >While I was taking the QA Bootcamp course, they mentioned about building a portfolio site. Since my skills and knowledge were more limited here on site development, I wasn't able to design my site as good as I hoped. Looking back at the site, it reminds me sites people would make un the early 2000's. 
                </p>
                <p class="text-white text-lg font-helvetica mt-2"
                >In this version of the site, I didn't exactly have the knowledge or the know how on web development which explains the poor design choice that I made. Eventually my job picked up with more hours, taking me away from working on this site. This site had many issues to it which I later learnt from - firstly I learned a whole new way on site development, secondly the background colour where the text "HOMEPAGE" was not matching right and the text did not match the rest of the tabs at the top. I also had issue with the dropdown menu not fitting correctly.
                </p>
              </div>
              <p class="text-white font-helvetica opacity-70 mt-2">11/03/2023 - 21/03/2023</p>
            </div>
          </div>
        </div>

        <h2 id="versionTwo" class="text-pf-red-300 text-3xl underline font-verdana font-bold mt-20">Version Two</h2>
        <div>
          <div class="bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30 flex">
            <div class="m-2 mr-5 flex-shrink-0">
              <img class="rounded"
                src="@/components/Software/Projects/Files/Images/2023/OldPortfolio_v2.png"
                alt="versionTwo"
                style="width: 500px; object-fit: cover;">
            </div>
            <div class="flex flex-col">
              <div>
                <p class="text-white text-lg font-helvetica mt-2"
                >When I build this version of my site I learnt about the user interface called VueJs and decided to give myself a challenge using this method. You can see where my current version of my portfolio highly takes place. Originally with this page, I was going to make it so when you click on one of the tabs at the top, the options would be at the side. Somewhat like like how this current site works. But I also ended up coming into complications which I fixed using Router. This version of my portfolio was going to hold all my skills from software, music, animation, game development, blender, automotive and many more. I also wanted to try using ASP.NET and SQL but I hit my major roadblock - aka I didn't know what I was doing.
                </p>
              </div>
              <p class="text-white font-helvetica opacity-70 mt-2">19/07/2023 - 27/08/2023</p>
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
          <h2 class="text-pf-red-400 text-6xl text-center font-verdana font-bold">Old Portfolio</h2>
        </div>
        <div class="flex justify-center items-center">        
          <p class="text-white text-2xl text-center font-helvetica opacity-70 m-4"
          >Here you can see the previous version of my portfolio and the progrssion that I had made which led me to my newer, better and improved version of my <RouterLink to="/projects/main_portfolio" class="text-pf-red-500 font-arial hover:text-pf-red-300 hover:underline">Current Site.</RouterLink>
          </p>
        </div>
      </header>

      <main class="mx-4">
        <h2 id="VersionOne" class="text-pf-red-300 text-3xl underline font-verdana font-bold mt-10">Current Portfolio</h2>
        <div class="flex flex-col items-center bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded-xl hover:bg-opacity-30">
          <div class="m-2 mr-5 flex-shrink-0">
            <img class="rounded"
                src="@/components/Software/Projects/Files/Images/2023/OldPortfolio_v1.png"
                alt="versionOne"
                style="width: 500px; object-fit: cover;">
          </div>
          <div>
            <div>
              <p class="text-white text-lg font-helvetica mt-2"
              >While I was taking the QA Bootcamp course, they mentioned about building a portfolio site. Since my skills and knowledge were more limited here on site development, I wasn't able to design my site as good as I hoped. Looking back at the site, it reminds me sites people would make un the early 2000's. 
              </p>
              <p class="text-white text-lg font-helvetica mt-2"
              >In this version of the site, I didn't exactly have the knowledge or the know how on web development which explains the poor design choice that I made. Eventually my job picked up with more hours, taking me away from working on this site. This site had many issues to it which I later learnt from - firstly I learned a whole new way on site development, secondly the background colour where the text "HOMEPAGE" was not matching right and the text did not match the rest of the tabs at the top. I also had issue with the dropdown menu not fitting correctly.
              </p>
            </div>
            <p class="text-white font-helvetica opacity-70 mt-2">11/03/2023 - 21/03/2023</p>
          </div>
        </div>

        <h2 id="VersionTwo" class="text-pf-red-300 text-3xl underline font-verdana font-bold mt-10">Version Two</h2>
        <div class="flex flex-col items-center bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded-xl hover:bg-opacity-30">
          <div class="m-2 mr-5 flex-shrink-0">
            <img class="rounded"
                src="@/components/Software/Projects/Files/Images/2023/OldPortfolio_v2.png"
                alt="versionTwo"
                style="width: 500px; object-fit: cover;">
          </div>
          <div>
            <div>
              <p class="text-white text-lg font-helvetica mt-2"
                >When I build this version of my site I learnt about the user interface called VueJs and decided to give myself a challenge using this method. You can see where my current version of my portfolio highly takes place. Originally with this page, I was going to make it so when you click on one of the tabs at the top, the options would be at the side. Somewhat like like how this current site works. But I also ended up coming into complications which I fixed using Router. This version of my portfolio was going to hold all my skills from software, music, animation, game development, blender, automotive and many more. I also wanted to try using ASP.NET and SQL but I hit my major roadblock - aka I didn't know what I was doing.
                </p>
              </div>
              <p class="text-white font-helvetica opacity-70 mt-2">19/07/2023 - 27/08/2023</p>
          </div>
        </div>
      </main>
    </div>
  </body>
</template>