<template>
  <div class="main-center">
    <nav>
      <a href class="back">返回</a>
    </nav>

    <div class="sound-title">
      <div class="title">就算岁月无常 未动摇 我等你-「莫望」</div>
    </div>

    <div class="sound-wp">
      <div class="bg-mask">
        <img
          src="https://al-qn-echo-image-cdn.app-echo.com/Fg151QQS6CSfELCmjO1eVth0VnUa?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/500/q/100"
          alt
          class="pic"
        />
        <div class="mask"></div>
      </div>
      <div class="sound-cover">
        <img
          src="https://al-qn-echo-image-cdn.app-echo.com/Fg151QQS6CSfELCmjO1eVth0VnUa?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/500/q/100"
          alt
        />
      </div>

      <div class="sound-controll clearfix_after">
        <div class="play-btn"></div>
        <div class="duration-time">00:00</div>
        <div class="timeline"></div>
      </div>
    </div>
    <div class="infos clearfix_after">
      <div class="lyrics">
        <h1>简介</h1>
        <p class="infos">
          歌曲：xxx
          <br />音乐人：xxx
          <br />与君相逢 寒枝露正浓
          心生欢喜 一眼印永恒
          湖面秋风 廊前侧影
          默契借着诗与歌
          托起朗朗的心声
          墨池有雨 我从书中来
          红墙白雪 岁月满苍苔
          一纸便签 牵我心怀
          它从没向我飘来
          直到你走向城外
          几番霜 几番雨
          长风里的诗 咏尘世的别离
          岂能忘 无声对望的你
          就算天地颠倒
          未动摇 我等你
          一程风 一程泥
          长空洒下雨 湿了迢迢归期
          常眺望 隔山隔海的你
          就算岁月无常
          未动摇 我等你
          几番霜 几番雨
          长风里的诗 咏尘世的别离
          岂能忘 无声对望的你
          就算天地颠倒
          未动摇 我等你
          一程风 一程泥
          长空洒下雨 湿了迢迢归期
          常眺望 隔山隔海的你
          就算岁月无常
          未动摇 我等你
          盼着有风捎去
          那一句 喜欢你
        </p>
      </div>
      <div class="comment">
          <h1>热门评论</h1>
          <ul class="comment-area"></ul>
      </div>
    </div>
  </div>
</template>
 





<style>
.main-center {
  width: 1000px;
  margin: 0 auto;
  min-height: 200px;
}

.main-center > nav {
  background: #f4f4f4;
  box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.06);
  height: 80px;
  line-height: 80px;
}

.main-center > nav > a {
  float: left;
  font-size: 18px;
  color: #999;
  margin-left: 40px;
}

.back::before {
  content: "";
  display: inline-block;
  width: 26px;
  height: 26px;
  background: url(http://www.app-echo.com/v/dist-prod/images/15df536ea53c26483fa9810992617687.png)
    no-repeat;
  vertical-align: middle;
  margin: -2px 16px 0 0;
}
.sound-title{
    background-color: #fff;
    height: 86px;
}
.title {
  display: inline-block;
  line-height: 28px;
  color: #666;
  font-size: 22px;
  padding: 24px 40px 0;
}

.sound-wp {
  position: relative;
  height: 420px;
}
.sound-wp .bg-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
}

.bg-mask .pic {
  position: absolute;
  height: auto;
  top: -260px;
  left: -25px;
  width: 1050px;
  filter: blur(18px);
  max-width: 1050px;
}

.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.06);
}
.sound-cover {
  position: absolute;
  width: 292px;
  height: 292px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.85);
  top: 40px;
  left: 40px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  z-index: 50;
}

.sound-cover img {
  width: 282px;
  height: 282px;
  border-radius: 4px;
  margin: 5px;
  object-fit: cover;
  max-width: 100%;
}
.sound-controll {
  position: absolute;
  width: 100%;
  height: 48px;
  background: rgba(255, 255, 255, 0.85);
  left: 0;
  bottom: 0;
}
.play-btn {
  float: left;
  position: relative;
  width: 38px;
  height: 38px;
  margin: 5px 0 5px 40px;
  border: 1px solid #ddd;
  border-radius: 50%;
  line-height: 40px;
  color: #6ed56c;
  cursor: pointer;
  font: 400 14px/1 taotao;
  background: #fff;
}
/* .pay-btn::before{
    content: "\E910";
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -19px;
    margin-top: -19px;
    color: #6ed56c;
    font-size: 40px;
} */
.duration-time {
  float: left;
  height: 48px;
  line-height: 48px;
  font-size: 12px;
  color: #8c8c8c;
  margin: 0 8px;
}
.timeline {
  float: left;
  position: relative;
  width: 620px;
  height: 6px;
  margin: 21px 8px;
  border-radius: 3px;
  background-color: #e1f2cf;
  cursor: pointer;
}
.infos {
  margin-top: 20px;
}
.infos h1 {
  margin: 30px;
  color: #6b6b6b;
  height: 24px;
  font-size: 24px;
  line-height: 24px;
}

.lyrics {
  float: left;
  background: #fff;
  width: 420px;
  border-radius: 4px;
  margin-bottom: 30px;
}

.lyrics p.infos {
  margin: 35px 60px;
  line-height: 24px;
  font-size: 14px;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-line;
}
.infos .comment {
  float: right;
  background: #fff;
  width: 565px;
  border-radius: 4px;
  margin-bottom: 15px;
}

.comment-area{
   margin:  0 20px 30px 30px;
}


</style>




<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>