<template>
     <div class="main clearfix_after ">

      <div class="main-left">

    
      </div>

      <div class="main-right ">
       <h3>每日精选
           <i class="play-all">播放全部</i>
       </h3>
       
       <div class="exlistening clearfix_after ">
         <a href="#">
             <div class="pic">
                  <img src="" alt="" >
             </div>
             <div class="hgroup">
                 <h4>1111111111</h4>
                 <h5>1111111111</h5>
             </div>
         

         </a>

       </div>


      </div>
    


     </div>



</template>







<script>
export default {
  data() {
    return {
   
    
    };
  },
  methods: {
   
    },
  
 components :{

}

}

</script>






<style>



.main{
 width: 1000px;
 height: 1500px;
 background-color: pink;
 margin: 0 auto
}
.main-left{
    float: left;
    width: 755px;
    background-color: #fff;
    border-radius: 4px;
}


.main-right{
 float: right;
 width: 230px;
 background-color:rgb(212, 208, 208);

}
.main-right>h3{
    font-size: 18px;
    height: 18px;
    line-height: 18px;
    font-weight: 400;
    color: #666;
    margin-top: 20px;
}
.play-all{
     
    float: right;
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    color: #fff;
    font-style: normal;
    background-color: #6ed56c;
    background-image: url(/v/dist-prod/images/b99faa6….png);
    background-repeat: no-repeat;
    background-position: 2px 1px;
    border-radius: 14px;
    padding: 0 10px;
    margin-top: -2px;
    vertical-align: bottom;
    text-indent: 17px;
    cursor: pointer;
}
.exlistening{
    display: block;
    margin: 22px 0;
}

.exlistening a{
    display: block;
    height: 68px;
    margin-bottom: 16px

}
.exlistening .pic{
    float: left;
    width: 68px;
    height: 68px;
    border: 1px solid red;
}
.exlistening .pic>img{
    width: 68px;
    height: 68px;
    max-width: 100%;
}
.hgroup{
     float: left;
    margin-left: 10px;
    width: 140px;
}
.hgroup h4{
    font-size: 12px;
    color: #4a4a4a;
    line-height: 16px;
    height: 48px;
    overflow: hidden;
    font-weight: 400;
}
.hgroup h5{
    font-weight: 400;
    font-size: 12px;
    color: #999;
    line-height: 14px;
    height: 14px;
    margin-top: 6px;
    overflow: hidden
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