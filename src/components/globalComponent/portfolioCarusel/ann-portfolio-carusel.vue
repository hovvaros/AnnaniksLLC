<template>
  <div class="mb233">
    <div class="container">
      <div class="row spaceEv">
        <div align="center" class="portfolioButtonContainer">
          <button class="btn btn-default filter-button" data-filter="all">All</button>
          <button class="btn btn-default filter-button" data-filter="hdpe">HDPE Pipes</button>
          <button class="btn btn-default filter-button" data-filter="sprinkle">Sprinkle Pipes</button>
          <button class="btn btn-default filter-button" data-filter="spray">Spray Nozzle</button>
          <button class="btn btn-default filter-button" data-filter="irrigation">Irrigation Pipes</button>
        </div>
        <br>

        <div
          class="gallery_product col-lg-3 col-md-4 col-sm-6 col-xs-12 filter hdpe"
          v-for="(i,index) of portfolioIsactiveArr"
          :key="index"
        >
          <ann-portfolio-item class="img-responsive" :portfolioInfo="i"></ann-portfolio-item>
        </div>

        <div class="gallery_product col-lg-3 col-md-4 col-sm-6 col-xs-12 filter sprinkle">
          <!-- <ann-portfolio-item></ann-portfolio-item> -->
        </div>

        <div class="gallery_product col-lg-3 col-md-4 col-sm-6 col-xs-12 filter hdpe">
          <!-- <ann-portfolio-item></ann-portfolio-item> -->
        </div>

        <div class="gallery_product col-lg-3 col-md-4 col-sm-6 col-xs-12 filter irrigation">
          <!-- <ann-portfolio-item></ann-portfolio-item> -->
        </div>

        <div class="gallery_product col-lg-3 col-md-4 col-sm-6 col-xs-12 filter spray">
          <!-- <ann-portfolio-item></ann-portfolio-item> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./ann-portfolio-carusel.js'></script>
<style src='./ann-portfolio-carusel.css'></style>
