<template>
  <div>
      <!-- Globaly Call -->
      <app-header></app-header>
      <app-footer/>
      <p>{{name}}</p>
      <p>{{age}}</p>  
  </div>
</template>

<script>
// import Header from './Components/Header_footer/Header';
import Footer from './Components/Header_footer/Footer';
export default {
  data(){
    return {
      name: "Naz",
      age: 0
    }
  },
  components: {
    // 'app-header': Header,
    'app-footer': Footer
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
