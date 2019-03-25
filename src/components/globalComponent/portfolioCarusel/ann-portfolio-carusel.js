import { VueperSlides, VueperSlide } from "vueperslides";
import SliderItem from './../portfolioItem/ann-portfolio-item.vue'
import "vueperslides/dist/vueperslides.css";

export default {
components:{
  'ann-portfolio-item':SliderItem 
}
  ,data: () => ({
    num: true,
    slides: [
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
      }, {
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

      // {
      //   title: "Slide #2",
      //   content: `<ann-portfolio-item> </ann-portfolio-item>`
      // }
    ],
    window: {
      width: 0,
      height: 0
    }
  }),

  components: { VueperSlides, VueperSlide, props: true },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },

  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  computed: {
    visible() {
      if (this.window.width <= 1300) {
        return 1;
      } else {
        return 4;
      }
    }
  }
};
