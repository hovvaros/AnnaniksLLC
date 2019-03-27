import axios from "axios";
export default {
  data() {
    return {
      service: null,
      isactiveArr: [],
      isActiveFalse: []
    };
  },
  mounted() {
    axios.get("http://zont.cab:4531/service").then(response => {
      this.service = response.data;
      this.filtrIsactive();
    });
  },
  methods: {
    filtrIsactive: function() {
      for (const i of this.service) {
        if (i.isActive) {
          this.isactiveArr.push(i);
        } else {
          this.isActiveFalse.push(i);
        }
      }
    },
   
  },
  filters: {
    capitalize: function() {
      value=toString()
      value = value.toString();
      return value.slice(0, 15);
    }
  },
};
