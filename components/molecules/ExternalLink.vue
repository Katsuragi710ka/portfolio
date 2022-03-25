<template>
  <div v-if="shouldShowLink" class="external-link" :class="classNames" :style="colorStyle">
    <ion-icon class="ion-icon" :name="iconName" :size="30" />
    <text-link class="text-link" :text="name" :path="url" :external="true" />
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import IonIcon from '@/components/atoms/IonIcon.vue';
import TextLink from '@/components/atoms/TextLink.vue';

@Component({
  components: {
    IonIcon,
    TextLink
  }
})
export default class ExternalLink extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly name;
  @Prop({ type: String, required: true }) readonly iconName;
  @Prop({ type: String, required: false }) readonly url;
  @Prop({ type: String, required: true }) readonly color;

  get colorStyle(): object {
    return {
      color: this.color,
      '--tooltip-color': this.color
    };
  }

  get shouldShowLink(): boolean {
    return typeof this.url !== 'undefined';
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
  .external-link {
      display: inline-block;
      margin-right: 38px;
    * {
      display: inline-block;
    }

    .ion-icon {
    }

    .text-link {
      margin-left: 6px;
      margin-right: 0;
      font-size: 17px;
      font-weight: bold;
    }

    &:after {
      display:block;
      content: '';
      transform: scaleX(0);  
      transition: transform 250ms ease-in-out;
      padding-top: 6px;
      border-bottom: 1px solid var(--tooltip-color);
    }

    &:hover {
      animation: blink .4s;

      &:after {
        transform: scaleX(1);
        
      }
    }
  }

  @media all and (max-width: 599px) {
    .external-link {
      margin-bottom: 18px;
    }
  }

  @media all and (min-width: 600px) {
    .external-link {
      &:after {
        margin-right: -8px;
        margin-left: -8px;
      }
    }
  }
</style>