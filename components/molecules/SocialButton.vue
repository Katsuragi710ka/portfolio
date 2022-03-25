<template>
  <a class="sns-button" :class="classNames" :href="url" target="_blank">
    <ion-icon class="ion-icon" :name="ionIconName" :size="22" />
  </a>
</template>
<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import IonIcon from '@/components/atoms/IonIcon.vue';

@Component({
  components: {
    IonIcon
  }
})
export default class SocialButton extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly name;
  @Prop({ type: String, required: true }) readonly url;

  get ionIconName(): string {
    return `logo-${this.name}`;
  }
}
</script>
<style lang="scss" scoped>
  .sns-button {

    .ion-icon {
      color: #00ff9f;
    }
  }
</style>