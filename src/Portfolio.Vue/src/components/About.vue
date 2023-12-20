<script setup lang="ts">

</script>


<template>
  <body>
    <div class="flex justify-between items-center m-20">
      <div>
        <div class="bg-black rounded-3xl max-w-4xl py-4 px-6">
          <h2 class="text-white text-6xl font-verdana font-bold">Hello, my name is Callum Carter-Begbie. This is my portfolio!</h2>
          <br>
          <p class="text-pf-red-400 text-3xl font-helvetica">
          I am someone who is dedicated to achieving thair best at all times. There are many projects I like to get my hands involved in ranging from music, computer projects, cars or even real world projects like 3D printing and room lighting.
          <br><br>
          When working in the automotive industy (paint in particular). I found myself getting involved in something technological with software or any other computing related stuff - hence pushing for a software career
          </p>
        </div>
        <div class="flex mt-5">
          <RouterLink to="/contact_me" class="text-3xl text-pf-red-300 font-verdana font-bold bg-pf-red-950 rounded-3xl mr-3 py-4 px-2 hover:bg-pf-red-900"
        >Contact Me</RouterLink>
          <a href="https://www.instagram.com/caza390/" target="_blank">
            <img src="./icons/Instagram.png" alt="instagram" class="h-16 mx-3">
          </a>
          <a href="https://www.linkedin.com/in/callum-carter-begbie-7854bb183/" target="_blank">
            <img src="./icons/LinkedIn.png" alt="linkedIn" class="h-16 mx-3">
          </a>
          <a href="https://twitter.com/caza390" target="_blank">
            <img src="./icons/Twitter.png" alt="twitter" class="h-16 mx-3">
          </a>
          <a href="https://github.com/Caza390" target="_blank">
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