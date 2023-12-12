<template>
  <div
    class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none text-white"
    v-if="getCurrentMoonState?.moon"
  >
    <div class="p-8 sm:p-10 lg:flex-auto">
      <h3 class="text-2xl font-bold tracking-tight text-gray-600">
        <slot></slot>
      </h3>
      <p class="mt-6 text-base leading-7 text-gray-600">
        Today : {{ getCurrentMoonState?.datestamp }}
      </p>
      <p class="mt-6 text-base leading-7 text-gray-600">
        Zodiac : {{ getCurrentMoonAstro }}
      </p>
      <p class="mt-6 text-base leading-7 text-gray-600">
        Keep in mind that the zodiacal phase might not say the same as the monthly moon phases. You are the one to decide which is more important
      </p>
      <div class="mt-10 flex items-center gap-x-4">
        <h4 class="flex-none text-sm font-semibold leading-6 text-indigo-600">
          Do's and Don'ts in {{ getCurrentMoonState?.moon.phase_name }}
        </h4>
        <div class="h-px flex-auto bg-gray-100"></div>
      </div>
      <ul
        role="list"
        class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
      >
        <li
          class="flex gap-x-3"
          v-for="(hairDo, index) in getHairDos"
          :key="index"
        >
          <svg
            class="h-6 w-5 flex-none text-indigo-600"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clip-rule="evenodd"
            />
          </svg>
          {{ hairDo }}
        </li>

        <li
          class="flex gap-x-3"
          v-for="(hairDont, index) in getHairDonts"
          :key="index"
        >
          <svg
            class="h-6 w-5 flex-none text-indigo-600"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              fill="currentColor"
            ></path>
          </svg>
          {{ hairDont }}
        </li>
      </ul>
    </div>
    <div class="p-8 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
      <div
        class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-600/5 lg:flex lg:flex-col lg:justify-center lg:py-16 mt-10"
      >
        <div class="mx-auto max-w-xs px-8">
          <p class="text-base font-semibold text-gray-600">
            The moon today : {{ getCurrentMoonState?.moon.phase_name }}
          </p>
          <p class="mt-6 flex items-baseline justify-center gap-x-2">
            <span class="text-5xl font-bold tracking-tight text-gray-600">{{
              getCurrentMoonState?.moon.emoji
            }}</span>
          </p>
          <p class="mt-6 text-xs leading-5 text-gray-600">
            Moon rise : {{ getCurrentMoonState?.moon.moonrise }}
          </p>
          <p class="mt-6 text-xs leading-5 text-gray-600">
            Moon set : {{ getCurrentMoonState?.moon.moonset }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <CardMoonLoader v-else></CardMoonLoader>
</template>

<script lang="ts" setup>
import CardMoonLoader from './CardMoonLoader.vue'
import { useMoonPhaseStore } from '../store/index.js'
import { storeToRefs } from 'pinia'

const moonStore = useMoonPhaseStore()
const { getCurrentMoonState, getCurrentMoonAstro, getHairDos, getHairDonts } =
  storeToRefs(moonStore)
</script>
