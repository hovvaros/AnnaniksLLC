<template>
  <div class="patchContainer">
    <div class="width_80_auto patch" v-for="i in 4" :key="i">
      <div class="patch_text">
        <span>{{ AtvantegsDescription }}</span>
      </div>

      <div class="dis_flex_spec_araund">
        <div class="patch_bottom_text">
          <span>{{ AtvantegsName }}</span>
        </div>
        <div class="border_radius">
          <i class="icon-user"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./ann-advanted.js'></script>
<style src='./ann-advanted.css'></style>
