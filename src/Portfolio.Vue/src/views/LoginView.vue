<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>

<body>
    <div class="flex justify-center items-center h-screen bg-woodsmoke-950">
        <div class="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 class="block text-3xl text-center font-arial font-bold">Welcome</h1>
            <div class="mt-1">
                <p class="text-woodsmoke-400 text-center">Please use the login details that have been given to you</p>
            </div>
            <hr class="mt-3">
            <div class="mt-3">
                <lable for="username" class="block text-base mb-2">Username</lable>
                <input type="text" id="username" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username...">
            </div>
            <div class="mt-3">
                <lable for="password" class="block text-base mb-2">Password</lable>
                <input type="text" id="password" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password...">
            </div>
            <div class="mt-3 flex justify-between items-center">
                <div>
                    <input type="checkbox">
                    <label>Remember Me?</label>
                </div>
                <div>
                    <RouterLink to="/home" class="border-2 border-caz-red-700 bg-caz-red-50 text-caz-red-700 py-1 px-5 rounded-md hover:bg-caz-red-100 hover:text-caz-red-700 hover:border-caz-red-700">Login</RouterLink>
                </div>
            </div>
        </div>
    </div>
</body>

</template>

<style scoped>

</style>