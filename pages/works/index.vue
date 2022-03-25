<template>
  <div id="works" class="page">
    <headline text="WORKS" />
    <div class="work-set">
      <nuxt-link
        v-for="(work, idx) in workList"
        :key="idx"
        :to="work.path"
        class="work"
      >
        <toned-image
          :imgSrc="work.img"
          :name="work.name"
          :role="work.role"
        />
      </nuxt-link>
    </div>
    <div class="link-area">
      <internal-link text="連絡をとる" path="/contact" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import Headline from '@/components/molecules/Headline.vue';
import TonedImage from '@/components/molecules/TonedImage.vue';
import InternalLink from '@/components/molecules/InternalLink.vue';

import works from '@/utils/works';

@Component({
  head(){
    return {
      title: 'Works'
    }
  },
  components: {
    Headline,
    TonedImage, 
    InternalLink
  },
  transition: {
    name: 'fade'
  }
})
export default class WorksPage extends Vue {
  @Action('background/changeImage') readonly changeImage;

  get workList(): {
    name: string,
    role: string,
    img: string,
    path: string
  }[] {
    return Object.keys(works).map(key => {
      const work = works[key];
      return {
        name: work.headline,
        role: work.roleShort,
        img: work.thumbnail,
        path: `/works/${key}`
      }
    });
  }

  get backgroundImage(): string {
    return require('@/assets/images/background/works.jpg');
  }

  created(){
    this.changeImage(this.backgroundImage);
  }
}
</script>
<style lang="scss">
#works {
  .toned-image {
    margin-bottom: 64px;
    align-items: start;
  }
  .link-area {
    margin-top: 120px;
  }
}

@media all and (max-width: 699px) {
  #works {
    .toned-image {
      width: 100%;
    }
  }
}

@media all and (min-width: 700px) {
  #works {
    .work {
      width: calc(50% - 35px);
      display: inline-block;

      &:nth-child(odd){
        margin-right: 35px;
      }
      &:nth-child(even){
        margin-left: 35px;
      }
    }
  }
}
</style>