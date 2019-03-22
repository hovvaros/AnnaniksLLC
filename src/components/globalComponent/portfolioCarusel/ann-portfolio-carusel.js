import { VueperSlides, VueperSlide } from "vueperslides";

import "vueperslides/dist/vueperslides.css";

export default {
  data: () => ({
    num:true
    ,slides: [
      {
        title: "Slide #1",
        content: `<div class=" slider_item width_80_auto">
        <div class="slider_item_top displey_flex_flex_direcshon_column_center">
        <div class="slider_item_top_text margin_left_7"><span class="lorem_ispum ">
        LOREM IPSUM DOLOR
        </span>
        </div>
        <div class="webpage_container">
        <div class="slider_item_bottom_icon margin_left_7">
        <span class=""><i class="icon-globe"></i></span>
        </div><div class="slider_item_bottom_text">
        <span class="margin_left_30">webpage</span>
        </div></div></div><div class="slider_item_bottom">
        </div>
        </div>`
      },
      {
        title: "Slide #1",
        content: `<div class=" slider_item width_80_auto">
        <div class="slider_item_top displey_flex_flex_direcshon_column_center">
        <div class="slider_item_top_text margin_left_7"><span class="lorem_ispum ">
        LOREM IPSUM DOLOR
        </span>
        </div>
        <div class="webpage_container">
        <div class="slider_item_bottom_icon margin_left_7">
        <span class=""><i class="icon-globe"></i></span>
        </div><div class="slider_item_bottom_text">
        <span class="margin_left_30">webpage</span>
        </div></div></div><div class="slider_item_bottom">
        </div>
        </div>`
      },
      {
        title: "Slide #1",
        content: `<div class=" slider_item width_80_auto">
        <div class="slider_item_top displey_flex_flex_direcshon_column_center">
        <div class="slider_item_top_text margin_left_7"><span class="lorem_ispum ">
        LOREM IPSUM DOLOR
        </span>
        </div>
        <div class="webpage_container">
        <div class="slider_item_bottom_icon margin_left_7">
        <span class=""><i class="icon-globe"></i></span>
        </div><div class="slider_item_bottom_text">
        <span class="margin_left_30">webpage</span>
        </div></div></div><div class="slider_item_bottom">
        </div>
        </div>`
      },
      {
        title: "Slide #1",
        content: `<div class=" slider_item width_80_auto">
        <div class="slider_item_top displey_flex_flex_direcshon_column_center">
        <div class="slider_item_top_text margin_left_7"><span class="lorem_ispum ">
        LOREM IPSUM DOLOR
        </span>
        </div>
        <div class="webpage_container">
        <div class="slider_item_bottom_icon margin_left_7">
        <span class=""><i class="icon-globe"></i></span>
        </div><div class="slider_item_bottom_text">
        <span class="margin_left_30">webpage</span>
        </div></div></div><div class="slider_item_bottom">
        </div>
        </div>`
      },
      {
        title: "Slide #1",
        content: `<div class=" slider_item width_80_auto">
        <div class="slider_item_top displey_flex_flex_direcshon_column_center">
        <div class="slider_item_top_text margin_left_7"><span class="lorem_ispum ">
        LOREM IPSUM DOLOR
        </span>
        </div>
        <div class="webpage_container">
        <div class="slider_item_bottom_icon margin_left_7">
        <span class=""><i class="icon-globe"></i></span>
        </div><div class="slider_item_bottom_text">
        <span class="margin_left_30">webpage</span>
        </div></div></div><div class="slider_item_bottom">
        </div>
        </div>`
      },
    ]
  }),

  components: { VueperSlides, VueperSlide, props: true }
  
};
