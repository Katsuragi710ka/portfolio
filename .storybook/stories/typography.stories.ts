import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Typography from '@/components/atoms/Typography.vue';

storiesOf('atoms/Typography', module)
  .add('p', () => ({
    components: { Typography },
    data() {
      return { variant: 'p', text: "Hello world" }
    },
    template: '<typography :variant="variant" :text="text"/>'
  }))
  .add('h1', () => ({
    components: { Typography },
    data() {
      return { variant: 'h1', text: "Hello world" }
    },
      template: '<typography :variant="variant" :text="text"/>'
  }))
  .add('h2', () => ({
    components: { Typography },
    data() {
      return { variant: 'h2', text: "Hello world" }
    },
      template: '<typography :variant="variant" :text="text"/>'
  }))
  .add('h3', () => ({
    components: { Typography },
    data() {
      return { variant: 'h3', text: "Hello world" }
    },
      template: '<typography :variant="variant" :text="text"/>'
  }))
  .add('h4', () => ({
    components: { Typography },
    data() {
      return { variant: 'h4', text: "Hello world" }
    },
      template: '<typography :variant="variant" :text="text"/>'
  }))
  .add('h5', () => ({
    components: { Typography },
    data() {
      return { variant: 'h5', text: "Hello world" }
    },
      template: '<typography :variant="variant" :text="text"/>'
  }))
  .add('h6', () => ({
    components: { Typography },
    data() {
      return { variant: 'h6', text: "Hello world" }
    },
      template: '<typography :variant="variant" :text="text"/>'
  }))
  ;