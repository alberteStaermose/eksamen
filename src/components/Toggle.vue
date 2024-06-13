<template>
  <div
    id="boks"
    class="bg-primaryOne900 rounded-full grid h-fit w-fit justify-items-center p-1 text-primaryOne400"
  >
    <button class="button" id="toggle-button1">A</button>

    <button class="buttons active" id="toggle-button2">AB</button>

    <button class="buttons" id="toggle-button3">B</button>
  </div>
</template>

<style scoped>
div {
  box-shadow: inset 0 0 10px #18140c;
}

button {
  /* box-shadow: inset 0 0 50px #18140c; */
  box-shadow: inset 0 0 10px #18140c;
  color: #ec6a70;
  padding: 1px;
  border-radius: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  margin: 2px;
  cursor: pointer;

  background: radial-gradient(circle, #dc1d26, #690e12);

  /* background: radial-gradient(circle, #eae1d1, #eae1d1); */

  /*    -webkit-transition: all 0.5s ease-in-out;
  -moz-transition:    all 0.5s ease-in-out;
  -ms-transition:     all 0.5s ease-in-out;
  -o-transition:      all 0.5s ease-in-out; */
}

.buttons.active {
  background: radial-gradient(circle, #ff5400, #b03a00);
  /* background: radial-gradient(circle, #18140c, #332a18); */

  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
  color: #eae1d1;
  font-weight: 500;
  transition: all 0.5s ease;
}

button:hover {
  color: #eae1d1;
  box-shadow: inset 0 0 10px #ff712b;
  background-color: #dc1d26;
  transition: all 0.5s ease;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".buttons");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});
</script>
