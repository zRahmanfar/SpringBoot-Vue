<template>
 <div>
     <div style="background:#bfd6e2; padding: 5px">
         <router-link class="mr1" to="/">Go to Home</router-link>
         <router-link class="mr1" to="/cvpage">Go to CV</router-link>
         <router-link class="mr1" to="/OrderProject">Go to Order Project</router-link>
     </div>
     <hr>
     <router-view></router-view>

     <Home :name="name" @chDeta="showdata($evevt)" />


 </div>
</template>

<script>
 import  Home from './components/Home.vue';

export default {
  components:{
       Home
  },
  date(){
    return{
        name:"Homecomponent "
    }

  },
  methods:{
    showdata(evevt){
      console.log(evevt)
    }
  }
 
};
</script>

<style scoped>
.mr1{
    margin-right: 2rem;
    padding: 5px;
}
</style>
