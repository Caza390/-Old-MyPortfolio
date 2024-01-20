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
  <!-- Desktop View -->
  <body v-if="isDesktop" class="flex">
    <aside class="min-h-screen bg-black border-t-2 border-pf-red-950 rounded-r-lg">
      <ul class="sticky top-1/2 transform -translate-y-1/2 flex flex-col items-center">
        <li>
          <button @click="scrollToTop"
          class="text-white text-3xl font-verdana m-5 py-1 w-36 rounded-lg border-y border-b-pf-red-950 border-t-black hover:border-r-4 hover:border-r-pf-red-950 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >Top</button>
        </li>
        <li>
          <button @click="scrollToSite"
            class="text-white text-2xl font-verdana m-5 mb-10 py-1 w-36 rounded-lg border-y border-t-pf-red-950 border-b-black hover:border-r-4 hover:border-r-pf-red-950 active:bg-pf-red-900 active:bg-opacity-30 active:border active:border-pf-red-950"
          >2023</button>
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
          <h2 class="text-pf-red-400 text-6xl font-verdana font-bold">Main Portfolio</h2>
        </div>
        <div class="flex justify-center items-center">        
          <p class="text-white text-2xl text-center font-helvetica opacity-70 w-[65%]"
          >This is about the portfolio site, the one that you are currently on. The goal is to keep this one up-to-date. Here you can see the progressive history that I have had when making this portfolio. This resumes from the <RouterLink to="/projects/old_portfolio" class="text-pf-red-500 text-2xl text-center font-arial opacity-70 w-[65%] hover:text-pf-red-300 hover:underline">Old Portfolio</RouterLink> site.
          </p>
        </div>
      </header>

      <main class="my-2 mx-10">
        <h2 id="site" class="text-pf-red-300 text-3xl underline font-verdana font-bold mt-20">Current Portfolio</h2>
        <div>
          <h1 class="text-white text-xl font-helvetica mt-2">When developing this site I had an entire different idea. Originally I was going to make a login page to keep the site private and controlled to who can see what. The reason for this is because I have a wide skill range, from media with performing arts and music, to automotive with vehicle repairing/painting and software. After realising I over estimated my skill with SQL and ASP.NET, I decided it was best for me to make a simpler version and a site dedicated to the career I want over general skills for my hobbies.</h1>
          <div class="bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30 flex">
            <div class="m-2 mr-5 flex-shrink-0">
              <img class="rounded"
                src="@/components/Software/Projects/Files/Images/Portfolio/HomePage.png"
                alt="homePage"
                style="width: 500px; object-fit: cover;">
            </div>
            <div class="flex flex-col">
              <div>
                <p class="text-white text-lg font-helvetica mt-2"
                >This was the original home page idea... well sort of. The image on the home page would, of course, not be that. But I needed something to be a temporary placement for the time being. The same goes with the text on the page. I needed to give myself a general idea on what I needed and where I needed everything. This does follow the previous concept I had in the old version (version two).
                </p>
                <p class="text-white text-lg font-helvetica mt-2"
                >The home page was going to be where users would log into the page. Before I removed the login option, infact I changed the login to have it's own page to make it less complicated and confusing... again that was before I scrapped the idea. the goal of the accounts would link to different hidden options. Although I still plan to do that task in the future, for now I can always fine another alternative method and right now, I'm making this site work for the career I am wanting to get into which is software development.
                </p>
                <p class="text-white text-lg font-helvetica mt-2"
                >I also took on the challenge to make the "idea" version of my site in Photoshop. Usually I would use a program called Paint.NET but found that Photoshop was a more effective for such a task.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 id="site" class="text-pf-red-300 text-3xl underline font-verdana font-bold mt-20">Changes</h2>
        <div>
          <h1 class="text-white text-xl font-helvetica mt-2">Here are where all the site changes will be posted - these changes are changes to site layout and updates. I will not be posting projects, models or games since they aren't changes.</h1>
          <div class="bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded hover:bg-opacity-30 flex">
            <div class="m-2 mr-5 flex-shrink-0">
              <img class="rounded"
                src="@/components/Software/Projects/Files/Images/Portfolio/Caz.png"
                alt="homePage"
                style="width: 500px; object-fit: cover;">
            </div>
            <div class="flex flex-col">
              <div>
                <p class="text-white text-lg font-helvetica mt-2"
                >Originally I wrote this site to have every text to be written in Arial font. I personally liked Arial for it's simplistic cartoony look and was the first normal font I came across. But after showing my site to some people, one person mentioned that Arial was not a font to go for. Confused I looked into it and from what I gathered, Airal is disliked among developers but loved by graphic designers. I have also learnt that the font has similarites to Helvetica. The differences aren't too noticable for the common user. But I decided to make the changes. The titles and subtitles of this site will now use Verdana and normal text should be Helvetica... But so far on my end, font where Helvetica should be is still Arial. 
                </p>
              </div>
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
          <h2 class="text-pf-red-400 text-6xl text-center font-verdana font-bold">Main Portfolio</h2>
        </div>
        <div class="flex justify-center items-center">        
          <p class="text-white text-2xl text-center font-helvetica opacity-70 m-4"
          >This is about the portfolio site, the one that you are currently on. The goal is to keep this one up-to-date. Here you can see the progressive history that I have had when making this portfolio. This resumes from the <RouterLink to="/projects/old_portfolio" class="text-pf-red-500 text-2xl text-center font-arial opacity-70 w-[65%] hover:text-pf-red-300 hover:underline">Old Portfolio</RouterLink> site.
          </p>
        </div>
      </header>

      <main class="mx-4">
        <h2 id="site" class="text-pf-red-300 text-3xl underline font-verdana font-bold mt-10">Current Portfolio</h2>
        <h1 class="text-white text-xl font-helvetica mt-2">When developing this site I had an entire different idea. Originally I was going to make a login page to keep the site private and controlled to who can see what. The reason for this is because I have a wide skill range, from media with performing arts and music, to automotive with vehicle repairing/painting and software. After realising I over estimated my skill with SQL and ASP.NET, I decided it was best for me to make a simpler version and a site dedicated to the career I want over general skills for my hobbies.</h1>
        <div class="flex flex-col items-center bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded-xl hover:bg-opacity-30">
          <div class="m-2 mr-5 flex-shrink-0">
            <img class="rounded"
                src="@/components/Software/Projects/Files/Images/Portfolio/HomePage.png"
                alt="homePage"
                style="width: 500px; object-fit: cover;">
          </div>
          <div>
            <div>
              <p class="text-white text-lg font-helvetica mt-2"
              >This was the original home page idea... well sort of. The image on the home page would, of course, not be that. But I needed something to be a temporary placement for the time being. The same goes with the text on the page. I needed to give myself a general idea on what I needed and where I needed everything. This does follow the previous concept I had in the old version (version two).
              </p>
              <p class="text-white text-lg font-helvetica mt-2"
              >The home page was going to be where users would log into the page. Before I removed the login option, infact I changed the login to have it's own page to make it less complicated and confusing... again that was before I scrapped the idea. the goal of the accounts would link to different hidden options. Although I still plan to do that task in the future, for now I can always fine another alternative method and right now, I'm making this site work for the career I am wanting to get into which is software development.
              </p>
              <p class="text-white text-lg font-helvetica mt-2"
              >I also took on the challenge to make the "idea" version of my site in Photoshop. Usually I would use a program called Paint.NET but found that Photoshop was a more effective for such a task.
              </p>
            </div>
            <div>
              <h1 class="text-white text-lg font-helvetica mt-4 mx-2"></h1>
            </div>
          </div>
        </div>

        <h2 id="site" class="text-pf-red-300 text-3xl underline font-verdana font-bold mt-10">Changes</h2>
        <h1 class="text-white text-xl font-helvetica mt-2">Here are where all the site changes will be posted - these changes are changes to site layout and updates. I will not be posting projects, models or games since they aren't changes.</h1>
        <div class="flex flex-col items-center bg-pf-red-950 bg-opacity-10 p-2 my-5 rounded-xl hover:bg-opacity-30">
          <div class="m-2 mr-5 flex-shrink-0">
            <img class="rounded"
                src="@/components/Software/Projects/Files/Images/Portfolio/Caz.png"
                alt="homePage"
                style="width: 500px; object-fit: cover;">
          </div>
          <div>
            <div>
              <p class="text-white text-lg font-helvetica mt-2"
                >Originally I wrote this site to have every text to be written in Arial font. I personally liked Arial for it's simplistic cartoony look and was the first normal font I came across. But after showing my site to some people, one person mentioned that Arial was not a font to go for. Confused I looked into it and from what I gathered, Airal is disliked among developers but loved by graphic designers. I have also learnt that the font has similarites to Helvetica. The differences aren't too noticable for the common user. But I decided to make the changes. The titles and subtitles of this site will now use Verdana and normal text should be Helvetica... But so far on my end, font where Helvetica should be is still Arial. 
                </p>
            </div>
            <div>
              <h1 class="text-white text-lg font-helvetica mt-4 mx-2"></h1>
            </div>
          </div>
        </div>
      </main>
    </div>
    <br>
  </body>
</template>