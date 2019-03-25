<template>
  <div class="mb233">
    <vueper-slides class="no-shadow"  :visible-slides="visible"  :slide-ratio="1/4" :dragging-distance="70">
      <vueper-slide v-for="(slide,index) in slides" :key="index"  :content="slide.content"></vueper-slide>
    </vueper-slides>
  </div>
</template>

<script src='./ann-portfolio-carusel.js'></script>
<style src='./ann-portfolio-carusel.css'></style>
