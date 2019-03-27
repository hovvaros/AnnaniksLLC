<template>
  <v-dialog v-model="dialog" width="600px">
    <template v-slot:activator="{ on }">
      <div class="slider_item width_80_auto img-responsive " v-on="on">
        <div class="slider_item_top displey_flex_flex_direcshon_column_center">
          <div class="slider_item_top_text margin_left_7">
            <span class="lorem_ispum">
              {{ portfolioInfo.title }}
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
                           {{ portfolioInfo.description}}

              </span>
            </div>
          </div>
        </div>
        <div class="slider_item_bottom" :style="{'background-image':'url(http://zont.cab:4531/static/'+portfolioInfo.image+')'}"></div>
      </div>
    </template>
    <v-card>
      <v-card-title class="heigth100vh">
      
      </v-card-title>
      
    </v-card>
  </v-dialog>
</template>

<script src='./ann-portfolio-item.js'></script>
<style src='./ann-portfolio-item.css'></style>
