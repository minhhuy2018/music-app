<template>
  <div id="app">
     <input type="text" class="myinput" v-model="todo" placeholder="请输入代办事项" v-on:keyup.enter="addTodo">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
export default {
  data:function(){
   return {



     
   }
   
  
  },
methods:{
addTodo:function(){
 this.$store.commit('increment',{value:this.todo,comp:false})
 

}



}




}
</script>
