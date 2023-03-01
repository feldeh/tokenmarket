<script setup lang="ts"></script>

<template>
  <div class="table">
    <table>
      <col width="100" />
      <col width="100" />
      <col width="100" />
      <thead>
        <tr>
          <th colspan="2">Name</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  background-color: black;
  margin-top: 2rem;
}

th {
  padding: 1rem;
  color: var(--vt-c-text-dark-2);
}
</style>
