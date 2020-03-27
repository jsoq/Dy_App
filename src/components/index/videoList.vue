<template>
  <div class="video-list">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item,index) in videoList" :key="index">
        <div>
          <videos ref="videoss" :videoes="item"></videos>
        </div>
        <div class="infobar_warp">
          <info-bar :info="item.user"></info-bar>
        </div>
        <div class="rightbar_warp">
          <right-bar @changeCom="showComs" :follow="item.hobby"></right-bar>
        </div>
      </swiper-slide>
    </swiper>

    <transition name="up">
      <div class="comment-warp-box" v-if="showComment">
        <div class="comment-warp">
          <div class="comment-top">
            <div class="number">9852 条评论</div>
            <div class="close" @click="close">
              <img src="../../assets/images/out.png" alt />
            </div>
          </div>
          <div class="comment-body" v-for="n in 5" :key="n">
            <div class="comment-box">
              <div class="comment-item">
                <div class="user-pic">
                  <img src="../../assets/images/user.png" alt />
                </div>
                <div class="item-info">
                  <div class="reply">
                    <p class="name">前端仔{{n}}</p>
                    <p class="reply-text">
                      求今晚不加班
                      <span>03-19</span>
                    </p>
                  </div>
                  <div class="zan">
                    <span class="iconfont icon-love-b"></span>
                    <p>2.0w</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="user-talk">
          <div class="text">留下你的精彩评论吧</div>
          <div class="user-icon">
            <img src="../../assets/images/face.png" alt />
            <img src="../../assets/images/aite.png" alt />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Videos from "./Videos";
import InfoBar from "./InfoBar";
import RightBar from "./RightBar";

export default {
  components: {
    Videos,
    InfoBar,
    RightBar
  },
  data() {
    return {
      showComment: false,
      page: 0,
      videoList: [
        {
          src:
            "http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4",
          type: "video/mp4",
          user: {
            name: "测试人员1",
            address: "汕尾市",
            timeout: "15小时以前",
            title: "是什么让我这么勤奋",
            music: "@测试人员1的原声-是什么让我这么勤奋"
          },
          hobby: {
            avatar:
              "http://img.doutula.com/production/uploads/image/2020/03/27/20200327293438_tIuygG.png",
            fabulous: "19.3w",
            comment: "12.9w",
            share: "1w",
            follow: false,
            love: true
          }
        },
        {
          src:
            "http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4", //视频源
          type: "video/mp4",
          user: {
            name: "测试人员2",
            address: "广州市",
            timeout: "1天前",
            title: "我的钱呢",
            music: "@测试人员1的原声-我的钱呢"
          },
          hobby: {
            avatar:
              "http://tva3.sinaimg.cn/bmiddle/6af89bc8gw1f8onstwoheg202s02sad7.gif",
            fabulous: "2131",
            comment: "11w",
            share: "1w",
            follow: false,
            love: false
          }
        },
        {
          src:
            "http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4",
          type: "video/mp4",
          user: {
            name: "测试人员3",
            address: "汕尾市",
            timeout: "3天前",
            title: "我也想管钱",
            music: "@测试人员1的原声-我也想管钱"
          },
          hobby: {
            avatar:
              "http://img2.woyaogexing.com/2020/03/27/0ef9a2fda12e44c5bc51388b17e9e58e!400x400.jpeg",
            fabulous: "9841",
            comment: "14.9w",
            share: "1.3w",
            follow: true,
            love: true
          }
        },

        {
          src:
            "http://video.jishiyoo.com/549ed372c9d14b029bfb0512ba879055/8e2dc540573d496cb0942273c4a4c78c-15844fe70971f715c01d57c0c6595f45-ld.mp4",
          type: "video/mp4",
          user: {
            name: "测试人员4",
            address: "汕尾市",
            timeout: "1分钟前",
            title: "我得了一种病",
            music: "@测试人员1的原声-我得了一种病"
          },
          hobby: {
            avatar:
              "http://img2.woyaogexing.com/2020/03/27/8fa0be1bbb544fff94bad339ecd245a2!400x400.jpeg",
            fabulous: "9.0w",
            comment: "12.9w",
            share: "1w",
            follow: true,
            love: true
          }
        }
      ],
      swiperOptions: {
        // activeIndex:0,
        direction: "vertical",
        grabCursor: true,
        autoHeight: true,
        height: window.innerHeight,
        setWrapperSize: true,
        mousewheel: true,
        mousewheelControl: true,
        observer: true,
        observeParents: true,
        on: {
          tap: () => {
            this.playAction(this.page);
          },
          slideNextTransitionStart: () => {
            this.page += 1;
            this.nextVideo(this.page - 1);
          },
          slidePrevTransitionStart: () => {
            if (this.page >= 1) {
              this.page -= 1;
              this.preVideo(this.page);
            }
          }
        }
      }
    };
  },
  methods: {
    playAction(el) {
      this.$refs["videoss"][el].playOrStop();
    },
    nextVideo(el) {
      this.$refs["videoss"][el + 1].play();
      this.$refs["videoss"][el].stop();
    },
    preVideo(el) {
      this.$refs["videoss"][el].play();
      this.$refs["videoss"][el + 1].stop();
    },
    showComs() {
      this.showComment = true;
    },
    close() {
      this.showComment = false;
    }
  }
};
</script>

