<template>
    <div>{{msg}}</div>
</template>


<script lang="ts">
import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class RbAlert extends Vue {
    // 初始化数据
    msg = 456

  }
</script>