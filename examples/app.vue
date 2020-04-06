<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header v-if="lang !== 'play'"></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <main-footer v-if="lang !== 'play' && !isComponent"></main-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import footer from "./components/footer.vue";

@Component({
  components: {
    mainFooter: footer
  },
  watch: {}
})
export default class App extends Vue {
  // 初始化数据
  msg = 123;
  hello() {
    alert("Hello World!");
  }
}
</script>

<style lang="css">
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-weight: 400;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}
</style>

