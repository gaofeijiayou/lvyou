<template>
  <div class="xh-list">
    <div class="xh-title">
      <img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt>
      <span>猜你喜欢</span>
    </div>
    <div class="xh-list">
      <a href="#">
        <div class="xh-li-left">
            <img src="https://imgs.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg" alt="">
        </div>
        <div class="xh-li-right">
            <div class="li-title">
                <span>上海迪士尼乐园</span>
            </div>
            <div class="li-ping">
                <span>232065条评论</span>
            </div>
            <div class="li-price">
                <span class="price">¥<em>429</em></span>起
                <span class="addr">浦东新区</span>
            </div>
            <div class="li-dev">
                <span>全球最大的迪士尼乐园</span>
            </div>
        </div>
      </a>
           <a href="#">
        <div class="xh-li-left">
            <img src="https://imgs.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg" alt="">
        </div>
        <div class="xh-li-right">
            <div class="li-title">
                <span>上海迪士尼乐园</span>
            </div>
            <div class="li-ping">
                <span>232065条评论</span>
            </div>
            <div class="li-price">
                <span class="price">¥<em>429</em></span>起
                <span class="addr">浦东新区</span>
            </div>
            <div class="li-dev">
                <span>全球最大的迪士尼乐园</span>
            </div>
        </div>
      </a>
           <a href="#">
        <div class="xh-li-left">
            <img src="https://imgs.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg" alt="">
        </div>
        <div class="xh-li-right">
            <div class="li-title">
                <span>上海迪士尼乐园</span>
            </div>
            <div class="li-ping">
                <span>232065条评论</span>
            </div>
            <div class="li-price">
                <span class="price">¥<em>429</em></span>起
                <span class="addr">浦东新区</span>
            </div>
            <div class="li-dev">
                <span>全球最大的迪士尼乐园</span>
            </div>
        </div>
      </a>
           <a href="#">
        <div class="xh-li-left">
            <img src="https://imgs.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg" alt="">
        </div>
        <div class="xh-li-right">
            <div class="li-title">
                <span>上海迪士尼乐园</span>
            </div>
            <div class="li-ping">
                <span>232065条评论</span>
            </div>
            <div class="li-price">
                <span class="price">¥<em>429</em></span>起
                <span class="addr">浦东新区</span>
            </div>
            <div class="li-dev">
                <span>全球最大的迪士尼乐园</span>
            </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.xh-list {
  margin-top: 0.5rem;
  background-color: #fff;
  width: 100%;
  .xh-title {
    width: 100%;
    height: 0.94rem;
    font-size: 0.32rem;
    img {
      margin-top: -0.3rem;
      height: 0.3rem;
      width: 0.3rem;
      margin-left: 0.1rem;
    }
    span {
      margin-top: 0.31rem;
      display: inline-block;
    }
  }
  a {
    white-space: nowrap;
    display: line-block;
    height: 3.16rem;
    width: 100%;
    margin-top: 0.1rem;
    .xh-li-left {
      float:left;
      margin-left: 0.2rem;
    
      img {
        display: block;
        height: 2rem;
        width: 2rem;
      }
    }
    .xh-li-right {
       overflow: hidden;
       padding-left:.2rem;
       .li-title{ 
           margin-top: .2rem;
           span{
               font-size: .32rem;
               color:#212121;
           }
       }
       .li-ping{
           margin-top: .25rem;
           color:#616161;
       }
       .li-price{
           margin-top: .3rem;
           position: relative;
           .price{
               color:#ffab1e;
               font-size:.4rem;
            }
            .addr{
                position: absolute;
                right:.24rem;
                bottom: 0;
                color:#616161;
            }
       }
       .li-dev{
           margin-top: .8rem;
           color:#ff5597;
       }

    }
  }
}
</style>
