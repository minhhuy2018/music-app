<template>
     <div class="main clearfix_after ">

      <div class="main-left">
          
        <div class="expheard clearfix_after">
         <a href="" class="expheard-box">
          <div class="b1"></div>
          <img src="http://qn-qn-echo-image-cdn.app-echo.com/FihFH8LDnuyoy3DT29RCoqQrRmwn?imageMogr2/auto-orient/quality/100|imageMogr2/thumbnail/!300x300r/gravity/Center/crop/300x300/dx/0/dy/0" alt="" class="">
          <div class="text">
             午后红茶
         </div>
         </a>

           <a href="" class="expheard-box">
          <div class="b2"></div>
          <img src="http://www.app-echo.com/v/dist-prod/images/655c7dbb2e8da175dd62f273119dcb07.jpg" alt="" class="">
          <div class="text">
             工作学习
         </div>
         </a>

         
           <a href="" class="expheard-box">
          <div class="b3"></div>
          <img src="http://www.app-echo.com/v/dist-prod/images/655c7dbb2e8da175dd62f273119dcb07.jpg" alt="" class="">
          <div class="text">
             深夜居酒屋
         </div>
         </a>

          <a href="" class="expheard-box">
          <div class="b4"></div>
          <img src="http://www.app-echo.com/v/dist-prod/images/655c7dbb2e8da175dd62f273119dcb07.jpg" alt="" class="">
          <div class="text">
             周末聚会
         </div>
         </a>

           <a href="" class="expheard-box">
          <div class="b5"></div>
          <img src="http://www.app-echo.com/v/dist-prod/images/655c7dbb2e8da175dd62f273119dcb07.jpg" alt="" class="">
          <div class="text">
             放松心情
         </div>
         </a>






        </div>


        <!-- 热门榜单 -->
    <my-hot></my-hot>






 <!-- 今日推荐 -->
        <div class="big-title">
            <span class="f1">今日推荐</span>  
            <i class="play-all rec" style="float:left">播放全部</i>

           
        </div>
        
        <ul class="morelist clearfix_after">
            <li class="expmore-box" v-for="item in music" :key="item.mid">
                <div class="pic">
                    <a href=""><img :src="item.img" alt=""></a>
                </div>
                 <a href="" class="song-name">{{item.mname}}</a>
                    <h4><a href="">{{item.channel}}</a></h4>
                    
                    <ul class="status-list">
                        <li>
                            <i class="share"></i>
                            <span>1</span>
                        </li>
                        <li>
                            <i class="like"></i>
                            <span>1</span>
                        </li>
                        <li>
                             <i class="comment"></i>
                            <span>1</span>
                        </li>
                    </ul>

            </li>
        </ul>

    
      </div>


<!-- 每日精选 -->
 <div class="main-right">
<ul>

    <li class="firstli">
          <h3>每日精选
           <i class="play-all">播放全部</i>
       </h3>
    </li>
    
    <li v-for="item in music" :key="item.mid">
        
       <div class="exlistening clearfix_after " >
         <router-link to="/musicdetail?fid=3">
             <div class="pic">
                  <img :src="item.img" alt="" >
             </div>
             <div class="hgroup">
                 <h4>{{item.mname}}</h4>
                 <h5>{{item.channel}}</h5>
             </div>

         </router-link>

       </div>

    </li>
</ul>

      </div>
     
    


     </div>



</template>







<script>

import hot from "@/subcomponents/hot.vue";
export default {
  data() {
    return {
      music:[],
    
    };
  },
  methods: {
   
    },
  
 components :{
     "my-hot":hot

},
created() {
			this.axios.get("/everyday").then(res=>{
                 console.log(res.data[0])
				this.music=res.data;
			}).catch(function(err){
                console.log(err);

            })
		}

}

</script>






<style>



.main{
 width: 1000px;
 height: 1500px;
 background-color: pink;
 
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
.main-right h3{
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
.b2{
     width: 100%;
    height: 150px;
    background: url(http://www.app-echo.com/v/dist-prod/images/655c7dbb2e8da175dd62f273119dcb07.jpg) no-repeat;
}
.b3{
    
    width: 100%;
    height: 150px;
    background: url(http://www.app-echo.com/v/dist-prod/images/da74a09d483c2e38a7e00dbebcf21ae2.jpg) no-repeat;


}
.b4{
    width: 100%;
    height: 150px;
    background: url(http://www.app-echo.com/v/dist-prod/images/7334487124a8a7f7b70246172e2cb0f1.jpg) no-repeat;

}
.b5{
    width: 100%;
    height: 150px;
    background: url(http://www.app-echo.com/v/dist-prod/images/c96ed94cf382a4b54f9f63c100cef7fa.png) no-repeat;

}


.expheard-box img{
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
.expmore-box .pic img{
     width: 160px;
    height: 160px;
    object-fit: cover;
    max-width: 100%;
}




.song-name{
     display: block;
    margin: 12px 15px 0;
    font-size: 14px;
    line-height: 18px;
    height: 36px;
    color: #4a4a4a;
    word-break: break-all;
    overflow: hidden;


}
.expmore-box>h4{
    margin: 15px 15px 0;
    font-size: 12px;
    line-height: 12px;
    height: 14px;
    color: #9b9b9b;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.expmore-box h4>a{
    color: #6ed56c;
    font-size: 14px;
    margin-right: 5px;
}
.status-list{
    display: block;
    margin: 10px 5px 0;
    height: auto;
    line-height: 14px;
}
.status-list li{
    display: inline-block;
    width: 50px;
    color: #6b6b6b;
    text-align: center;
    font-size: 12px;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.status-list li i{
    background: url(http://www.app-echo.com/v/dist-prod/images/ae488640107567b16640846a2375beb3.png) 0 -23px no-repeat;
    display: inline-block;
    height: 14px;
    width: 14px;
    vertical-align: top;
}
.status-list li span{
    display: block;
    margin-top: 2px;
    overflow: hidden;
    white-space: nowrap;
}
.status-list li i.like{
    background: url(http://www.app-echo.com/v/dist-prod/images/ae488640107567b16640846a2375beb3.png) -16px -23px no-repeat;

}

.status-list li i.comment{
    background: url(http://www.app-echo.com/v/dist-prod/images/ae488640107567b16640846a2375beb3.png) -34px -23px no-repeat;

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