<script setup lang="ts">

</script>


<template>
  <body>
    <div class="flex justify-between items-center m-20">
      <div>
        <div class="bg-black rounded-3xl max-w-4xl py-4 px-6">
          <h2 class="text-white text-6xl font-arial font-bold">Hello! My name is Callum Carter-Begbie, and this is my portfolio</h2>
          <br>
          <p class="text-caz-red-400 text-3xl font-arial">
            I am someone who is dedicated to achieving their best at all times. There are many projects I like to get my hands involved in ranging from Music, Computing, or real world projects like room lighting.
          <br>
          Recently I have taken a passion into the 3D Printing hobby
          </p>
        </div>
        <div class="flex my-5">
          <RouterLink to="/contact_me" class="text-3xl text-caz-red-300 font-arial font-bold bg-caz-red-950 rounded-3xl mr-3 py-4 px-2 hover:bg-caz-red-900"
        >Contact Me</RouterLink>
          <a href="https://www.instagram.com/caza390/">
            <img src="./icons/Instagram.png" alt="instagram" class="h-16 mx-3">
          </a>
          <a href="https://www.linkedin.com/in/callum-carter-begbie-7854bb183/">
            <img src="./icons/LinkedIn.png" alt="linkedIn" class="h-16 mx-3">
          </a>
          <a href="https://twitter.com/caza390">
            <img src="./icons/Twitter.png" alt="twitter" class="h-16 mx-3">
          </a>
          <a href="https://github.com/Caza390">
            <img src="./icons/GitHub.png" alt="gitHub" class="h-16 ml-3">
          </a>
        </div>
      </div>
      <div>
        <img src="../assets/me.jpg" alt="me" class="object-contain rounded-3xl h-[655px]">
      </div>
    </div>
  </body>
</template>