<script setup>
import { RouterLink, RouterView } from "vue-router";

import Toggle from "../src/components/Toggle.vue";
</script>

<template>
  <header
    class="absolute bg-basic900/25 w-[8vw] right-0 h-screen z-50 grid justify-items-stretch py-8 font-displayRegular"
  >
    <Toggle class="self-start justify-self-center"></Toggle>
    <nav class="self-end justify-self-center text-basic200 align-text-bottom">
      <!-- <RouterLink class="link" to="/">Home</RouterLink> -->
      <RouterLink class="link" to="/about">Om stykket</RouterLink>
      <a class="link" href="//">Køb billet</a>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.link {
  writing-mode: vertical-rl;
  font-size: 1rem;

  margin-bottom: 1rem; /* Adjust the spacing between links */
  display: block;
}
.link:hover {
  text-decoration: underline;
}

/* nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
} */
</style>
