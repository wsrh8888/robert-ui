<template>
  <transition name="rb-alert-fade">
    <div
      class="rb-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      role="alert"
      v-show="visible"
    >
      <i class="rb-alert__icon" :class="[iconClass, isBigIcon]" v-if="showIcon"></i>
      <div class="rb-alert__content">
        <span class="rb-alert__title" :class="[isBoldTitle]" v-if="title || $slots.title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="el-alert__description" v-if="$slots.default && !description">
          <slot></slot>
        </p>
        <p class="el-alert__description" v-if="description && !$slots.default">{{ description }}</p>
      </div>
      <i
        class="rb-alert__closebtn"
        :class="{
          'is-customed': closeText !== '',
          'rb-icon-close': closeText === ''
        }"
        v-show="closable"
        @click="close()"
      >{{ closeText }}</i>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class RbAlert extends Vue {
  @Prop({
    type: String,
    required: true
  })
  public title: string; //标题
  @Prop({
    type: String,
    default: "info"
  })
  public type: string; //主题

  @Prop({
    type: Boolean,
    default: false
  })
  public center: Boolean; //文字是否居中

  @Prop({
    type: String,
    default: "light"
  })
  public effect: string; //选择提供的主题
  @Prop({
    type: Boolean,
    default: false
  })
  public showIcon: boolean; //是否显示icon
  @Prop({
    type: String,
    default: ""
  })
  public description: string; //是否显示icon
  @Prop({
    type: String,
    default: ""
  })
  public closeText: string; //关闭按钮自定义文本
  @Prop({
    type: Boolean,
    default: true
  })
  public closable: boolean; //是否可关闭

  public visible: boolean = true;
  get typeClass(): string {
    return `rb-alert--${this.type}`;
  }

  get iconClass(): string {
    return `rb-icon-${this.type}`;
  }

  get isBigIcon(): string {
    return this.description || this.$slots.default ? "is-big" : "";
  }

  get isBoldTitle(): string {
    return this.description || this.$slots.default ? "is-bold" : "";
  }

  close() {
    this.visible = false;
    this.$emit("close");
  }
  mounted() {}
}
</script>
