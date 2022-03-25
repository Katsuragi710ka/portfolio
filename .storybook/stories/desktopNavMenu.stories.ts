import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import DesktopNavMenu from '@/components/organisms/DesktopNavMenu.vue';

storiesOf('organisms/DesktopNavMenu', module)
  .add('plane', () => ({
    components: { DesktopNavMenu },
    template: '<desktop-nav-menu />'
  }))
;