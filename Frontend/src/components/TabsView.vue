<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import tabsDataList from "@/components/Data/Tabs/Tabs";
import categoryDataList from "@/components/Data/Categories/Categories";

interface Category {
  id: string;
  title: string;
  description: string;
  url?: string;
  startDate: string;
  endDate?: string | null;
  tabs: string;
  image?: string;
}

interface TabsData {
  id: string;
  title: string;
  subtitle: string;
  url: string;
}

const route = useRoute();
const selectedTab = ref<string>(route.path.split("/")[1]);
const categoriesData = ref<Category[]>(categoryDataList);
const tabsData = ref<TabsData | null>(null);
const years = ref<number[]>([]);
const currentYear = ref<number | null>(null);

const fetchCategoriesData = () => {
  categoriesData.value = categoryDataList.filter((category) => category.tabs === selectedTab.value);

  years.value = [...new Set(categoriesData.value.map(cat => new Date(cat.startDate).getFullYear()))]
    .sort((a, b) => b - a);
};

const filteredCategories = computed(() =>
  categoriesData.value.filter((category) => {
    const categoryYear = new Date(category.startDate).getFullYear();
    return category.tabs === selectedTab.value && (currentYear.value ? categoryYear === currentYear.value : true);
  })
);

const sortedGroupedCategories = computed(() => {
  const grouped: Record<number, Category[]> = {};

  filteredCategories.value.forEach(category => {
    const categoryYear = new Date(category.startDate).getFullYear();

    if (!grouped[categoryYear]) {
      grouped[categoryYear] = [];
    }

    grouped[categoryYear].push(category);
  });

  const sortedYears = Object.keys(grouped)
    .map(year => Number(year))
    .sort((a, b) => b - a);

  return sortedYears.map(year => ({
    year,
    categories: grouped[year].sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return dateB.getTime() - dateA.getTime();
    }),
  }));
});

const fetchTabsData = () => {
  const tab = tabsDataList.find((tab) => tab.url === selectedTab.value);
  if (tab) {
    tabsData.value = tab;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollToYear = (year: number) => {
  currentYear.value = year;
  const yearElement = document.getElementById(`year-${year}`);
  if (yearElement) {
    const offset = -25;
    window.scrollTo({
      top: yearElement.offsetTop + offset,
      behavior: "smooth",
    });
  }
};

watch(
  () => route.path,
  (newPath) => {
    selectedTab.value = newPath.split("/")[1];
    fetchCategoriesData();
    fetchTabsData();
  }
);

onMounted(() => {
  fetchCategoriesData();
  fetchTabsData();
});
</script>

<template>

  <body class="md:flex">
    <aside
      class="hidden md:block sticky top-0 h-screen px-6 py-4 bg-cz-background-700 border-r border-cz-background-900 text-white"
      style="width: 160px; max-width: 160; overflow: hidden;">
      <ul class="space-y-1 h-full flex flex-col items-center">
        <li><button @click="scrollToTop" class="font-bold text-xl my-2 text-center hover:text-cz-red-100">Top</button>
        </li>
        <li v-for="year in years" :key="year">
          <button @click="scrollToYear(year)" class="font-bold text-xl my-2 text-center hover:text-cz-red-100">{{ year
            }}</button>
        </li>
      </ul>
    </aside>

    <div class="md:w-5/6 p-4">
      <header v-if="tabsData" class="md:mx-40 text-center">
        <h1 class="text-white text-3xl md:text-5xl">{{ tabsData.title }}</h1>
        <p class="text-gray-300 md:text-lg">{{ tabsData.subtitle }}</p>
      </header>

      <main class="md:px-20">
        <div v-if="sortedGroupedCategories.length > 0">
          <div v-for="entry in sortedGroupedCategories" :key="'year-' + entry.year" :id="'year-' + entry.year"
            class="pt-4">
            <h2 class="text-2xl font-bold text-cz-red-50 my-8 mb-2">{{ entry.year }}</h2>
            <ul class="space-y-4">
              <li v-for="category in entry.categories" :key="'category-' + category.id"
                class="md:flex border border-cz-red-950 rounded-lg p-4 bg-cz-background-700">
                <div v-if="category.image" class="md:w-1/4 aspect-ratio-box">
                  <img :src="category.image" alt="Category Image" class="category-image rounded-lg" />
                </div>
                <div v-else
                  class="md:w-1/4 h-24 md:h-24 bg-cz-red-950 bg-opacity-50 md:flex md:items-center md:justify-center text-gray-400">
                  Image
                </div>

                <div class="mt-4 md:mt-0 md:ml-4 md:w-3/4">
                  <h3 class="md:text-2xl text-white">{{ category.title }}</h3>
                  <p class="text-cz-red-700 text-sm md:text-base text-opacity-50">
                    {{ category.startDate }} <span v-if="category.endDate">- {{ category.endDate }}</span>
                  </p>
                  <p class="text-gray-300">{{ category.description }}</p>
                  <router-link v-if="category.url" :to="`/${tabsData?.url}/${category.url}`"
                    class="text-cz-red-400 hover:text-cz-red-200 md:mt-2 md:block">
                    Find out more
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  </body>
</template>
