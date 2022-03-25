import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import ExternalLink from '@/components/molecules/ExternalLink.vue';

storiesOf('molecules/ExternalLink', module)
  .add('purple', () => ({
    components: { ExternalLink },
    data(){
      return {
        name: "Visit Github Repo",
        iconName: "logo-github",
        url: "https://github.com/Shantti-Y/Chalendiary",
        color: "rgba(175, 83, 255, 1)"
      }
    },
    template: `
      <external-link
        :name="name"
        :iconName="iconName"
        :url="url"
        :color="color"
      />
    `
  }))
  .add('blue', () => ({
    components: { ExternalLink },
    data() {
      return {
        name: "Visit Website",
        iconName: "ios-link",
        url: "https://nikocale.com",
        color: "rgba(61, 113, 255, 1)"
      }
    },
    template: `
      <external-link
        :name="name"
        :iconName="iconName"
        :url="url"
        :color="color"
      />
    `
  }))
  ;