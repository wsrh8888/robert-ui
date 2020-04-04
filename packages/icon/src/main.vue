<template>
  <i :class="'rb-icon-' + name"></i>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class RbIcon extends Vue {
  @Prop({
    type: String,
    required: true
  })
  public name: string; //矢量图名称
}
</script>
