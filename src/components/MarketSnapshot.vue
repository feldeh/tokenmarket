<template>
  <div>test</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const global = ref({})

// const getData = async () => {
//   try {
//     const res = await fetch('https://api.coincap.io/v2/assets', {
//       headers: {}
//     })
//     const data = await res.json()

//     global.value = data.data
//   } catch {
//     throw new Error('something went wrong in getData')
//   }
// }

// onMounted(() => getData())
</script>

<style scoped></style>
