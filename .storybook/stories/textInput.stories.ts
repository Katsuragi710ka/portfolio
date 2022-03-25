import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import TextInput from '@/components/atoms/TextInput.vue';

storiesOf('atoms/TextInput', module)
  .add('plane', () => ({
    components: { TextInput },
    data() {
      return { name: 'message', value: '' }
    },
    template: '<text-input :field="name" v-model="value" />'
  }))
  .add('withText', () => ({
    components: { TextInput },
    data() {
      return { name: 'message', value: 'Hello, do you wanna play?' }
    },
    template: '<text-input :field="name" v-model="value" />'
  }))
  .add('withError', () => ({
    components: { TextInput },
    data() {
      return { name: 'message', value: 'Hello, do you wanna play?' }
    },
    template: '<text-input className="error" :field="name" v-model="value" />'
  }))
  ;