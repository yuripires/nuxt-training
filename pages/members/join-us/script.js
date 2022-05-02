export default {
  name: 'InspirePage',
  data() {
    return {
      userData: {
        firstName: '',
  
        lastName: '',
  
        email: '',
  
        id: ''
      },
      dialog: false,
        
      nameRules: [
        (value) => !!value || 'Name is required',
        (v) => v.length <= 10 || 'Name must be less than 10 characters',
        (v) => v.length > 1 || 'Minimun lenght is 2'
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+.com/.test(v) || 'E-mail must be valid'
      ],
      userInformation: []
    };
  },
  methods: {
    addUser() {
      if (this.$refs.formUser.validate()) {
        this.dialog = true;
        this.userData.id = Date.now() - Math.random();
        this.$store.dispatch('setUser', this.userData);
      }
    }
  }
};