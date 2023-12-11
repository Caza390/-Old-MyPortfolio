<script setup lang="ts">
import { onMounted } from 'vue';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollToVersonOne = () => {
  const skillStatsSection = document.getElementById('versonOne');
  if (skillStatsSection) {
    skillStatsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const scrollToVersonTwo = () => {
  const skillStatsSection = document.getElementById('versonTwo');
  if (skillStatsSection) {
    skillStatsSection.scrollIntoView({
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
  <body class="flex">
    <aside class="min-h-screen bg-black border-t-2 border-pf-red-950 rounded-r-lg">
      <ul class="sticky top-1/2 transform -translate-y-1/2 flex flex-col items-center">
        <li>
          <button @click="scrollToTop"
          class="text-white text-3xl font-arial m-5 py-1 w-36 rounded-lg border-y border-b-pf-red-950 border-t-black hover:border-r-4 hover:border-r-pf-red-950 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >Top</button>
        </li>
        <li>
          <button @click="scrollToVersonOne"
          class="text-white text-3xl font-arial m-5 py-1 w-36 rounded-lg border-y border-pf-red-950 hover:border-r-4 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >Version 1</button>
        </li>
        <li>
          <button @click="scrollToVersonTwo"
            class="text-white text-3xl font-arial m-5 mb-10 py-1 w-36 rounded-lg border-y border-t-pf-red-950 border-b-black hover:border-r-4 hover:border-r-pf-red-950 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >Verson 2</button>
        </li>
        <li>
          <RouterLink to="/projects" class="text-2xl text-pf-red-300 font-arial font-bold bg-pf-red-950 rounded-xl py-2 px-8 hover:bg-pf-red-900"
          >Return</RouterLink>
        </li>
      </ul>
    </aside>

    <div>
      <header>
        <div class="flex justify-center my-2">
          <h2 class="text-pf-red-400 text-6xl font-arial font-bold">Old Portfolio</h2>
        </div>
        <div class="flex justify-center items-center">
          <p class="text-white text-2xl text-center font-arial opacity-70 w-[65%]">Here you can see the previous version of my portfolio and the progrssion that I had made which led me to my newer, better and improved version of my <RouterLink to="/projects/main_portfolio" class="text-pf-red-500 font-arial hover:text-pf-red-300 hover:underline">Current Site.</RouterLink>
          </p>
        </div>
      </header>

      <main class="my-2 mx-10">
        <h2 id="versonOne" class="text-pf-red-300 text-3xl underline font-arial font-bold mt-20">Verson One</h2>
        <div>
          <h1 class="text-white text-xl font-arial"></h1>
          <div class="bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30 flex">
            <div class="m-2 mr-5 flex-shrink-0">
              <img class="rounded"
                src="@/components/Software/Projects/Files/Images/2023/OldPortfolio_v1.png"
                alt="versionOne"
                style="width: 500px; object-fit: cover;">
            </div>
            <div class="flex flex-col">
              <div>
                <p class="text-white text-lg font-arial mt-2"
                >While I was taking the QA Bootcamp course, they mentioned about building a portfolio site. Since my skills and knowledge was more limited here on site development, I wasn't able to design my site as good as I hoped. Looking back at the site, it reminds me sites people would make un the early 2000's. 
                </p>
                <p class="text-white text-lg font-arial mt-2"
                >In this version of the site, I didn't exactly have the knowledge or the know how on site building which explains the poor design choice that I made. Eventually my job picked up with more hours, taking me away from working on this site. This site had many issues to it - firstly I learnt a whole new way on site development, secondly the background colour where the text "HOMEPAGE" wasn't matching right and the text did not match the rest of the tabs at the top. I also had issue with the dropdown menu.
                </p>
              </div>
              <p class="text-white opacity-70 mt-2">11/03/2023 - 21/03/2023</p>
            </div>
          </div>
        </div>

        <h2 id="versonTwo" class="text-pf-red-300 text-3xl underline font-arial font-bold mt-20">Verson Two</h2>
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
                <p class="text-white text-lg font-arial mt-2"
                >When I build this version of my site I learnt about the user interface sites called VueJs and decided to give myself a challenge using this method. You can see where my current version of my portfolio highly takes place. Originally with this page, I was going to make it so when you click on one of the tabs at the top, the options would be at the side. Somewhat like like how this site work. But I also ended up coming into complications which I fixed during my newer version using Router. This version of my site held all my skills from software, music, animation, game development, blender, automotive and many more. I also wanted to try using ASP.NET and SQL but I hit my major roadblock - aka I didn't know what I was doing.
                </p>
              </div>
              <p class="text-white opacity-70 mt-2">19/07/2023 - 27/08/2023</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </body>
</template>