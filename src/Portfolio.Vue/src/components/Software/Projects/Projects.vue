<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { undertaking, twenty_three } from "@/components/Software/Projects/Files/ProjectsFiles"

const sortedTwentyThree = computed(() => {
  return [...twenty_three].sort((a, b) => b.endDate.getTime() - a.endDate.getTime());
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollToSkillStats = () => {
  const skillStatsSection = document.getElementById('skill-stat');
  if (skillStatsSection) {
    skillStatsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const scrollToUndertaking = () => {
  const undertakingSection = document.getElementById('undertaking');
  if (undertakingSection) {
    undertakingSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const scrollToYear = (year: number) => {
  const yearElement = document.getElementById(`year-${year}`);
  if (yearElement) {
    const offset = -100;
    window.scrollTo({
      top: yearElement.offsetTop - offset,
      behavior: "smooth",
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
          <button @click="scrollToSkillStats"
          class="text-white text-3xl font-arial m-5 py-1 w-36 rounded-lg border-y border-pf-red-950 hover:border-r-4 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >Skill Stats</button>
        </li>
        <li>
          <button @click="scrollToUndertaking"
          class="text-white text-2xl font-arial m-5 py-1 w-36 rounded-lg border-y border-pf-red-950 hover:border-r-4 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >Undertaking</button>
        </li>
        <li>
          <button @click="() => scrollToYear(2023)"
            class="text-white text-3xl font-arial m-5 mb-10 py-1 w-36 rounded-lg border-y border-t-pf-red-950 border-b-black hover:border-r-4 hover:border-r-pf-red-950 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >2023</button>
        </li>
        <li>
          <RouterLink to="/contact_me" class="text-2xl text-pf-red-300 font-arial font-bold bg-pf-red-950 rounded-xl py-2 px-2 hover:bg-pf-red-900"
          >Contact Me</RouterLink>
        </li>
      </ul>
    </aside>

    <div>
      <header>
        <div class="flex justify-center my-2">
          <h2 class="text-pf-red-400 text-6xl font-arial font-bold">Projects</h2>
        </div>
        <div class="flex justify-center items-center">        
          <p class="text-white text-2xl text-center font-arial opacity-70 w-[65%]"
          >Step into my Projects Page! Here, I've gathered a collection of my work that defies easy categorization. From crafting websites to applications, this is the creative mishmash of my journey.
          </p>
        </div>
      </header>

      <main class="mx-10">
        <h2 id="skill-stat" class="text-pf-red-300 text-3xl underline font-arial font-bold mt-20">Skill Stats</h2>
        <div class="grid grid-cols-2">
          <div>
            <p class="text-white text-xl font-arial">Here you can see a chart that displays my skills in coding. From my current experience in the coding world, these are what I have dabbled with. The chart is labelled as Low, Low-Mid, Medium, Mid-High, and High.</p>
            <div>
              <div class="flex">
                <p class="text-pf-red-500 text-lg font-arial font-bold opacity-70 mx-2">Low:</p>
                <p class="text-white text-lg font-arial opacity-70">Little to no skill to feel confident.</p>
              </div>
              <div class="flex">
                <p class="text-pf-red-500 text-lg font-arial font-bold opacity-70 mx-2">Low-Mid:</p>
                <p class="text-white text-lg font-arial opacity-70">Have somewhat of an understanding but still needs heavy work.</p>
              </div>
              <div class="flex">
                <p class="text-pf-red-500 text-lg font-arial font-bold opacity-70 mx-2">Medium:</p>
                <p class="text-white text-lg font-arial opacity-70">Have enough confidence to use but reliant on research.</p>
              </div>
              <div class="flex">
                <p class="text-pf-red-500 text-lg font-arial font-bold opacity-70 mx-2">Mid-High:</p>
                <p class="text-white text-lg font-arial opacity-70">Can easily get to work with, little to no support at all.</p>
              </div>
              <div class="flex">
                <p class="text-pf-red-500 text-lg font-arial font-bold opacity-70 mx-2">High:</p>
                <p class="text-white text-lg font-arial opacity-70">Extremely confident, doesn't need any support and can easily navigate everything.</p>
              </div>
            </div>
            <p class="text-white text-xl font-arial">I wanted to give myself a realistic expectation with plenty of room for improvements. I also believe that there is always room to learn something new.</p>
          </div>
          <img src="./Files/Images/Chart.png" alt="chart" style="width: 600px; object-fit: cover;" class="mx-auto">
        </div>

        <h2 id="undertaking" class="text-pf-red-300 text-3xl underline font-arial font-bold mt-10">Undertaking</h2>
        <div v-for="Undertaking in undertaking" :key="Undertaking.id.value" :id="'year-' + Undertaking.startDate.getFullYear()">
          <div class="bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30 flex">
            <div class="m-2 mr-5 flex-shrink-0">
              <img class="rounded"
                :src="Undertaking.image"
                :alt="Undertaking.image"
                style="width: 350px; object-fit: cover;">
            </div>
            <div class="flex flex-col">
              <div>
                <h1 class="text-white text-2xl font-arial font-bold mt-2">{{ Undertaking.title }}</h1>
                <div>
                  <h1 class="text-woodsmoke-300 text-md font-arial">{{ Undertaking.startDate.toLocaleDateString('en-GB') }}</h1>
                </div>
              </div>
              <div class="flex">
                <h1 class="text-white text-lg font-arial mt-4">{{ Undertaking.description }}</h1>
                <RouterLink :to="Undertaking.route" class="text-white text-lg font-arial font-bold mt-4 ml-1 hover:text-pf-red-300 hover:underline">Click Here to find out more.</RouterLink>
              </div>
            </div>
          </div>
        </div>

        <h2 id="year-2023" class="text-pf-red-300 text-3xl underline font-arial font-bold mt-10">2023</h2>
        <div v-for="twentyThree in sortedTwentyThree" :key="twentyThree.id.value" :id="'year-' + twentyThree.endDate.getFullYear()">
          <div class="bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30 flex">
            <div class="m-2 mr-5 flex-shrink-0">
              <img class="rounded"
                :src="twentyThree.image"
                :alt="twentyThree.image"
                style="width: 350px; object-fit: cover;">
            </div>
            <div class="flex flex-col">
              <div>
                <h1 class="text-white text-2xl font-arial font-bold mt-2">{{ twentyThree.title }}</h1>
                <div>
                  <h1 class="text-woodsmoke-300 text-md font-arial">{{ `${twentyThree.startDate.toLocaleDateString('en-GB')} - ${twentyThree.endDate.toLocaleDateString('en-GB')}` }}</h1>
                </div>
              </div>
              <div class="flex">
                <h1 class="text-white text-lg font-arial mt-4">{{ twentyThree.description }}</h1>
                <RouterLink :to="twentyThree.route" class="text-white text-lg font-arial font-bold mt-4 ml-1 hover:text-pf-red-300 hover:underline">Click Here to find out more.</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </body>
</template>