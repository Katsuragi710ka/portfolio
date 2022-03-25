import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import TextField from '@/components/molecules/TextField.vue';

storiesOf('molecules/TextField', module)
  .add('plane', () => ({
    components: { TextField },
    data() {
      return { field: 'Your Name', value: '' }
    },
    methods: {
      updateValue(newValue: string) {
        this.$data.value = newValue;
      }
    },
    template: '<text-field :field="field" :value="value" :valid="true" @update:value="newValue => updateValue(newValue)" />'
  }))
  .add('error', () => ({
    components: { TextField },
    data() {
      return { field: 'Your Name', value: '' }
    },
    methods: {
      updateValue(newValue: string) {
        this.$data.value = newValue;
      }
    },
    template: '<text-field :field="field" :value="value" :valid="false" @update:value="newValue => updateValue(newValue)" />'
  }))
  ;