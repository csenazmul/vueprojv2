<template>
  <div>
      <app-header :myName="name" />
      <app-footer/>
      
  </div>
</template>

<script>
import Header from './Components/Header_footer/Header';
import Footer from './Components/Header_footer/Footer';
export default {
  data(){
    return {
      name: "Nazmul"
    }
  },
  components: {
    'app-header': Header,
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

body{
  background-color:aliceblue;
  font-family: 'Encode Sans SC', sans-serif;
}
  
</style>
