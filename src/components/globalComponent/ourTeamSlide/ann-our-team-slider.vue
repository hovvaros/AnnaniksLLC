<template>
  <div class="mb287">
    <carousel-3d>
      <slide v-for="(i,index) of 6" :key="index" :index="i">
        <div class="contacts_slider_item">
          <div class="img_contacts_slider"></div>
          <div class="contacts_top_text">
            <span>Name Surname</span>
          </div>
          <div class="contacts_center_text">
            <span>Co-Founder &amp; CTO</span>
          </div>
          <div class="contacts_bottom_text">
            <span>
              Lorem ipsum dolor sit
              <span class="displey_none">
                amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                ero labore et dolore.
              </span>
            </span>
          </div>

          <div class="container_slider_button">
            <span>CONTACT</span>
          </div>
        </div>
      </slide>
    </carousel-3d>
  </div>
</template>

<script src='./ann-our-team-slider.js'></script>
<style src='./ann-our-team-slider.css'></style>
