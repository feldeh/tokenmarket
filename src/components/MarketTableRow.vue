<template>
  <tr>
    <td class="left-aligned">{{ rank }}</td>

    <td class="left-aligned" colspan="2">
      <div class="">
        <img :src="iconUrl" alt="" />
        <div class="coin">
          <p class="name">{{ name }}</p>
          <p class="symbol">{{ symbol }}</p>
        </div>
      </div>
    </td>
    <td class="right-aligned">${{ priceUsd }}</td>
    <td class="right-aligned">${{ marketCapUsd }}</td>
    <td class="right-aligned">${{ volumeUsd24Hr }}</td>
    <td class="right-aligned">{{ changePercent24Hr }}%</td>
  </tr>
</template>

<script setup lang="ts">
import { ref, watchEffect, computed } from 'vue'
import type { Asset } from '../types/interfaces'

const symbol = ref('')
const lowerCaseSymbol = ref('')
const priceUsd = ref('')
const changePercent24Hr = ref('')
const rank = ref('')
const id = ref('')
const name = ref('')
const marketCapUsd = ref('')
const volumeUsd24Hr = ref('')

const trimString = (str: string): string => {
  return parseFloat(str).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

const formatBigNum = (str: string): string => {
  const num = parseFloat(str)

  const range = (num: number) => {
    if (num < 1_000_000) return 0
    if (num < 1_000_000_000) return 1
    if (num < 1_000_000_000_000) return 2
    return 3
  }

  const divisors = [1_000, 1_000_000, 1_000_000_000, 1_000_000_000_000]
  const suffixes = ['k', 'm', 'b', 't']

  const index = range(num)
  const result = (num / divisors[index]).toFixed(2) + suffixes[index]

  return result
}

const props = defineProps<{
  asset: Asset
}>()

watchEffect(() => {
  rank.value = props.asset.rank
  id.value = props.asset.id
  name.value = props.asset.name
  symbol.value = props.asset.symbol
  lowerCaseSymbol.value = symbol.value.toLowerCase()
  priceUsd.value = trimString(props.asset.priceUsd)
  marketCapUsd.value = formatBigNum(props.asset.marketCapUsd)
  volumeUsd24Hr.value = formatBigNum(props.asset.volumeUsd24Hr)
  changePercent24Hr.value = trimString(props.asset.changePercent24Hr)
})

const iconUrl = computed(
  () => `https://assets.coincap.io/assets/icons/${lowerCaseSymbol.value}@2x.png`
)
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

.coin {
  display: inline-block;
}

img {
  display: inline-block;
  height: 30px;
  width: 30px;
  margin-right: 0.5em;
}
</style>
