import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import SocialButton from '@/components/molecules/SocialButton.vue';

storiesOf('molecules/SocialButton', module)
  .add('twitter', () => ({
    components: { SocialButton },
    data() {
      return { name: 'twitter', url: 'https://twitter.com' }
    },
    template: '<social-button :name="name" :url="url" />'
  }))
  .add('facebook', () => ({
    components: { SocialButton },
    data() {
      return { name: 'facebook', url: 'https://www.facebook.com' }
    },
    template: '<social-button :name="name" :url="url" />'
  }))
  .add('github', () => ({
    components: { SocialButton },
    data() {
      return { name: 'octocat', url: 'https://github.com' }
    },
    template: '<social-button :name="name" :url="url" />'
  }))
  .add('linkedin', () => ({
    components: { SocialButton },
    data() {
      return { name: 'linkedin', url: 'https://www.linkedin.com/in' }
    },
    template: '<social-button :name="name" :url="url" />'
  }))
;