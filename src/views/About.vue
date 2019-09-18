<template>
  <div class="about">
    <ul>
      <li v-for="(a,index) in active">

        <input type="checkbox" v-model="a.comp">
          {{a.value}}

      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data:function(){
   return {


   }

  },
  computed:function(){
     active:function(){

       return tihs.$store.getters.active
     }


  }


}
</script>