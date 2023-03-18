<template>
  <tr>
    <td class="left-aligned">{{ rank }}</td>

    <td class="left-aligned" colspan="2">
      <div>
        <p class="name">{{ name }}</p>
        <p class="symbol">{{ symbol }}</p>
      </div>
    </td>
    <td class="right-aligned">${{ priceUsd }}</td>
    <td class="right-aligned">${{ marketCapUsd }}</td>
    <td class="right-aligned">${{ volumeUsd24Hr }}</td>
    <td class="right-aligned">{{ changePercent24Hr }}%</td>
  </tr>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import type { Asset } from '../types/interfaces'

const symbol = ref('')
const priceUsd = ref('')
const changePercent24Hr = ref('')
const rank = ref('')
const name = ref('')
const supply = ref('')
const maxSupply = ref('')
const marketCapUsd = ref('')
const volumeUsd24Hr = ref('')

const trimString = (str: string): string => {
  return parseFloat(str).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

const props = defineProps<{
  asset: Asset
}>()

watchEffect(() => {
  rank.value = props.asset.rank
  name.value = props.asset.name
  symbol.value = props.asset.symbol
  priceUsd.value = trimString(props.asset.priceUsd)
  marketCapUsd.value = trimString(props.asset.marketCapUsd)
  changePercent24Hr.value = trimString(props.asset.changePercent24Hr)
  volumeUsd24Hr.value = trimString(props.asset.volumeUsd24Hr)
})
</script>

<style scoped>
td {
  background-color: var(--color-background);
  padding: 0.5rem 1rem;
}

.left-aligned {
  text-align: left;
}

.right-aligned {
  text-align: right;
}

.symbol {
  font-size: 0.8em;
  opacity: 0.6;
}

.name {
  font-weight: 500;
}
</style>
