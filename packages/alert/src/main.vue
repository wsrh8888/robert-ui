<template>
    <transition name="rb-alert-fade">
        <div class="rb-alert"
        :class="[typeClass,center ? 'is-center' : '', 'is-' + effect]"
        role="alert"
        v-show="visible"
        >
             <i class="rb-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
            <div class="rb-alert__content">
                <span class="rb-alert__title" :class="[ isBoldTitle ]" v-if="title || $slots.title">
                    <slot name="title">{{title}}</slot>
                </span>
                <!-- <p></p>
                <p></p>
                <p></p> -->
            </div>
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
    public title: string; //标题
    @Prop({
        type: String,
        default: 'info'
    })
    public type:string //主题
    @Prop({
        type: Boolean,
        default:true
    })
    public center:Boolean  //文字是否居中
     @Prop({
        type: String,
        default:'light'
    })
    public effect:string    //选择提供的主题
    @Prop({
        type:Boolean,
        default:false
    })
    public showIcon:boolean //是否显示icon
    @Prop({
        type:String,
        default:''
    })
    public description:string //是否显示icon

    public visible:boolean = true

    get typeClass(): string {
        return `rb-alert--${this.type}`
    }

    get iconClass() :string{
        return `rb-icon-${this.type}`
    }

    get isBigIcon():string {
        return this.description || this.$slots.default ? 'is-big' : '';
    }

    get isBoldTitle():string {
        return this.description || this.$slots.default ? 'is-bold' : '';
    }
    mounted() {
    
    }
}
</script>