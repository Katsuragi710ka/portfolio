<template>
  <div id="works-detail" class="page">
    <headline :text="headline" />
    <paragraph className="role" :text="role" />
    <div class="external-links">
      <external-link
        name="Githubリポジトリを見る"
        iconName="logo-github"
        :url="githubUrl"
        color="rgba(175, 83, 255, 1)"
      />
      <external-link
        name="Webサイトを見る"
        iconName="ios-link"
        :url="websiteUrl"
        color="rgba(61, 113, 255, 1)"
      />
    </div>
    <carousel :screenShots="screenShots" />
    <sub-headline text="Overview" />
    <paragraph :text="overview" />
    <sub-headline text="Background" />
    <paragraph :text="background" />
    <sub-headline text="Tech Stacks" />
    <div class="tech-stack-list">
      <paragraph v-for="(tech, idx) in techStacks" :key="idx" className="tech-stacklist-item" :text="tech" />
    </div>
    <div class="link-area">
      <internal-link text="開発実績一覧に戻る" path="/works" />
      <internal-link text="連絡をとる" path="/contact" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import Carousel from '@/components/organisms/Carousel.vue';
import Headline from '@/components/molecules/Headline.vue';
import SubHeadline from '@/components/molecules/SubHeadline.vue';
import Paragraph from '@/components/molecules/Paragraph.vue';
import ExternalLink from '@/components/molecules/ExternalLink.vue';
import InternalLink from '@/components/molecules/InternalLink.vue';

import works from '@/utils/works';

@Component({
  head(){
    return {
      title: works[this.$route.params.name].headline
    }
  },
  components: {
    Carousel,
    Headline,
    SubHeadline,
    Paragraph,
    ExternalLink,
    InternalLink
  },
  async asyncData({ params }){
    const work = works[params.name];
    return {
      headline: work.headline,
      role: work.role,
      githubUrl: work.githubUrl,
      websiteUrl: work.websiteUrl,
      screenShots: work.screenShots,
      overview: work.overview,
      background: work.background,
      techStacks: work.techStacks,
      thumbnail: work.thumbnail
    }
  },
  transition: {
    name: 'fade'
  }
})
export default class WorksPage extends Vue {
  @Action('background/changeImage') readonly changeImage;

  headline: string = "";
  role: string = "";
  githubUrl: string = "";
  websiteUrl: string = "";
  screenShots: object[] = [];
  overview: string = "";
  background: string = "";
  techStacks: string[] = [];
  thumbnail: string = "";
  
  get possibleToShowGithubLink(): boolean {
    return typeof this.githubUrl !== undefined;
  }

  get possibleToShowWebsiteLink(): boolean {
    return typeof this.websiteUrl !== undefined;
  }

  get backgroundImage(){
    return this.thumbnail;
  }

  created(){
    this.changeImage(this.backgroundImage);
  }
}
</script>
<style lang="scss">
#works-detail {
  .headline {
    margin-bottom: 14px;
  }
  .role {
    margin-bottom: 45px;
  }
  .sub-headline {
    margin-top: 55px;
    margin-bottom: 25px;
  }
  .link-area {
    margin-top: 65px;
  }

  .tech-stacklist-item {
    margin: 5px 0;
  }
}

@media all and (max-width: 599px) {
  #works-detail {
    .external-links {
      margin-bottom: 40px;
      height: 100%;
    }
  }
}

@media all and (min-width: 600px) {
  #works-detail {
    .external-links {
      margin-bottom: 60px;
    }
  }
}
</style>