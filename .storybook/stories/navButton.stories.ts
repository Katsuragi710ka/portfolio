import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import NavButton from '@/components/atoms/NavButton.vue';

storiesOf('atoms/NavButton', module)
  .add('home', () => ({
    components: { NavButton },
    data(){
      return { to: '/', text: 'HOME' }
    },
    template: '<nav-button :to="to" :text="text"></nav-button>'
  }))
  .add('about', () => ({
    components: { NavButton },
    data() {
      return { to: '/about', text: 'ABOUT' }
    },
    template: '<nav-button :to="to" :text="text"></nav-button>'
  }))
  .add('skills', () => ({
    components: { NavButton },
    data() {
      return { to: '/skills', text: 'SKILLS' }
    },
    template: '<nav-button :to="to" :text="text"></nav-button>'
  }))
  .add('works', () => ({
    components: { NavButton },
    data() {
      return { to: '/works', text: 'WORKS' }
    },
    template: '<nav-button :to="to" :text="text"></nav-button>'
  }))
  .add('contact', () => ({
    components: { NavButton },
    data() {
      return { to: '/contact', text: 'CONTACT' }
    },
    template: '<nav-button :to="to" :text="text"></nav-button>'
  }))
;