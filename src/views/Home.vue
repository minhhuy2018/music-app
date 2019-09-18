<template>
  <div class="home">
     <ul>
       <li v-for="(a,index) in allTodo " :key="index" :class="{'isActive':a.comp}">

          <input type="checkbox" v-model="a.comp"> {{a.value}}



       </li>
     </ul>



  </div>
</template>

<script>



export default {
computed:{
allTodo:function(){
  return this.$store.state.todos
}

}




}



</script>
