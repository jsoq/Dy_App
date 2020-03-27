<template>
  <div class="video">
    <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    ></video-player>
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";
export default {
  props: {
    videoes: { type: Object }
  },
  data() {
    return {
      playerOptions: {
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        sources: [
          {
            src: this.videoes.src, //视频源
            type: this.videoes.type
          }
        ],
        width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: false
      },
      playing: true
    };
  },
  methods: {
    playOrStop() {
      if (this.playing) {
        this.$refs.videoPlayer.player.pause();
        this.playing = false;
      } else {
        this.$refs.videoPlayer.player.play();
        this.playing = true;
      }
    },
    play() {
      this.$refs.videoPlayer.player.load();

      this.$refs.videoPlayer.player.play();
      this.playing = true;
    },
    stop() {
      this.$refs.videoPlayer.player.pause();
      this.playing = false;
    }
  },
  components: {
    videoPlayer
  }
};
</script>

<style>
.video {
  height: 100%;
}
</style>