export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        phone: null,
        Message:"",
      },
      submitted: false
    };
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          console.log(this.user);
        }
      });
    }
  }
};
