<template>
  <div class="body">
    <meu-menu :rotas="routes"/>
      <router-view></router-view>
  </div>
</template>

<script>
import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {
  
  components:{
    'meu-menu' : Menu
  },

  data(){

    return{

      routes

    }
  }
}
</script>

<style>

  .body{
    font-family: Helvetica, sans-serif;
    width: 100%;
    margin: 0;
  }
</style>
