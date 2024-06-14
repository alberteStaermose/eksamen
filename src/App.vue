<script setup>
import { RouterLink, RouterView } from "vue-router";
// import Toggle from "../src/components/Toggle.vue";
</script>

<template id="menu">
  <header
    class="fixed bg-basic100/25 w-[8vw] right-0 h-screen z-50 grid justify-items-stretch py-8 font-displayLight uppercase"
  >
    <!-- <Toggle class="self-start justify-self-center"></Toggle> -->
    <div class="grid justify-center">
      <div>
        <div
          id="toggle"
          :class="[
            'default-mode ',
            'rounded-full',
            'grid',
            'h-fit',
            'w-fit',
            'justify-items-center',
            'p-1',
            'text-basic200',
            currentMode,
          ]"
        >
          <button
            class="buttons"
            id="toggle-button-dark"
            @click="setMode('dark-mode')"
          >
            Dark
          </button>
          <button
            class="buttons active"
            id="toggle-button-default"
            @click="setMode('default-mode')"
          >
            Default
          </button>
          <button
            class="buttons"
            id="toggle-button-light"
            @click="setMode('light-mode')"
          >
            Light
          </button>
        </div>
      </div>
    </div>

    <nav class="self-end justify-self-center text-basic200 align-text-bottom">
      <!-- <RouterLink class="link" to="/">Home</RouterLink> -->
      <RouterLink class="link" to="/about">Om stykket</RouterLink>
      <a class="link" href="//">Køb billet</a>
    </nav>
  </header>
  <RouterView />

  <main>
    <div
      id="baggrund"
      :class="[
        'default-mode',
        'h-screen',
        'w-screen',
        'fixed',
        'top-0',
        '-z-50',
        currentMode,
      ]"
    ></div>
  </main>
</template>

<style scoped>
/* Links i nav */
.link {
  writing-mode: vertical-rl;
  font-size: 1rem;

  margin-bottom: 1rem; /* Adjust the spacing between links */
  display: block;
}
.link:hover {
  text-decoration: underline;
}
/*  */
/*  */
/*  */
/*  */
/*  */

/* Toggle button */

.dark-mode {
  background-color: #18140c !important;
}
.dark-mode .buttons {
  background-color: #0811a8; /* Dark mode background color */
  color: #eae1d1; /* Text color for dark mode */
}
.light-mode {
  background-color: #ffffff !important;
}
.light-mode .buttons {
  background-color: #ec6a70;
  color: #eae1d1; /* Text color for dark mode */
}

button {
  box-shadow: inset 0 0 10px #18140c;
  padding: 1px;
  border-radius: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  margin: 2px;
  cursor: pointer;
}

.buttons.active {
  background: radial-gradient(circle, #ff5400, #b03a00);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
  color: #eae1d1;
  font-weight: 500;
  transition: all 0.5s ease;
}

button:hover {
  color: #eae1d1;
  box-shadow: inset 0 0 50px #ff712b;
  /* background-color: #dc1d26; */
  transition: all 0.5s ease;
}
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/* Baggrund */

.default-mode {
  background: radial-gradient(
    circle,
    #e63e46,
    #ff935e,
    #e63e46,
    #332a18,
    #18140c,
    #18140c,
    #18140c
  );
}

.dark-mode {
  background: radial-gradient(
    circle,
    #0d1af3,
    #0a15ca,
    #0811a8,
    #070e8b,
    #060c73,
    #18140c
  );
}

.light-mode {
  background: radial-gradient(
    circle,
    #dc1d26,
    #e63e46,
    #ec6a70,
    #f39ea1,
    #fbdbdc
  );
}

#menu {
  position: sticky;
  top: 0;
  z-index: 50;
}
/* nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
} */
</style>

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
      this.updateActiveButton();
    },
    updateActiveButton() {
      const buttons = document.querySelectorAll(".buttons");
      buttons.forEach((button) => {
        if (
          button.id ===
          `toggle-button-${this.currentMode.split("-")[0] || "default"}`
        ) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    },
  },
  mounted() {
    this.setMode("default-mode"); // Set the default mode on load
  },
};
</script>
