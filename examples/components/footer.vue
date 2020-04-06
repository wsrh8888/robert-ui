<template>
  <footer class="footer">
    <div class="container">
      <div class="fotter-main">
        <h4>{{ langConfig.links }}</h4>
        <a
          href="https://github.com/ElemeFE/element"
          class="footer-main-link"
          target="_blank"
        >{{ langConfig.repo }}</a>
        <a
          href="https://github.com/ElemeFE/element/releases"
          class="footer-main-link"
          target="_blank"
        >{{ langConfig.changelog }}</a>
        <a
          href="https://github.com/ElemeFE/element/blob/dev/FAQ.md"
          class="footer-main-link"
          target="_blank"
        >{{ langConfig.faq }}</a>
        <a
          href="https://github.com/ElementUI/element-starter"
          class="footer-main-link"
          target="_blank"
        >{{ langConfig.starter }}</a>
        <a
          :href="'/#/' + lang + '/component/custom-theme'"
          class="footer-main-link"
          target="_blank"
        >{{ langConfig.theme }}</a>
        <a
          href="https://github.com/elemefe/element-react"
          class="footer-main-link"
          target="_blank"
        >Element-React</a>
        <a
          href="https://github.com/ElemeFE/element-angular"
          class="footer-main-link"
          target="_blank"
        >Element-Angular</a>
      </div>
      <div class="footer-social">dd</div>
    </div>
  </footer>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import compoLang from "../il8n/component";
let x = {
  lang: String,
  "demo-block": Array,
  footer: Object,
  header: Object
};
@Component
export default class footer extends Vue {
  get lang(): string {
    return this.$route.path.split("/")[1] || "zh-CN";
  }
  get langConfig(): string {
    const compoLang_s: any = compoLang;
    return compoLang_s.filter((config: any) => {
      return config.lang === this.lang;
    })[0]["footer"];
  }
}
</script>

<style lang="scss">
.footer {
  background-color: #f7fbfd;
  width: 100%;
  box-sizing: border-box;
  height: 340px;
}
</style>

