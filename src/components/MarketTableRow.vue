<template>
  <tr>
    <td class="left-aligned" colspan="2">
      <div>
        <div>{{ id }}</div>
        <p>{{ symbol }}</p>
      </div>
    </td>
    <td class="right-aligned">${{ priceUsd }}</td>
    <td class="right-aligned">{{ changePercent24Hr }}%</td>
  </tr>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

// const assets = ref<
//   Array<{ id: string; symbol: string; changePercent24Hr: string; priceUsd: string }>
// >([])

const id = ref('')
const symbol = ref('')
const priceUsd = ref('')
const changePercent24Hr = ref('')

const trimString = (str: string): string => {
  return parseFloat(str).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

const props = defineProps({
  asset: Object
})

watchEffect(() => {
  id.value = props.asset.id
  symbol.value = props.asset.symbol
  priceUsd.value = trimString(props.asset.priceUsd)
  changePercent24Hr.value = trimString(props.asset.changePercent24Hr)
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

p {
  font-size: 0.8em;
  opacity: 0.6;
}
</style>
