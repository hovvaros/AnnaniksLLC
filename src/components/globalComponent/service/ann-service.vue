<template v-if="isactiveArr">
  <div class="chemrar row no-gutters">
    <div class="width_fixed width_80_auto media_margin" v-for="(i,index) of isactiveArr " :key="index">
   
      <div class="chemrar_top_item" :style="{'background-image':'url(http://zont.cab:4531/static/'+i.image+ ')'}" >
      
      </div>

      <div class="chemrar_bottom_item">
        <div class="chemrar_bottom_text">
          <span>{{ i.title }}</span>
        </div>
        <div class="chemrar_bottom_center_text">
          <span >
           {{ i.description  }}
          </span>
        </div>
        <div class="chemrer_bottom_bottom_text">
          <span>STORY {{ index+1 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./ann-service.js'></script>
<style src='./ann-service.css'></style>
