import axios from "axios";
export default {
  data() {
    return {
      service: null
    };
  },
  created() {
    axios.get("http://zont.cab:4531/service").then(response => {
      this.service = response.data;
      console.log(this.service);
    });
  }
};
