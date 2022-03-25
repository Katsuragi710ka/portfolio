<template>
  <text-link className="internal-link" :text="text" :path="path" />
</template>
<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import TextLink from '@/components/atoms/TextLink.vue';

@Component({
  components: {
    TextLink
  }
})
export default class InternalLink extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly text;
  @Prop({ type: String, required: true }) readonly path;
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
  .internal-link {
    display: inline-block;
    margin-right: 50px;
    color: #00ff9f !important;
    text-decoration: none;
    font-size: 15px;
    padding: 6px 0;
    text-align: left;

    &:after {
      display: block;
      content: '';
      transform: scaleX(0);  
      transition: transform 250ms ease-in-out;
      border-bottom: 1px solid #00ff9f;
      margin-top: 10px;
    }

    &:hover {
      animation: blink .4s;

      &:after {
        transform: scaleX(1);
      }
    }
  }

  @media all and (max-width: 599px) {
    .internal-link {
      margin-bottom: 28px;
    }
  }

  @media all and (min-width: 600px) {
    .internal-link {
      &:after {
        margin-right: -8px;
        margin-left: -8px;
      }
    }
  }
</style>