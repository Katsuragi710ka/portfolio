<template>
  <div id="about" class="page">
    <headline text="ABOUT" />
    <paragraph text="はじめまして！平成4年生まれの吉岡と申します。(Web上ではShantti-Y(シャンティワイ)と名乗っています)。" />
    <paragraph text="2018年にWeb系の自社開発企業に入社し、現在はWebエンジニアとして働いています。ソフトウェア開発全体においては主に新機能開発の要件定義、設計、コーディングなど幅広く担当し、プログラミングにおいてはサーバサイド、クライアントサイドに携わっています。" />
    <paragraph text="新しい技術に触れるのはもちろんですが、「その技術で何ができるのか」「実践したらどうなるのか」という課題解決が好きで、開発の上流〜下流まで携われるお仕事に就ければと考えています。" />
    <sub-headline text="Career" />
    <timeline />
    <div class="link-area">
      <internal-link text="スキルを見る" path="/skills" />
      <internal-link text="連絡をとる" path="/contact" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import Timeline from '@/components/organisms/Timeline.vue';
import Headline from '@/components/molecules/Headline.vue';
import SubHeadline from '@/components/molecules/SubHeadline.vue';
import Paragraph from '@/components/molecules/Paragraph.vue';
import InternalLink from '@/components/molecules/InternalLink.vue';

@Component({
  head(){
    return {
      title: 'About'
    }
  },
  components: {
    Timeline,
    Headline,
    SubHeadline,
    Paragraph,
    InternalLink
  },
  transition: {
    name: 'fade'
  }
})
export default class AboutPage extends Vue {
  @Action('background/changeImage') readonly changeImage;

  get backgroundImage(): string {
    return require('@/assets/images/background/about.jpg');
  }

  created(){
    this.changeImage(this.backgroundImage);
  }
}
</script>
<style lang="scss">
#about {
  .sub-headline {
    margin-top: 80px;
  }
  .timeline {
    margin-top: 45px;
  }
  .link-area {
    margin-top: 120px;
  }
}
</style>