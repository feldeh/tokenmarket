<script setup lang="ts"></script>

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
          <td class="left-aligned" colspan="2">Bitcoin</td>
          <td class="right-aligned">$23,160.32</td>
          <td class="right-aligned">-1.63%</td>
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

<style scoped>
table {
  width: 100%;
  background-color: var(--color-background);
  margin-top: 1rem;
  border-radius: 8px;
  border-collapse: collapse;
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
  /* border: solid 1px red; */
  outline: thin solid;
}

.left-aligned {
  text-align: left;
}

.right-aligned {
  text-align: right;
}
</style>
