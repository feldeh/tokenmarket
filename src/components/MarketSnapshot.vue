<template>
  <div class="container">
    <div class="global-metric">
      <div>Market Cap</div>
      <div>${{ total_market_cap }}</div>
    </div>
    <div class="global-metric">
      <div>Exchange Vol</div>
      <div>${{ total_volume_24h }}</div>
    </div>
    <div class="global-metric">
      <div>BTC Dom</div>
      <div>{{ btc_dominance }}%</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import type { Global } from '../types/interfaces'

const global = ref<Global | null>(null)
const total_market_cap = ref('')
const total_volume_24h = ref('')
const btc_dominance = ref('')

const formatBigNum = (num: number): string => {
  if (num < 1_000_000_000_000) {
    return (num / 1_000_000_000).toFixed(2) + 'B'
  } else {
    return (num / 1_000_000_000_000).toFixed(2) + 'T'
  }
}

const getData = async () => {
  try {
    const res = await fetch('https://api-proxy-server-production.up.railway.app/api/global-metrics')
    const data = await res.json()

    global.value = data.data
  } catch {
    throw new Error('something went wrong in getData')
  }
}

watchEffect(() => {
  if (global.value) {
    total_market_cap.value = formatBigNum(global.value.quote.USD.total_market_cap)
    total_volume_24h.value = formatBigNum(global.value.quote.USD.total_volume_24h)
    btc_dominance.value = global.value.btc_dominance.toFixed(2)
  }
})

onMounted(() => getData())
</script>

<style scoped>
.container {
  padding: 30px;
  display: flex;
  font-size: 1.2em;
  font-weight: 600;
  line-height: 20px;
  text-transform: uppercase;
  text-align: center;
}

.global-metric {
  margin: auto;
}
</style>
