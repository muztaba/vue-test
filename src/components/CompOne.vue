<template>
  <div class="hello">
    <h1>Test Field</h1>
    
    <input v-model="inputText">
    <p> {{massge}} </p>
    <CompTwo title="Hi There !!" v-bind:value="YES"  post="post"/>

  </div>
</template>

<script>
import CompTwo from './CompTwo'
import Axios from 'axios';
export default {  
  name: 'comp-one',
  components: {
    CompTwo
  }, 
  data: function() {
    return {
      inputText: '',
      massge: 'Will be replaced by API call'
    }
  },
  mounted() {
    Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
                    .then(response => this.massge = response);
  },
  watch: {
    inputText: function(oldVal, newVal) {
      this.massge = newVal;
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
