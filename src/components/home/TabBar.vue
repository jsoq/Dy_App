<template>
  <div class="tab-bar">
    <div @click="tabChang(0)" class="item">
      <router-link tag="span" to="/index" :class="tabIndex==0?'active':''">首页</router-link>
    </div>
    <div @click="tabChang(1)" class="item">
      <router-link tag="span" to="/follow" :class="tabIndex==1?'active':''">地区</router-link>
    </div>
    <div class="item">
      <span>
        <img src="../../assets/images/NT3H{MH@TXFVMC4JI(_(4}B.png" alt />
      </span>
    </div>
    <div @click="tabChang(2)" class="item">
      <span :class="tabIndex==2?'active':''">消息</span>
    </div>
    <div @click="tabChang(3)" class="item">
      <span :class="tabIndex==3?'active':''">我</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0
    };
  },
  methods: {
    tabChang(e) {
      this.tabIndex = e;
    }
  }
};
</script>

<style scoped>
.tab-bar {
  height: 50px;
  line-height: 50px;
  width: 100%;
  background: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  color: #ccc;
  font-size: 15px;
  display: flex;
  justify-items: center;
  z-index: 9;
}
.tab-bar .item {
  flex: 1;
  text-align: center;
}
.item .active {
  color: #fff;
  font-weight: bold;
}
</style>