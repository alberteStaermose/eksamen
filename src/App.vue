<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header
    class="fixed bg-primaryOne900 w-[8vw] right-0 h-screen z-50 grid justify-items-stretch py-8 font-displayLight uppercase"
  >
    <div id="myToggle" class="grid justify-center">
      <div>
        <div
          id="toggle"
          :class="[
            'rounded-full',
            'grid',
            'h-fit',
            'w-fit',
            'justify-items-center',
            'p-1',
            'text-basic200',
            'bg-basic900',
          ]"
        >
          <button
            class="button"
            :class="{ active: currentMode === 'dark-mode' }"
            id="toggle-button-dark"
            @click="setMode('dark-mode')"
          >
            Dark
          </button>
          <button
            class="button"
            :class="{ active: currentMode === '' }"
            id="toggle-button-default"
            @click="setMode('default-mode')"
          >
            Default
          </button>
          <button
            class="button"
            :class="{ active: currentMode === 'light-mode' }"
            id="toggle-button-light"
            @click="setMode('light-mode')"
          >
            Light
          </button>
        </div>
      </div>
    </div>

    <nav
      id="navLinks"
      class="self-end justify-self-center text-basic200 align-text-bottom"
    >
      <RouterLink id="navLink" class="link" to="/about">Om stykket</RouterLink>
      <a id="navLink" class="link" href="#">Køb billet</a>
    </nav>
  </header>
  <RouterView />

  <main>
    <div
      id="baggrund"
      :class="[
        'h-screen',
        'w-screen',
        'fixed',
        'top-0',
        '-z-50',
        currentMode || 'default-mode',
      ]"
    ></div>
  </main>
</template>

<style scoped></style>

<script>
export default {
  data() {
    return {
      modes: ["dark-mode", "light-mode", "default-mode"],
      currentMode: "", // Initially no mode applied
    };
  },
  methods: {
    setMode(mode) {
      // Update the currentMode to the selected mode
      this.currentMode = mode === "default-mode" ? "" : mode;
      this.updateBodyClass();
    },
    updateBodyClass() {
      // Remove existing mode classes
      document.body.classList.remove(...this.modes);
      // Add the current mode class if it's not default
      if (this.currentMode) {
        document.body.classList.add(this.currentMode);
      }
    },
  },
  mounted() {
    this.setMode("default-mode"); // Set the default mode on load
  },
};
</script>
