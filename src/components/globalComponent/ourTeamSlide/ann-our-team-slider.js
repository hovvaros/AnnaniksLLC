import { Carousel3d, Slide } from "vue-carousel-3d";
import axios from "axios";
export default {
  components: {
    Carousel3d,
    Slide
  },

  data() {
    return {
      staff:null
    };
  },
  created() {
    axios
         .get("http://zont.cab:4531/staff")
         .then(response => {
            this.staff = response.data;
            console.log(this.staff);
    });
    
   
  }
};
