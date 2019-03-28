<template>
  <div class="row no-gutters container_center">
    <div class="container_center_item">
      <a id="ourTeam"></a>
      <ann-title class="Mt173Mb60" :title="'Our advantages'"></ann-title>

      <div class="row patch_container no-gutters">
        <ann-advantages></ann-advantages>
      </div>
      <a id="portfolio"></a>
      <ann-title class="mb75" :title="'Portfolio'"></ann-title>

      <ann-portfolio-carusel></ann-portfolio-carusel>
      <a href id="service"></a>
      <ann-title class="mb65" :title="'Services'"></ann-title>

      <ann-service></ann-service>
      <a id="stuff"></a>
      <ann-title class="mb78" :title="'Stuff'"></ann-title>

      <ann-our-team></ann-our-team>
      <a id='contact'></a>
      <ann-title class="mb49" :title="'Contact'"></ann-title>

      <ann-container-form></ann-container-form>
    </div>
  </div>
</template>

<script src='./ann-content.js'></script>
<style src='./ann-content.css'></style>
