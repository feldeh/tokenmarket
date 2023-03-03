<template>
  <div class="table">
    <table cellspacing="0" cellpadding="0">
      <col width="100" />
      <col width="100" />
      <col width="100" />
      <thead>
        <tr>
          <th class="left-aligned" colspan="2">Name</th>
          <th class="right-aligned">Price</th>
          <th class="right-aligned">Change</th>
        </tr>
      </thead>
      <tbody>
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
        <tr>
          <td class="left-aligned" colspan="2">Bitcoin</td>
          <td class="right-aligned">$23,160.32</td>
          <td class="right-aligned">-1.63%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// const assets = ref<
//   Array<{ id: string; symbol: string; changePercent24Hr: string; priceUsd: string }>
// >([])

const id = ref('')
const symbol = ref('')
const priceUsd = ref('')
const changePercent24Hr = ref('')

const getData = async () => {
  try {
    const res = await fetch('https://api.coincap.io/v2/assets')
    const data = await res.json()

    // assets.value = data.data

    // console.log(assets.value[0].id)
    // console.log(assets.value[0].symbol)
    // console.log(assets.value[0].changePercent24Hr)
    // console.log(assets.value[0].priceUsd)

    id.value = data.data[0].id
    symbol.value = data.data[0].symbol
    priceUsd.value = data.data[0].priceUsd
    changePercent24Hr.value = data.data[0].changePercent24Hr
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
