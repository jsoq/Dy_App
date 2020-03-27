<template>
  <div class="right-bar">
    <div class="rightbar-item">
      <div class="avatar-border">
        <img :src="follow.avatar" alt />
        <span
          @click="isFollow=!isFollow"
          :class="isFollow?'iconfont icon-jian-tianchong':'iconfont icon-jia'"
        ></span>
      </div>
    </div>
    <div class="item-icon">
      <span class="iconfont icon-love-b" @click="isLove=!isLove" :class="isLove?'active':''"></span>
      <p>{{follow.fabulous}}</p>
    </div>
    <div class="item-icon" @click.stop="showCom($event)">
      <span class="iconfont icon-pinglun"></span>
      <p>{{follow.comment}}</p>
    </div>
    <div class="item-icon">
      <span class="iconfont icon-fenxiang"></span>
      <p>{{follow.share}}</p>
    </div>
    <div class="rightbar-item bottom">
      <img class="bottom_img" :src="follow.avatar" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    follow: { type: Object },
    showComment: { type: Boolean }
  },
  data() {
    return {
      isLove: this.follow.love,
      isFollow: this.follow.follow
    };
  },
  methods: {
    showCom(el) {
      el.preventDefault();
      this.$emit("changeCom", this.showComment);
    }
  }
};
</script>

<style scoped>
.right-bar {
  width: 80px;
  color: #fff;
}
.rightbar-item {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.avatar-border {
  height: 50px;
  width: 50px;
  position: relative;
}
.avatar-border img {
  border-radius: 50%;
  width: 100%;
}

.iconfont {
  font-size: 35px;
}
.icon-jia,
.icon-jian-tianchong {
  z-index: 999;
  font-size: 20px;
  color: #fe2c5a;
  position: absolute;
  left: 30%;
  bottom: -20%;
}
.bottom {
  margin-left: 10%;
  /* transform: translateX(-50%); */
  width: 40px;
  height: 40px;
  border: 12px solid #000;
  border-radius: 50%;
  overflow: hidden;
  animation: rage 8s linear infinite normal;
}
.bottom_img {
  width: 100%;
}
.item-icon {
  text-align: center;
}
.active {
  color: #fe2c5a;
}

@keyframes rage {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>