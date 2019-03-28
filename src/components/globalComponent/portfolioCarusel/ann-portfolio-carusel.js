import axios from "axios";
import PortfolioItem from "./../portfolioItem/ann-portfolio-item.vue";
$(document).ready(function() {
  $(".filter-button").click(function() {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});

export default {
  data() {
    return {
      portfolioArr: null,
      portfolioIsactiveArr: [],
      portfolioIsFalse: []
    };
  },
  components: {
    "ann-portfolio-item": PortfolioItem
  },

  mounted() {
    axios.get("http://zont.cab:4531/portfolio").then(response => {
      this.portfolioArr = response.data;
      this.filterPortfolioIsactive();
    });
  },
  methods: {
    filterPortfolioIsactive() {
      for (let i of this.portfolioArr) {
        if (i.isActive && i.image!="") {
          this.portfolioIsactiveArr.push(i);
        } else {
          this.portfolioIsFalse.push(i);
        }
      }
    }
  }
};
