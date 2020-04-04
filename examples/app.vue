<template>
  <div>
    <div style="width:400px;margin-left:50px;margin-top:20px;">
      <div>alert组件</div>
      <rb-alert type="warning" show-icon>
        <template slot="title">
          <div>标题</div>
        </template>
        <template>
          <div>sfdsfdsfd</div>
        </template>
      </rb-alert>
      <div>icon组件</div>
      <rb-icon name="warning"></rb-icon>
    </div>

    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
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

