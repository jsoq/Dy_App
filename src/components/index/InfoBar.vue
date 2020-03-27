<template>
  <div class="info">
    <div class="item address">
      <div class="item_img">
        <img src="../../assets/images/address.png" alt />
      </div>
      <span>{{info.address}}</span>
    </div>
    <div class="item">
      <span>
        {{info.name}} ·
        <small>{{info.timeout}}</small>
      </span>
    </div>
    <div class="item">
      <span>{{info.title}}</span>
    </div>
    <div class="item music_item">
      <img src="../../assets/images/douyin.png" alt />
      <div class="music_name">
        <span :data-text="info.music">{{info.music}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {};
  },
  name: "InfoBar"
};
</script>

<style scoped>
.info {
  color: #fff;
  font-size: 14px;
  padding-left: 10px;
}
.item {
  padding: 5px;
}
.address {
  width: 100px;
  display: flex;
}
.item_img {
  width: 16px;
  height: 16px;
  background: #2ecc71;
  border-radius: 5px;
  border: 1px solid #95a5a6;
}
img {
  width: 16px;
  margin-right: 5px;
}
.address span {
  display: inline-block;
  color: #fff;
  margin-left: 7px;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
}

small {
  color: #bdc3c7;
}
.music_item {
  display: flex;
}
.music_name {
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
}
.music_name span {
  display: inline-block;
  animation: toleft 5s linear infinite normal;
}
.music_name span ::after {
  content: attr(data-text);
  margin-left: 30px;
}
@keyframes toleft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 30px));
  }
}
</style>