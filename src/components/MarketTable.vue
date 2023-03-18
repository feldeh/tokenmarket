<template>
  <div class="table">
    <table cellspacing="0" cellpadding="0">
      <col width="10" />
      <col width="200" />
      <col width="100" />
      <thead>
        <tr>
          <th class="left-aligned" colspan="1">Rank</th>
          <th class="left-aligned" colspan="2">Name</th>
          <th class="right-aligned">Price</th>
          <th class="right-aligned">Market Cap</th>
          <th class="right-aligned">Volume</th>
          <th class="right-aligned">Change</th>
        </tr>
      </thead>
      <tbody>
        <MarketTableRow v-for="(asset, index) in assets" :key="index" :asset="asset" />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MarketTableRow from './MarketTableRow.vue'
import type { Asset } from '../types/interfaces'

const assets = ref<Asset[]>([])

const getData = async () => {
  try {
    const res = await fetch('https://api.coincap.io/v2/assets')
    const data = await res.json()

    assets.value = data.data
  } catch {
    throw new Error('something went wrong in getData')
  }
}

onMounted(() => getData())
</script>

<style scoped>
table {
  width: 100%;
  background-color: var(--color-background);
  margin-top: 1rem;
  border-radius: 8px;
  /* border-collapse: collapse; */
}

thead {
  color: var(--vt-c-text-dark-2);
  background-color: black;
  border-radius: 8px;
}

th {
  padding: 1rem;
}

td {
  background-color: var(--color-background);
  padding: 0.5rem 1rem;
}

tbody > tr {
  outline: 1px solid;
}

.left-aligned {
  text-align: left;
}

.right-aligned {
  text-align: right;
}

p {
  font-size: 0.8em;
  opacity: 0.6;
}
</style>
