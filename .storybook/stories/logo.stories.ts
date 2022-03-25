import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Logo from '@/components/atoms/Logo.vue';

storiesOf('atoms/Logo', module)
  .add('plane', () => ({
    components: { Logo },
    template: '<logo />'
  }))
  ;