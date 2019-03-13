<template>
<div class="wrapper">
     <swiper :options="swiperOption">
      <swiper-slide>
          <img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/2f5f3ea4698c9b7898db7562d89b91ed.jpg_750x200_bd3b4ce9.jpg" alt="">
      </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/942d87cc1576c333c77dc1f86af145cd.jpg_750x200_d25bf3eb.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div> 
    </swiper>
</div>

    <!--以下看需要添加-->


</template>
<script>
export default {
    name:'vswiper',
    data (){
        return {
            swiperOption:{
                pagination:".swiper-pagination",
                loop:true
            }
        }
    }
}
</script>
<style lang="less" scoped>
    
    .wrapper{
        width: 100%;
        overflow: hidden;
        height: 0rem;
        padding-bottom: 26.66%;
        .swiper-img{
            width: 100%;

        }

    }

        
</style>

