<template>
  <div class="hello">    
      <h3>Login Form</h3>

      <br/>
      <br/>
      
      <form>
          <label>
              User Name: 
              <input type="text" v-model="input.username" ref="user_input" />              
          </label>
          <br/>
          <br/>
          <label>
              Password:
              <input type="password" v-model="input.user_pass" ref="user_password" />
          </label>
          <br/>
          <button @click.prevent="login()"> Login </button>
      </form>
      
      
      <router-link to="/comp-one">Unless the other one not works !!!</router-link>      
  </div>
</template>

<script>

import Axios from 'axios';
export default {  
  name: 'login',  
  data() {
    return {     
      link: '/comp-one', 
      input: {
        username: '',
        user_pass: ''
      }
    }
  } ,
  methods: {
      login() {          
          let userName = this.input.username;
          let password = this.input.user_pass;
          console.log(`user name ${userName}`);
          console.log(`user password ${password}`);
          let self = this;
          Axios.post('http://localhost:8008/auth/login', {
              username: `${userName}`,
              password: `${password}`
          }).then (response => self.$router.push('/comp-one'));
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
