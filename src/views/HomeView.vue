<script setup></script>

<template class="h-screen z-30">
  <section class="h-screen grid relative overflow-hidden">
    <div class="text-basic200 absolute w-screen h-screen grid grid-rows-12">
      <div class="grid grid-cols-12 row-start-2">
        <h1 class="font-displayBold text-6xl col-start-4 col-span-full">
          While in battle
        </h1>
        <h1
          class="font-displayRegularItalic text-4xl col-start-8 col-span-full"
        >
          i'm free,
        </h1>
      </div>
      <div class="grid grid-cols-12 row-start-10">
        <h1 class="font-displayBold text-4xl col-start-4 col-span-full">
          never free
        </h1>
        <h1 class="font-displayBold text-4xl col-start-5 col-span-full">
          to rest
        </h1>
      </div>
    </div>

    <div id="baggrundHome" class="justify-center flex items-center pt-10 z-50">
      <img
        id="formerGrund"
        class="absolute top-32 w-auto h-3/4 z-50"
        src="../assets/images/grundfarveKlatter.svg"
        alt=""
      />

      <img
        id="gradient"
        class="absolute top-32 w-auto h-3/4 z-50"
        src="../assets/images/gradientGrain.png"
        alt=""
      />
      <img
        id="kanter"
        class="absolute top-32 w-auto h-3/4 z-50"
        src="../assets/images/klatKant.svg"
        alt=""
      />
    </div>
  </section>
</template>

<style>
.light-mode #kanter {
  filter: invert(30%) sepia(98%) saturate(4105%) hue-rotate(342deg)
    brightness(200%) contrast(80%);
}

.dark-mode #kanter {
  filter: invert(12%) sepia(78%) saturate(3184%) hue-rotate(219deg)
    brightness(30%) contrast(100%);
}

.light-mode #formerGrund {
  filter: invert(30%) sepia(98%) saturate(4105%) hue-rotate(342deg)
    brightness(101%) contrast(80%);
}
.dark-mode #formerGrund {
  filter: invert(13%) sepia(98%) saturate(4234%) hue-rotate(230deg)
    brightness(87%) contrast(99%);
}
</style>
