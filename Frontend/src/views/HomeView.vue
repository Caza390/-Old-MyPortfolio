<script setup lang="ts">
</script>

<template>

  <main class="p-5 md:px-40 md:py-20">
    <div class="lg:grid lg:grid-cols-2 items-center">
      <div class="flex justify-center items-center">
        <img src="@/assets/Me.png" alt="me" class="object-contain rounded-full w-full max-w-[500px] h-auto">
      </div>
      <div>
        <h1 class="text-cz-red-50 text-3xl font-bold">Hi, I'm Callum Carter-Begbie</h1>
        <p class="text-white text-xl my-5">
          I'm passionate about technology, automotive customisation and creative
          problem-solving. I enjoy hands-on projects where I can develop new skills and see the results of my work, from
          vehicle electrical installations and bodywork to software development and 3D modelling.
        </p>
        <p class="text-white text-xl my-5">
          I'm currently working as a trainee auto electrician, gaining practical experience in vehicle electronics,
          lighting and custom installations. I'm particularly interested in exploring more of the automotive
          customisation industry, while continuing to develop my knowledge of technology, software and other creative
          fields.
        </p>

        <div class="flex items-center space-x-5 lg:space-x-10 mt-10">
          <RouterLink to="/contact-me"
            class="text-cz-red-50 text-center text-xl bg-cz-red-950 border-cz-red-900 border rounded-lg px-2 pt-1 lg:px-5 lg:py-3 hover:brightness-110">
            Contact Me
          </RouterLink>

          <div class="flex justify-center items-center space-x-5 lg:space-x-10">
            <a href="https://github.com/Caza390" target="_blank">
              <img src="https://simpleicons.org/icons/github.svg" alt="GitHub"
                class="w-10 h-10 lg:w-[52px] lg:h-[52px]">
            </a>
            <a href="https://www.linkedin.com/in/callum-carter-begbie-7854bb183/" target="_blank">
              <img src="/src/assets/icons/linkedin.svg" alt="LinkedIn" class="w-10 h-10 lg:w-[52px] lg:h-[52px]">
            </a>
            <a href="https://x.com/caza390" target="_blank">
              <img src="https://simpleicons.org/icons/x.svg" alt="X" class="w-10 h-10 lg:w-[52px] lg:h-[52px]">
            </a>
            <a href="https://www.instagram.com/caza390/" target="_blank">
              <img src="https://simpleicons.org/icons/instagram.svg" alt="Instagram"
                class="w-10 h-10 lg:w-[52px] lg:h-[52px]">
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>

</template>
