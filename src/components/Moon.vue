<template>
  <div class="bg-black">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
      <div class="sm:text-center flex justify-end">
        <Tabs
          :tab="oneTab"
          @open="openTab"
          :idTabOpen="tabOpen"
          v-for="(oneTab, index) in tabsData"
          :key="index"
        />
      </div>
      <Card-Moon :tab-open="tabOpen">
        <div v-if="tabOpen === 1">HAIRS</div>
        <div v-if="tabOpen === 2">PLANTS</div>
      </Card-Moon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Tabs from './Tabs.vue'
import CardMoon from './CardMoon.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useMoonPhaseStore } from '../store/index.js'

const moonStore = useMoonPhaseStore()
const tabOpen = ref(1)
const tabsData = [
  { id: 1, title: 'Hair and body hair' },
  { id: 2, title: 'Plants' }
]

function openTab(event: number) {
  tabOpen.value = event
}

const params = ref({
  method: 'GET',
  url: 'https://moon-phase.p.rapidapi.com/advanced',
  params: {
    lat: 51.4768,
    lon: -0.0004
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_MOON_API_KEY,
    'X-RapidAPI-Host': 'moon-phase.p.rapidapi.com'
  }
})

async function getMoonData() {
  try {
    const response = await axios.request(params.value)
    moonStore.setCurrentMoonState(response.data)
  } catch (error) {
    console.error('error', error)
  }
}


// MOON API DOES NOT WORK PROPERLY WITH COORDINATES

// function success(position: any) {
//   params.value.params.lat = Number(position.coords.latitude)
//   params.value.params.lon = Number(position.coords.longitude)
//   getMoonData()
// }

// function error() {
//   getMoonData()
// }

// const options = {
//   enableHighAccuracy: true,
//   maximumAge: 30000,
//   timeout: 27000,
// };

onMounted(() => {
  // navigator.geolocation.getCurrentPosition(success, error, options)
  getMoonData();
})
</script>
