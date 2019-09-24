<template>
  <div id="app">

    
   
  
       
       
        <header-nav>
       </header-nav>
        
        <router-view/>
        
       <my-footer>

       </my-footer>
      <!-- <my-main>

      </my-main> -->

 
    
  </div>
</template>



<style lang="scss">
*{
  margin: 0px;
  padding: 0px;
}
body{
  background-color: rgb(221, 217, 217);
}
a{
  cursor: pointer;
  text-decoration: none;
}
li{
  list-style: none;
}
input{
  outline: none;
}



.clearfix_after{zoom:1;}
 
.clearfix_after:after{
 
    content:"";
 
    display:block;
 
    height:0;
 
    line-height:0;
 
    clear:both;
 
    visibility:hidden;
 
}





</style>
