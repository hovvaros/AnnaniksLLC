
export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      phone:null,
      textarea:null,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }),
    methods: {
        postFormData(){
            const data={
                firstname:this.firstname,
                lastname:this.lastname,
                phone:this.phone,
                email:this.email,
                textarea:this.textarea
            }
           console.log(data)
        }
    },
  }