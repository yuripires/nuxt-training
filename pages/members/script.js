export default { 
  name: 'DummiPage',
  
  computed: {
    userInformation() {
      return this.$store.getters.currentUsers;
    }
  }
};