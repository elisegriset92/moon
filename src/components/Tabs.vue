<template>

  <h2
    :class="[
      'text-3xl font-bold text-white sm:text-4xl ml-10 cursor-pointer hover:underline decoration-indigo-600 z-50',
      { 'underline decoration-indigo-600': idTabOpen === tab.id },
      
    ]"
    @click="$emit('open', tab.id)"
  >
    {{ tab.title }}
  </h2>
</template>

<script lang="ts" setup>

defineProps({
  tab: {
    type: Object,
    default: () => {},
    required: true
  },
  idTabOpen: {
    type: Number,
    default: 1,
    required: true
  }
})

 defineEmits(['open'])



</script>
