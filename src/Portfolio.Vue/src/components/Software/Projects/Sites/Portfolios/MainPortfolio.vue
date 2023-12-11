<script setup lang="ts">
import { onMounted } from 'vue';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollToSite = () => {
  const siteSection = document.getElementById('site');
  if (siteSection) {
    siteSection.scrollIntoView({
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
          <button @click="scrollToSite"
            class="text-white text-3xl font-arial m-5 mb-10 py-1 w-36 rounded-lg border-y border-t-pf-red-950 border-b-black hover:border-r-4 hover:border-r-pf-red-950 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >2023</button>
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
          <h2 class="text-pf-red-400 text-6xl font-arial font-bold">Main Portfolio</h2>
        </div>
        <div class="flex justify-center items-center">        
          <p class="text-white text-2xl text-center font-arial opacity-70 w-[65%]"
          >This is about the portfolio site, the one that you are currently on. The goal is to keep this one up-to-date. Here you can see the progressive history that I have had when making this portfolio. This resumes from the <RouterLink to="/projects/old_portfolio" class="text-pf-red-500 text-2xl text-center font-arial opacity-70 w-[65%] hover:text-pf-red-300 hover:underline">Old Portfolio</RouterLink> site.
          </p>
        </div>
      </header>

      <main class="my-2 mx-10">
        <h2 id="site" class="text-pf-red-300 text-3xl underline font-arial font-bold mt-20">Current Portfolio</h2>
        <div>
          <h1 class="text-white text-xl font-arial mt-2">When developing this site I had an entire different idea. Originally I was going to make a login page to keep the site private and controlled to who can see what. The reason for this is because I have a wide skill range, from media with performing arts and music, to automotive with vehicle repairing/painting and software. After realising I over estimated my skill with SQL and ASP.NET, I decided it was best for me to make a simpler version and a site dedicated to the career I want over general skills for my hobbies.</h1>
          <div class="bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30 flex">
            <div class="m-2 mr-5 flex-shrink-0">
              <img class="rounded"
                src="@/components/Software/Projects/Files/Images/Portfolio/HomePage.png"
                alt="homePage"
                style="width: 500px; object-fit: cover;">
            </div>
            <div class="flex flex-col">
              <div>
                <p class="text-white text-lg font-arial mt-2"
                >This was the original home page idea... well sort of. The image on the home page would, of course, not be that. But I needed something to be a temporary placement for the time being. The same goes with the text on the page. I needed to give myself a general idea on what I needed, where I needed everything. This does follow the previous concept I had in the old version (version two).
                </p>
                <p class="text-white text-lg font-arial mt-2"
                >The home page was going to be where users would log into the page. Before I removed the login option, I changed the login to have it's own page to make it less complicated and confusing... again that was before I scrapped the idea. the goal of the accounts would link to different hidden options. Although I still plan to do that task in the future, for now I can always fine another alternative method. For now I'm making this site work for the career I am wanting to get into which is software development.
                </p>
                <p class="text-white text-lg font-arial mt-2"
                >I also took on the challenge to make the "idea" verions of my site in Photoshop. Usually I would use a program called Paint.NET but found that Photoshop was a more effective for such task.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </body>
</template>