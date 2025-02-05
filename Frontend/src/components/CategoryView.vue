<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import categoryDataList from "@/components/Data/Categories/Categories";
import subCategoryDataList from "@/components/Data/SubCategories/SubCategories";
import router from '@/router';

interface SubCategory {
  id: string;
  heading: string | null;
  title: string;
  description: string;
  startDate?: string | null;
  endDate?: string | null;
  category: string;
  image?: string;
}

interface CategoryData {
  id: string;
  title: string;
  description: string;
  url: string;
}

const route = useRoute();
const selectedTab = ref<string>(route.path.split("/")[1]);
const selectedCategory = ref<string>(route.path.split("/")[2]);
const subCategoriesData = ref<SubCategory[]>(subCategoryDataList);
const categoryData = ref<CategoryData | null>(null);
const uniqueHeadings = ref<string[]>([]);

const fetchSubCategoriesData = () => {
  subCategoriesData.value = subCategoryDataList.filter(
    (subCategory) => subCategory.category === selectedCategory.value
  );

  uniqueHeadings.value = [
    ...new Set(
      subCategoriesData.value
        .map((subCat) => subCat.heading)
        .filter((heading): heading is string => heading !== null)
    ),
  ].sort((a, b) => a.localeCompare(b));
};


const fetchCategoriesData = () => {
  const cat = categoryDataList.find((cat) => cat.url === selectedCategory.value);
  if (cat) {
    categoryData.value = cat;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollToHeading = (heading: string) => {
  console.log(`Trying to scroll to: heading-${heading}`);
  const headingElement = document.getElementById(`heading-${heading}`);
  if (headingElement) {
    const offset = -25;
    window.scrollTo({
      top: headingElement.offsetTop + offset,
      behavior: "smooth",
    });
  } else {
    console.error(`Element not found: heading-${heading}`);
  }
};

const goBack = () => {
  router.back();
};

onMounted(() => {
  fetchSubCategoriesData();
  fetchCategoriesData();
});

watch(
  () => [route.params.tabs, route.params.category],
  ([newTabs, newCategory]) => {
    selectedTab.value = newTabs ? String(newTabs) : '';
    selectedCategory.value = newCategory ? String(newCategory) : '';
    fetchSubCategoriesData();
    fetchCategoriesData();
  }
);

const groupedSubcategories = computed(() => {
  const groups: { [key: string]: SubCategory[] } = {};
  subCategoriesData.value.forEach((subcategory) => {
    const heading = subcategory.heading || 'Uncategorized';
    if (!groups[heading]) {
      groups[heading] = [];
    }
    groups[heading].push(subcategory);
  });
  return Object.values(groups);
});
</script>


<template>

  <body class="md:flex">
    <aside
      class="hidden md:block sticky top-0 h-screen px-6 py-4 bg-cz-background-700 border-r border-cz-background-900 text-white"
      style="width: 160px; max-width: 160; overflow: hidden;">
      <ul class="space-y-1 h-full flex flex-col items-center">
        <li>
          <button @click="scrollToTop" class="font-bold text-xl my-2 text-center hover:text-cz-red-100">Top</button>
        </li>
        <li v-for="heading in uniqueHeadings" :key="heading">
          <button @click="scrollToHeading(heading)" class="font-bold text-xl my-2 text-center hover:text-cz-red-100">{{
            heading }}</button>
        </li>
        <li>
          <button @click="goBack" class="font-bold text-xl my-2 text-center hover:text-cz-red-100">
            Back
          </button>
        </li>
      </ul>
    </aside>

    <div class="md:w-5/6 p-4">
      <header v-if="categoryData" class="md:mx-40 text-center">
        <h1 class="text-white text-3xl md:text-5xl">{{ categoryData.title }}</h1>
        <p class="text-gray-300 md:mt-3 md:text-lg">{{ categoryData.description }}</p>
      </header>

      <main class="md:px-20">
        <div v-if="subCategoriesData.length > 0">
          <template v-for="(group, index) in groupedSubcategories" :key="index">
            <h2 v-if="group.length > 0" :id="'heading-' + (group[0].heading || 'Unnamed')"
              class="text-2xl font-bold text-cz-red-50 mt-8 mb-2">
              {{ group[0].heading }}
            </h2>

            <ul class="space-y-4">
              <li v-for="subcategory in group" :key="subcategory.id"
                class="md:flex border border-cz-red-950 rounded-lg p-4 bg-cz-background-700">

                <div v-if="subcategory.image" class="md:w-1/4 aspect-ratio-box">
                  <img :src="`/SubCategoryImages/${subcategory.image}`" alt="SubCategory Images"
                    class="subcategory-image rounded-lg" />
                </div>
                <div v-else
                  class="md:w-1/4 h-24 md:h-24 bg-cz-red-950 bg-opacity-50 md:flex md:items-center md:justify-center text-gray-400">
                  Image
                </div>

                <div class="mt-4 md:mt-0 md:ml-4 md:w-3/4">
                  <h3 class="md:text-2xl text-white">{{ subcategory.title }}</h3>
                  <p class="text-cz-red-700 text-sm md:text-base text-opacity-50">
                    <span v-if="subcategory.startDate">{{ subcategory.startDate }}</span>
                    <span v-if="subcategory.endDate"> - {{ subcategory.endDate }}</span>
                  </p>
                  <p class="text-gray-300">{{ subcategory.description }}</p>
                </div>
              </li>
            </ul>
          </template>
        </div>
      </main>
    </div>
  </body>

</template>
