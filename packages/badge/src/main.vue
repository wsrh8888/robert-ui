<template>
  <div class="rb-badge">
    <slot></slot>
    <transition>
      <sup
        v-text="content"
        v-show="!hidden && (content || content === 0 || isDot)"
        class="rb-badge__content"
        :class="[
          'el-badge__content--' + type,
          {
            'is-fixed': $slots.default,
            'is-dot': isDot
          }
        ]"
      ></sup>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class RbBadge extends Vue {
  @Prop({
    type: [String, Number],
    required: true
  })
  public value: string | number; //显示值

  @Prop({
    type: Number
  })
  public max: number; //最大值，超过会显示{max}+

  @Prop({
    type: Boolean,
    default: false
  })
  public isDot: boolean; //小原点

  @Prop({
    type: Boolean,
    default: false
  })
  public hidden: boolean; //隐藏badge

  @Prop({
    type: String
  })
  public type: string; //类型

  get content(): string | number {
    if (this.$props.isDot) {
      return;
    }
    const value = this.value;
    const max = this.max;

    if (typeof value === "number" && typeof max === "number") {
      return max < value ? `${max}+` : `${value}`;
    }
    return value;
  }
}
</script>
