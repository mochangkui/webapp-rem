<template>
  <div class="container">
    <div class="header">
      <ul class="header-content">
        <li class="header-item">推荐</li>
        <li class="header-item">新闻</li>
        <li class="header-item">娱乐</li>
        <li class="header-item">体育</li>
        <li class="header-item">图片</li>
        <li class="header-item">财经</li>
      </ul>
    </div>
    <div class="banner-content">
      <img class="banner" src="https://img.zcool.cn/community/016f8557a405780000012e7e132281.jpg@1280w_1l_2o_100sh.jpg" alt="">
      <p class="banner-title">2017网易时尚跨界盛典</p>
    </div>

    <div class="news-content">
      <ul>
        <li class="news-item">
            <div class="item-inner">
                <img class="news-img" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1367879844,2364120476&fm=26&gp=0.jpg" alt="">
                <p class="news-title">
                    天津市任命政府副秘书长，办公厅党组成员杜强被查
                </p>
                <span class="time">1小时前</span>
                <img class="icon" src="../assets/images/read.png" alt="">
                <span class="num">99</span>
            </div>
        </li>
        <li class="news-item">
          <div class="item-inner">
            <img class="news-img" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1367879844,2364120476&fm=26&gp=0.jpg" alt="">
            <p class="news-title">
              天津市任命政府副秘书长，办公厅党组成员杜强被查
            </p>
            <span class="time">1小时前</span>
            <img class="icon" src="../assets/images/read.png" alt="">
            <span class="num">99</span>
          </div>
        </li>
        <li class="news-item">
          <div class="item-inner">
            <img class="news-img" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1367879844,2364120476&fm=26&gp=0.jpg" alt="">
            <p class="news-title">
              天津市任命政府副秘书长，办公厅党组成员杜强被查
            </p>
            <span class="time">1小时前</span>
            <img class="icon" src="../assets/images/read.png" alt="">
            <span class="num">88</span>
          </div>
        </li>
        <li class="news-item">
          <div class="item-inner">
            <img class="news-img" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1367879844,2364120476&fm=26&gp=0.jpg" alt="">
            <p class="news-title">
              天津市任命政府副秘书长，办公厅党组成员杜强被查
            </p>
            <span class="time">2小时前</span>
            <img class="icon" src="../assets/images/read.png" alt="">
            <span class="num">99</span>
          </div>
        </li>
        <li class="news-item">
          <div class="item-inner">
            <img class="news-img" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1367879844,2364120476&fm=26&gp=0.jpg" alt="">
            <p class="news-title">
              天津市任命政府副秘书长，办公厅党组成员杜强被查
            </p>
            <span class="time">2小时前</span>
            <img class="icon" src="../assets/images/read.png" alt="">
            <span class="num">991</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  html {
    background: #f8f8f8;
  }
  .header {
    height: 80px;
    background: red;
    width: 100%;
    padding-left: 46px;
    .header-item{
      float: left;
      font-size: 32px;
      color: #ffcdce;
      margin-right: 40px;
      line-height: 80px;
      &:nth-child(2) {
        color: #fff;
        font-size: 34px;
      }
    }
  }

  .banner-content {
    position: relative;
    .banner {
      display: block;
      width: 100%;
      height: 280px;
    }
    .banner-title {
      position: absolute;
      left: 30px;
      bottom: 30px;
      font-size: 32px;
      color: #fff;
    }
  }

  .news-content {
    .news-item{
      width: 100%;
      height: 180px;
      padding: 0 30px;
    }
    .item-inner {
      position: relative;
      overflow: hidden;
      border-bottom: 1px solid #e5e5e5;
      height: 100%;
    }
    .news-img {
      margin-top: 20px;
      display: block;
      width: 190px;
      height: 140px;
      float: left;
      margin-right: 30px;
    }
    .news-title{
      color: #404040;
      font-size: 34px;
      margin-top: 32px;
      line-height: 40px;
    }
    .time {
      position: absolute;
      left: 210px;
      bottom: 34px;
      color: #888;
      font-size: 24px;
    }
    .icon {
      position: absolute;
      width: 32px;
      height: 32px;
      right: 44px;
      bottom: 32px;
    }
    .num {
      position: absolute;
      color: #888;
      font-size: 24px;
      right: 8px;
      bottom: 34px;
    }
  }
</style>
