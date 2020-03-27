<template>
  <div class="top-bar">
    <div class="left">
      <span class="iconfont icon-zhibo"></span>
    </div>
    <div class="middle">
      <div class="item" :class="topIndex==0?'active':''">
        <span @click="topChang(0)">关注</span>
        <div :class="topIndex==0?'active1':''"></div>
      </div>
      <div class="item" :class="topIndex==1?'active':''">
        <span @click="topChang(1)">推荐</span>
        <div :class="topIndex==1?'active1':''"></div>
      </div>
    </div>
    <div class="right">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topIndex: 1
    };
  },
  methods: {
    topChang(el) {
      this.topIndex = el;
    }
  }
};
</script>

<style scoped>
.top-bar {
  width: 100%;
  height: 50px;
  font-size: 18px;
  color: #ccc;
  padding: 20px;
  display: flex;
  box-sizing: border-box;
  position: fixed;
  z-index: 999;
  align-items: center;
}
.left,
.right {
  width: 20%;
}
.iconfont {
  font-size: 30px;
}
.middle {
  width: 60%;
  text-align: center;
}
.middle .item {
  padding: 10px;
  display: inline-block;
}
.middle .active {
  color: #fff;
}
.middle .active1 {
  width: 23px;
  position: absolute;
  height: 11px;
  /* text-align: center; */
  transform: translateX(6px);
  color: #fff;
  border-bottom: 3px solid #fff;
}
.right {
  text-align: right;
}
</style>