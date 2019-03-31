<template>
    <div class="head">
        <div class="head_left">
            <span class="iconfont">&#xe6bc;</span>
        </div>
        <div>
        </div>
        <div class="head_input">
            <span class="iconfont sousuo">&#xe60b;</span>
            <input type="text" placeholder="请输入你要查询的信息">
        </div>

        <div class="head_right">
            <span>城市</span>
            <span class="iconfont">&#xe6aa;</span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'vhead'
}
</script>
<style lang="less" scoped>
@import url('~style/quanju.less');
.head{
    
    width: 100%;
    height: .86rem;
    line-height: .86rem;
    background: @quan_color;
    color: white;
    overflow: hidden;
    display: flex;
    .head_left{
        width: 1.1rem;
        text-align:center;
        margin-left: .1rem;
    }
    .head_input{
        position: relative;
        display: flex;
        width: 100%;
        overflow: hidden;
        .sousuo{
            z-index:5;
            color:#8a8a8a;
            position: absolute;
            right:.2rem;
        }
        input{
            width: 100%;
            height:.64rem;
            margin-top: .12rem;
            border-radius: .1rem;
            padding-left:.50rem;
        }
    }

    .test{
        width: 50px;;
        height: 20px;
        background-color: red;
    }

    .head_right{  
        text-align:center;
        width: 1.5rem;
        margin-right: .1rem;
    }
}
</style>
