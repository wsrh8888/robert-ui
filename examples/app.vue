<template>
    <div>
        <rb-alert title="dddd" class="ddd" show-icon></rb-alert>
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
}
</script>

<style lang="css">
 body,html {
     margin: 0;
     padding: 0;
     height: 100%;
     font-weight: 400;
     font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
     -webkit-font-smoothing: antialiased;
     -webkit-tap-highlight-color:transparent;
 }
</style>

