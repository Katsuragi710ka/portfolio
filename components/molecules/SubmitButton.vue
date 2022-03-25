<template>
  <button class="submit-button" @click.prevent="handleSubmit"><typography variant="span" :text="text" /></button>
</template>
<script lang="ts">
import { Component, Mixins, Prop, Emit } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import Typography from '@/components/atoms/Typography.vue';

@Component({
  components: {
    Typography
  }
})
export default class SubmitButton extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly text;

  @Emit('submit')
  handleSubmit(){
    return ;
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
  .submit-button {
    padding: 7px 12px;
    border: 2px solid #00ff9f;
    border-radius: 4px;
    background: transparent;
    color: #00ff9f;
    font-weight: bold;
    position: relative;
    
    z-index: 2;

    &:before {
      display: block;
      content: "";
      position: absolute;
      z-index: -1;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 0;
      height: 100%;
      margin: 0 auto;
      background-color: #00ff9f;
      transition: .25s ease-in-out;
    }

    &:hover {
      cursor: pointer;
      color: rgba(2, 0, 40, 1);
      * {
        animation: blink .5s;
      }

      &:before {
        width: 100%;
        animation: none;
      }
    }
  }
</style>