<template>
    <div class="hot">

     <div class="big-title">
     <span class="f1">热门榜单</span>
     <span class="fr"><a href="">进入榜单</a></span>

     </div>
     <div class="sound-list clearfix_after">
         <div class="index1">
          <a href=""><img src="http://www.app-echo.com/v/dist-prod/images/b6718ed159e896bde882ba27b7b98015.png" alt="" class="title-bg"></a>
          <a href=""><img src="https://qn-qn-echo-image-cdn.app-echo.com/Fkkjvigc3x1lRnBMFDGNv-s7SoQN?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/200/q/100" alt="" class="sound-bg"></a>
          
           <div class="info">
             <span class="top-index">TOP 1</span>
             <a href=""><p>SNH48 EP-「时间的歌」</p></a>
             
             <div class="user-info">
                 <a href=""><img src="https://al-qn-echo-image-cdn.app-echo.com/FmmOSGFG2voZRMBtLjXn6UP4JFUI?imageMogr2/auto-orient/quality/100%7CimageMogr2/thumbnail/!250x250r/gravity/Center/crop/250x250/dx/0/dy/0&imageMogr2/auto-orient/quality/100%7CimageMogr2/thumbnail/!50x50r/gravity/Center/crop/50x50/dx/0/dy/0" alt=""></a>
                
                  <span>SNH48官方</span>
             </div>
           </div>
         </div>


         <div class="index23">
            <ul>
                <li>
                    <img src="https://qn-qn-echo-image-cdn.app-echo.com/FlHYjRUbB-9qrKzsYYYT8a9s-cf_?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/100/q/100" alt="">
                     <div class="sound-info">
                         <div class="title">
                             <i class="index">2</i>
                         </div>
                </div>
                </li>
               
                <li></li>
                
            </ul>

         </div>


     </div>





    </div>





</template>




<style>
.hot{
width: 695px;
margin: 35px 9px;

}

.big-title{
   display: block;
    margin: 10px 9px;
    height: 28px;
    line-height: 28px;
    font-size: 24px;
    color: #666;

}

.f1{
    float: left;
}
.fr{
 float: right;
}
.fr a{
    font-size: 16px;
    color: #6ed56c;
}
.sound-list{
margin-top: 19px;  
}

.title-bg{
    float: left;
    width: 90px;
    height: 150px;
    margin-right: 5px;
}
.index1{
    float: left;
    margin-right: 5px;

}
.sound-bg{
    float: left;
    width: 150px;
    height: 150px;
    object-fit: cover;
}
.index1 .info{
    float: left;
    width: 182px;
    height: 150px;
    background: url(http://www.app-echo.com/v/dist-prod/images/8f312322ba5b76a63e77aaf3bc7bad8d.png) no-repeat;
    margin-left: -10px;
}

.info .top-index{
    display: block;
    font-size: 18px;
    line-height: 18px;
    color: #f49c9c;
    margin: 17px 0 0 20px;
}
.info a>p{
    font-size: 14px;
    line-height: 20px;
    width: 143px;
    height: 39px;
    color: #666;
    margin: 10px auto 28px;
    overflow: hidden;
}

.user-info{
    margin-left: 20px;
}
.user-info img{
    float: left;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    margin-right: 8px;
    object-fit: cover;
    max-width: 100%;
}
.user-info span{
    display: inline-block;
    font-size: 12px;
    color: #999;
    line-height: 22px;
    width: 114px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.index23{
    float: left;
}

.index23 ul{
    height: 150px;
}
.index23 ul li{
    height: 50%;
}
.index23 ul li img{
    float: left;
    width: 73px;
    height: 73px;
    object-fit: cover;
}

.index23 .sound-info{
    float: left;
    width: 197px;
    height: 71px;
    border: 1px solid #f4f4f4
}
.sound-info .title{
    width: 175px;
    position: relative;
    margin: 8px auto 3px
}

.sound-info .title .index{
    position: absolute;
    left: 2px;
    top: 1px;
    width: 16px;
    height: 16px;
    background: #f49c9c;
    line-height: 16px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    font-style: normal;
}



</style>


<script>
export default {
  data() {
    return {
      music:[],
    
    };
  },
  methods: {
   
    },
  
 components :{

},

}

</script>