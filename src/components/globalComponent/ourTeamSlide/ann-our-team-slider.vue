<template>
  <div class="mb287">
    <carousel-3d v-if="staff">
      <slide v-for="(i, index) of staff" :key="i._id" :index="index">
        <div class="contacts_slider_item">
          <div class="img_contacts_slider" :style="{'background-image':'url(http://zont.cab:4531/static/'+i.image+ ')'}"></div>
          <div class="contacts_top_text">
            <span>{{ i.localization[0].name }}</span>
          </div>
          <div class="contacts_center_text">
            <span>{{i.localization[0].rol }}</span>
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
