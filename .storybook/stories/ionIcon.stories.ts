import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import IonIcon from '@/components/atoms/IonIcon.vue';

storiesOf('atoms/IonIcon', module)
  .add('small', () => ({
    components: { IonIcon },
    data() {
      return { name: 'md-heart', size: 18 }
    },
    template: '<ion-icon :name="name" :size="size" />'
  }))
  .add('middle', () => ({
    components: { IonIcon },
    data() {
      return { name: 'md-heart', size: 30 }
    },
    template: '<ion-icon :name="name" :size="size" />'
  }))
  .add('large', () => ({
    components: { IonIcon },
    data() {
      return { name: 'md-heart', size: 42 }
    },
    template: '<ion-icon :name="name" :size="size" />'
  }))
;