<style scoped>
.video-list {
  height: 100%;
}
.video-list .swiper-container {
  height: 100%;
  position: relative;
}
.infobar_warp {
  position: absolute;
  bottom: 55px;
  padding: 5px;
}
.rightbar_warp {
  position: absolute;
  right: 0;
  bottom: 55px;
  padding: 10px;
}
.comment-warp-box {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 500px;
  width: 100%;
  background: #fff;
  z-index: 999;
}
.comment-warp {
  position: fixed;
  bottom: 56px;
  left: 0;
  height: 500px;
  width: 100%;
  background: #fff;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: 2px 5px 2px 5px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
}
.comment-top {
  display: flex;
  height: 30px;
  justify-content: center;
  align-content: center;
  position: relative;
}

.number {
  line-height: 30px;
  font-size: 12px;
  font-weight: 550;
}
.close {
  position: absolute;
  width: 15px;
  right: 0;
  top: 5px;
  padding-right: 10px;
}
.close img {
  padding-top: 2px;
  width: 100%;
}
.comment-box {
  margin-top: 20px;
}
.comment-body {
  max-width: 450px;
  overflow: auto;
}
.comment-item {
  display: flex;
  margin-left: 15px;
}

.user-pic img {
  padding-top: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.item-info {
  margin-left: 10px;
  display: flex;
  flex: 1 1 auto;
  position: relative;
}

.reply .name {
  color: #666;
  font-size: 12px;
  line-height: 0;
}
.reply .reply-text {
  font-size: 14px;
}

.reply-text span {
  font-size: 12px;
  color: #bdc3c7;
}
.zan {
  position: absolute;
  right: 30px;
  color: #bdc3c7;
  top: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.zan .icon-love-b {
  font-size: 18px;
}
.zan p {
  font-size: 11px;
}

.user-talk {
  background: #ffffff;
  z-index: 999;
  display: flex;
  width: 100%;
  height: auto;
  position: absolute;
  padding: 10px;
  bottom: 10px;
  border-top: 1px solid #ecf0f1;
}
.user-talk .text {
  font-size: 15px;
  color: #bdc3c7;
  padding-left: 15px;
  padding-top: 8px;
}
.user-icon {
  position: absolute;
  right: 30px;
}
.user-icon img {
  margin-right: 10px;
  width: 30px;
  height: 30px;
}

.up-enter-active,
.up-leave-active {
  transform: all 0.5s;
}
.up-enter,
.up-leave-to {
  opacity: 1;
  transform: translateY(100%);
}
</style>