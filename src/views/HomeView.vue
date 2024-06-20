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

    <div
      class="absolute bottom-0 z-50 text-basic200 flex flex-row justify-between w-screen pr-44 pl-10 font-displayRegular text-lg"
    >
      <img
        id="metroLogo"
        class="h-4 w-auto self-center"
        src="../assets/images/llogo.svg"
        alt=""
      />
      <p>Blågårds plads</p>
      <p>Cullberg & Hooman Sharifi</p>
      <p>25-29 juni Kl 19:30</p>
    </div>
  </section>
</template>

<style>
.light-mode #metroLogo {
  filter: invert(9%) sepia(44%) saturate(6819%) hue-rotate(348deg)
    brightness(45%) contrast(97%);
}

.dark-mode #metroLogo {
  filter: sepia(32%) saturate(7500%) hue-rotate(200deg) brightness(170%)
    contrast(96%);
}

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
