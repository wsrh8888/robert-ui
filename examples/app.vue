<template>
    <div>
        <rb-alert title="dddd" class="ddd"></rb-alert>
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

