import Title from "./../title/ann-title.vue";
import Advantages from "./../advanted/ann-advanted.vue";
import PortfolioCarousel from './../portfolioCarusel/ann-portfolio-carusel.vue';
import Service from './../service/ann-service.vue';
import OurTeamSlide from './../ourTeamSlide/ann-our-team-slider.vue';
import ContainerForm from './../containerForm/ann-container-form.vue'
export default {
  components: {
    "ann-title": Title,
    "ann-advantages": Advantages,
    "ann-portfolio-carusel":PortfolioCarousel,
    "ann-service":Service,
    "ann-our-team":OurTeamSlide,
    "ann-container-form":ContainerForm
  }
};
