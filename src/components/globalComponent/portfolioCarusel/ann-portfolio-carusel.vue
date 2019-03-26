<template>
  <div class="mb233">
    <div class="container">
      <div class="row">
        <div align="center" class="portfolioButtonContainer">
          <button class="btn btn-default filter-button" data-filter="all">All</button>
          <button class="btn btn-default filter-button" data-filter="hdpe">HDPE Pipes</button>
          <button class="btn btn-default filter-button" data-filter="sprinkle">Sprinkle Pipes</button>
          <button class="btn btn-default filter-button" data-filter="spray">Spray Nozzle</button>
          <button class="btn btn-default filter-button" data-filter="irrigation">Irrigation Pipes</button>
        </div>
        <br>

        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
          <img src="http://fakeimg.pl/365x365/" class="img-responsive">
          <div  class="slider_item width_80_auto img-responsive">
            <div class="slider_item_top displey_flex_flex_direcshon_column_center">
              <div class="slider_item_top_text margin_left_7">
                <span class="lorem_ispum">
                  <!-- {{portfolioInfo.topName}}  -->

                  LOREM IPSUM DOLOR
                </span>
              </div>
              <div class="webpage_container">
                <div class="slider_item_bottom_icon margin_left_7">
                  <span class>
                    <i class="icon-globe"></i>
                  </span>
                </div>
                <div class="slider_item_bottom_text">
                  <span class="margin_left_30">
                    <!-- {{ portfolioInfo.description }} -->
                    webpage
                  </span>
                </div>
              </div>
            </div>
            <div class="slider_item_bottom"></div>
          </div>
        </div>

        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
          <img src="http://fakeimg.pl/365x365/" class="img-responsive">
        </div>

        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
          <img src="http://fakeimg.pl/365x365/" class="img-responsive">
        </div>

        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
          <img src="http://fakeimg.pl/365x365/" class="img-responsive">
        </div>

        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
          <img src="http://fakeimg.pl/365x365/" class="img-responsive">
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./ann-portfolio-carusel.js'></script>
<style src='./ann-portfolio-carusel.css'></style>
