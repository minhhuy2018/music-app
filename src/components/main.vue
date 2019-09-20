<template>
     <div class="main clearfix_after ">

      <div class="main-left">
          
        <div class="expheard clearfix_after">
         <a href="" class="expheard-box">
          <div class="b1"></div>
          <img src="http://qn-qn-echo-image-cdn.app-echo.com/FihFH8LDnuyoy3DT29RCoqQrRmwn?imageMogr2/auto-orient/quality/100|imageMogr2/thumbnail/!300x300r/gravity/Center/crop/300x300/dx/0/dy/0" alt="" class="pic">
          <div class="text">
             午后红茶
         </div>
         </a>
        </div>

 <!-- 今日推荐 -->
        <div class="big-title">
            <span class="f1">今日推荐</span>  
            <i class="play-all rec" style="float:left">播放全部</i>

           
        </div>
        <ul class="morelist clearfix_after">
            <li class="expmore-box">
                <div class="pic">

                </div>
            </li>
        </ul>

    
      </div>


<!-- 每日精选 -->
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
.expheard-box{
    float: left;
    position: relative;
    width: 150px;
    height: auto;
    margin-right: 1px;
    cursor: pointer
}
.b1{
    width: 100%;
    height: 150px;
    background: url(http://www.app-echo.com/v/dist-prod/images/3a9a80e2b2ba3c32b05f81fa7990215e.jpg) no-repeat;
}
.pic{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px
}
.text{
    display: block;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 14px;
    color: #666;
    padding: 11px 0;
    transition: all .2s ease-in-out
}

.big-title{
    display: block;
    margin: 10px 9px;
    height: 28px;
    line-height: 28px;
    font-size: 24px;
    color: #666;

}
.big-title>.f1{
     float: left;
    line-height: 28px;
    font-size: 24px;
    color: #666;
}
.rec{
    display: inline-block;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    color: #fff;
    font-style: normal;
    background-color: #6ed56c;
    background-image: url(http://www.app-echo.com/v/dist-prod/images/b99faa6fcbf72a7ac2843043864e2236.png);
    background-repeat: no-repeat;
    background-position: 4px 4px;
    border-radius: 14px;
    padding: 0 10px;
    margin-left: 24px;
    vertical-align: bottom;
    text-indent: 20px;
    cursor: pointer
}
.expmore-box{
    float: left;
    width: 160px;
    height: 284px;
    background: #f4f4f4;
    margin: 25px 9px 0;

}
.expmore-box .pic{
    display: block;
    position: relative;
    height: 160px;
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