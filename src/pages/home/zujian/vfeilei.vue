<template>
  <div class="feilei">
    <swiper>
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="(item,index) in page" :key="index">
          <div class="img-cent">
            <div class="img-icon">
              <img
                class="img-icon-con"
                :src='item.url'
                alt
              >
            </div>
          </div>
          <div>
            <p>{{item.miao}}</p>
          </div>
        </div>

      </swiper-slide>


    </swiper>

  </div>
</template>
<script>
export default {
  data (){
    return {
      iconlist:[
        {id:'001',url:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',miao:'景点旅游'},
        {id:'002',url:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',miao:'景点旅游'},
        {id:'003',url:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',miao:'景点旅游'},
        {id:'004',url:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',miao:'景点旅游'},
        {id:'005',url:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',miao:'景点旅游'},
        {id:'006',url:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',miao:'景点旅游'},
        {id:'007',url:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',miao:'景点旅游'},
        {id:'008',url:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',miao:'景点旅游'},
        {id:'009',url:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',miao:'景点旅游9'}
        ]
    }
  },
  computed :{
    pages(){
 
      const pages = []
      this.iconlist.forEach((item, index) => {
        const page = Math.floor(index/8)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
};
</script>
<style lang="less" scoped>
.feilei,.swiper-container,.swiper-slide {
  background-color:#ffffff ;
  width: 100%;
  height: 3.8rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .icon {
    width: 25%;
    height: 1.9rem;
    .img-cent {
      margin-top: 0.2rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .img-icon {
        width: 1.1rem;
        height: 1.1rem;
        .img-icon-con {
          height: 100%;
        }
      }
    }
    p {
      margin-top: 0.1rem;
      text-align: center;
    }
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
}
</style>

