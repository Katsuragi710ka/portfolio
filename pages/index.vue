<template>
  <div id="index" class="page">
    <headline text="WELCOME" />
    <sub-headline text="Takahiro Yoshioka's portfolio" />
    <sub-headline text="Web Engineer" />
    <paragraph text="フロント・バックエンドを中心Web系開発をしているエンジニアです。自主開発でビジネスを実施している企業で主に新機能の追加・開発を行なっています。" />

    <div class="link-area">
      <internal-link text="経歴について見る" path="/about" />
      <internal-link text="連絡をとる" path="/contact" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import Headline from '@/components/molecules/Headline.vue';
import SubHeadline from '@/components/molecules/SubHeadline.vue';
import Paragraph from '@/components/molecules/Paragraph.vue';
import InternalLink from '@/components/molecules/InternalLink.vue';

@Component({
  head(){
    return {
      title: 'Welcome'
    }
  },
  components: {
    Headline,
    SubHeadline,
    Paragraph,
    InternalLink
  },
  transition: {
    name: 'fade'
  }
})
export default class IndexPage extends Vue {
  @Action('background/changeImage') readonly changeImage;

  get backgroundImage(): string {
    return require('@/assets/images/background/index.jpg');
  }

  created(){
    this.changeImage(this.backgroundImage);
  }
}
</script>
<style lang="scss">
#index {
  .paragraph {
    margin-top: 45px;
  }
  .link-area {
    margin-top: 120px;
  }
}
</style>