<script setup lang="ts"></script>

<template>
  <nav>
    <RouterLink to="/">Coins</RouterLink>
    <RouterLink to="/exchanges">Exchanges</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  padding: 1rem;
  background-color: black;
}

/* nav a.router-link-exact-active {
  color: var(--color-text);
} */

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  color: var(--color-text);
}
</style>
