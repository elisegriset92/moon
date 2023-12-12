<template>
  <div class="bg-black">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="sm:text-center flex justify-end">
        <Tabs
          :tab="oneTab"
          @open="openTab"
          :idTabOpen="tabOpen"
          v-for="(oneTab, index) in tabsData"
          :key="index"
        />
      </div>
      <Card-Moon>
        <div v-if="tabOpen === 1">HAIRS</div>
        <div v-if="tabOpen === 2">PLANTS</div>
      </Card-Moon>
      <div class="py-10">
        <Calendar  v-if="getCurrentMoonCalendar"/>
        <CalendarLoader v-else/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Tabs from './Tabs.vue'
import CardMoon from './CardMoon.vue'
import Calendar from './Calendar.vue'
import { onMounted, ref } from 'vue'
import CalendarLoader from './CalendarLoader.vue'
import axios from 'axios'
import { useMoonPhaseStore } from '../store/index.js'
import { storeToRefs } from 'pinia'

const moonStore = useMoonPhaseStore()
const { getCurrentMoonCalendar} = storeToRefs(moonStore)

const tabOpen = ref(1)
const tabsData = [
  { id: 1, title: 'Hair and body hair' },
  // { id: 2, title: 'Plants' }
]

function openTab(event: number) {
  tabOpen.value = event
}

const params = ref({
  method: 'GET',
  url: 'https://moon-phase.p.rapidapi.com/advanced',
  params: {
    lat: '51.4768',
    lon: '-0.0004'
  },
  headers: {
    'X-RapidAPI-Key': '0f3a6b1b5emshb8a94257591e76ep13f706jsn6de3625a8583',
    'X-RapidAPI-Host': 'moon-phase.p.rapidapi.com',
  }
})

async function getMoonData() {
  try {
    const response = await axios.request(params.value)
    moonStore.setCurrentMoonState(response.data)
    moonStore.setCurrentMoonCalendar(response.data.moon_phases)
  } catch (error) {
    console.error('error', error)
  }
}

function success(position: any) {
  params.value.params.lat = position.coords.latitude
  params.value.params.lon = position.coords.longitude
  getMoonData()
}

function error() {
  getMoonData()
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

onMounted(() => {
  navigator.geolocation.getCurrentPosition(success, error, options)
})
</script>
