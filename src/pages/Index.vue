<template>
  <TemplateDefault
    class="relative flex min-h-screen items-center justify-center overflow-x-hidden bg-black font-sans"
  >
    <div class="absolute inset-0 h-full w-full">
      <img src="/bg2.png" alt="" class="h-full w-full object-cover" />
    </div>
    <div
      class="outline relative z-10 mx-auto max-w-5xl text-center !font-cursive text-7xl uppercase md:text-8xl xl:text-9xl xl:text-[10rem]"
    >
      Take Over Has Begun
    </div>
  </TemplateDefault>
</template>
<style>
.outline {
  color: black;
  -webkit-text-fill-color: #faf6a4; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: black;
}
</style>
