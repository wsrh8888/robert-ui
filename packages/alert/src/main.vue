<template>
   <transition>
    <div>
      <i ></i>
      <slot>{{ title }}</slot>
    </div>
  </transition>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class RbAlert extends Vue {
  @Prop({
    type: String,
    default: ''
  })
  public title: string

  name:string = 'Simon Zhang'

  // computed
  get MyName():string {
    return `My name is ${this.name}`
  }

  // methods
  sayHello():void {
    // alert(`Hello ${this.name}`)
  }

  mounted() {
    this.sayHello();
  }

}
</script>