<template>
  <div>
    <div
      :class="[
        'bg-primaryOne900',
        'rounded-full',
        'grid',
        'h-fit',
        'w-fit',
        'justify-items-center',
        'p-1',
        'text-primaryOne400',
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
</template>

<style scoped>
.bg-primaryOne900 {
  background-color: #690e12; /* Update this to your desired primary color */
}

.default-mode button {
  color: #ec6a70;
  background: radial-gradient(circle, #dc1d26, #690e12);
}
.dark-mode {
  background-color: #18140c !important;
}
.dark-mode .buttons {
  background-color: #8c86a9; /* Dark mode background color */
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
