<template>
  <div class="footer">
    <div class="inner">
      <div class="footer1">
        <div class="footer-logo">
          <img src="http://www.app-echo.com/statics/v3/images/kibeylogo@2x.png" alt />
        </div>
        <p class="footer1-desc">启维文化是一个年轻人的文化品牌，旗下有多个互联网产品线，覆盖生活方式、音乐、创意，时尚等多个领域。</p>

        <div class="contact">
          商务合作：
          <em>business@kibey.com</em>
          <br />广告投放：
          <em>ad@kibey.com</em>
          <br />渠道各做：
          <em>echo@kibey.com</em>
          <br />版权合作：
          <em>legal@kibey.com</em>
          <br />联系客服：
          <em>400-820-1791</em>
          <br />投诉方式：
          <em>legal@kibey.com</em>
          <br />
        </div>
      </div>
      <ul class="footer1-nav">
        <li>
          <a href target="_blank">青声首页</a>
        </li>
        <li>
          <a href target="_blank">关于echo</a>
        </li>
        <li>
          <a href target="_blank">职位招聘</a>
        </li>
        <li>
          <a href target="_blank">echo名人招聘</a>
        </li>
        <li>
          <a href target="_blank">下载app</a>
        </li>
        <li>
          <a href target="_blank">手游</a>
        </li>
        <li>
          <a href target="_blank">第三方账号绑定</a>
        </li>
      </ul>

      <div class="copyright">
        <a href="http://www.miitbeian.gov.cn/" target="_blank">沪ICP备15035783号-1</a>
        &nbsp;&nbsp; |&nbsp;&nbsp; 网络文化经营许可证：沪网文【2015】0593-143号 &nbsp;&nbsp;|&nbsp;&nbsp;
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010602000310"
          target="_blank"
        >
          <img
            src="http://qn-qn-echo-image-cdn.app-echo.com/FinEALw7ifYIV2baxOAzDe1ctz1S"
            alt
            style="width:16px;height:16px;vertical-align:sub"
          />
          沪公网安备 31010602000310号
        </a> &nbsp;&nbsp; |&nbsp;&nbsp;
        <a
          href="http://szcert.ebs.org.cn/ff7dcf9c-d995-4bbd-ac03-11c4f5f31722"
          target="_blank"
        >
          <img
            src="https://szcert.ebs.org.cn/Images/govIcon.gif"
            alt
            style="width:16px;height:16px;vertical-align:sub"
            />

          工商网监
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.footer {
  height: auto;
   background-color:  #d0d4df ;
}

.footer1 {
  width: 100%;
  height: 160px;
}
.footer1 p {
  float: left;
  margin: 45px 0 0 20px;
  width: 318px;
  height: 30px;
  color: #999;
  font-size: 12px;
  line-height: 15px;
}
.footer-logo {
  float: left;
  margin: 35px 0;
  width: 208px;
  height: 50px;
}
.footer-logo img {
  width: 100%;
}

.inner {
  width: 1000px;
  margin: 0 auto;
}

.contact {
  float: right;
  margin: 10px 0;
  color: #999;
  font-size: 12px;
  line-height: 20px;
}

.contact em {
  font-style: normal;
  margin-left: 4px;
  color: #6ed56c;
}
.footer1-nav {
  height: 80px;
  border-top: 1px solid #e8e8e8;
  text-align: center;
}
.footer1-nav li {
  display: inline-block;
  margin: 34px 22px 24px;
  height: 14px;
  list-style: none;
  line-height: 14px;
}
.footer1-nav li > a {
  color: #666;
  font-size: 14px;
  text-decoration: none;
}

.copyright {
  padding-bottom: 36px;
  color: #adadad;
  text-align: center;
  font-size: 12px;
}
.copyright a{
 color:  #adadad;
 text-decoration: none;
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

