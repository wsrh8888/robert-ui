<template>
    <transition name="el-alert-fade">
        <div class="rb-alert">
            <i></i>
            <slot>{{ title }}</slot>
        </div>
    </transition>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class RbAlert extends Vue {
    @Prop({
        type: String,
        default: ""
    })
    public title: string;

    get MyName(): string {
        return `ddd`;
    }

    // methods
    sayHello(): void {
        // alert(`Hello ${this.name}`)
    }

    mounted() {
        this.sayHello();
    }
}
</script>