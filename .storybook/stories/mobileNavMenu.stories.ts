import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import MobileNavMenu from '@/components/organisms/MobileNavMenu.vue';

storiesOf('organisms/MobileNavMenu', module)
  .add('plane', () => ({
    components: { MobileNavMenu },
    template: '<mobile-nav-menu />'
  }))
;