import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import TextareaInput from '@/components/atoms/TextareaInput.vue';

storiesOf('atoms/TextareaInput', module)
  .add('plane', () => ({
    components: { TextareaInput },
    data() {
      return { name: 'message', value: '' }
    },
    template: '<textarea-input :field="name" v-model="value" />'
  }))
  .add('withText', () => ({
    components: { TextareaInput },
    data() {
      return { name: 'message', value: 'Hello, do you wanna play?' }
    },
    template: '<textarea-input :field="name" v-model="value" />'
  }))
  .add('withError', () => ({
    components: { TextareaInput },
    data() {
      return { name: 'message', value: 'Hello, do you wanna play?' }
    },
    template: '<textarea-input className="error" :field="name" v-model="value" />'
  }))
  ;