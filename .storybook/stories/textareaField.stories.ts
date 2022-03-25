import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import TextareaField from '@/components/molecules/TextareaField.vue';

storiesOf('molecules/TextareaField', module)
  .add('plane', () => ({
    components: { TextareaField },
    data() {
      return { field: 'Your Name', value: '' }
    },
    methods: {
      updateValue(newValue: string) {
        this.$data.value = newValue;
      }
    },
    template: '<textarea-field :field="field" :value="value" :valid="true" @update:value="newValue => updateValue(newValue)" />'
  }))
  .add('error', () => ({
    components: { TextareaField },
    data() {
      return { field: 'Your Name', value: '' }
    },
    methods: {
      updateValue(newValue: string) {
        this.$data.value = newValue;
      }
    },
    template: '<textarea-field :field="field" :value="value" :valid="false" @update:value="newValue => updateValue(newValue)" />'
  }))
  ;