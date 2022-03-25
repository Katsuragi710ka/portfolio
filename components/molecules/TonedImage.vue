<template>
  <div class="toned-image" :class="classNames">
    <div class="work-image-container" :style="imageHeightStyle">
      <typography className="typography see-this-work" variant="h4" text="詳細を見る" />
      <work-image className="work-image" :src="imgSrc" :alt="name" />
    </div>
    <div class="work-header">
      <typography className="typography work-name" variant="h4" :text="name" />
      <typography className="typography work-role" variant="h5" :text="role" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop, Emit } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import WorkImage from '@/components/atoms/WorkImage.vue';
import Typography from '@/components/atoms/Typography.vue';
import IonIcon from '@/components/atoms/IonIcon.vue';
import { setTimeout } from 'timers';

@Component({
  components: {
    WorkImage,
    Typography,
    IonIcon
  }
})
export default class TonedImage extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly imgSrc;
  @Prop({ type: String, required: true}) readonly name;
  @Prop({ type: String, required: true}) readonly role;

  elementWidth = 400;

  get imageHeightStyle (): object {
    return {
      height: `${this.elementWidth * 0.66}px`
    };
  }

  @Emit()
  handleWindowResize(){
    this.elementWidth = this.$el ? this.$el.clientWidth: this.elementWidth;
  }

  mounted() {
    window.addEventListener('resize', () => {
      this.handleWindowResize();
    });
    setTimeout(() => { this.handleWindowResize }, 100);
  }

  beforeDestroy() {
    window.removeEventListener('resize', () => { 
      this.handleWindowResize();
    });
  }
}
</script>
<style lang="scss" scoped>
  @keyframes blink {
    0% { opacity: 0; }
    1% { opacity: 1; }
    25% { opacity: 0; }
    26% { opacity: 1; }
    50% { opacity: 0; }
    51% { opacity: 1; }
    75% { opacity: 0; }
    76% { opacity: 1; }
    100% { opacity: 1; }
  }
  .toned-image {
    vertical-align: top;

    .work-image-container {
      background-color: rgba(2, 0, 40, 1);
      position: relative;
      .see-this-work {
        position: absolute;
        top: 40%;
        left: 0;
        color: rgba(223, 223, 223, 1);
        padding: 0 3px 5px 3px;
        border-bottom: 1px solid rgba(223, 223, 223, 1);
        transition: all .3s;
        opacity: 0;
      }
      .work-image {
        opacity: 1;
      }
    }

    .work-header {
      margin: 0 16px;
      position: relative;

      .typography {
        color: rgba(143, 143, 143, 1);
      }
      .work-name {
        margin-top: 16px;
      }
      .work-role {
        margin-top: 6px;
      }
    }

    &:hover {
      cursor: pointer;
      .work-image-container {
        .see-this-work {
          opacity: 1;
          left: 33%;
          animation: blink .7s;
        }
        .work-image {
          opacity: 0.3;
          transition:  .6s;
        }
      }
    }
  }

  @media all and (max-width: 699px) {
    .toned-image {
      width: 100%;
      display: block;

      .work-image-container {
        width: 100%;
        max-height: 300px;

        .work-image {
          max-height: 300px;
        }
      }
    }
  }
  @media all and (min-width: 700px) {
    .toned-image {
      display: inline-block;

      .work-image-container {
        width: 100%;
        .work-image {
          max-height: 300px;
        }
      }
    }
  }
</style>