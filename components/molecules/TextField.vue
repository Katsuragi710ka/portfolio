<template>
  <div class="text-field" :class="classNames">
    <form-label :className="`form-label ${errorClassName}`" :field="field" />
    <text-input :className="`textarea-input ${errorClassName}`" :field="field" v-model="modelValue" />
    <typography className="error-message" variant="span" :text="errorMessage" v-show="!valid" />
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop, PropSync } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import FormLabel from '@/components/atoms/FormLabel.vue';
import TextInput from '@/components/atoms/TextInput.vue';
import Typography from '@/components/atoms/Typography.vue';

@Component({
  components: {
    FormLabel,
    TextInput,
    Typography
  }
})
export default class TextareaField extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly field;
  @Prop({ type: Boolean, required: true}) readonly valid;
  @PropSync('value', { type: String, required: true }) readonly modelValue!: string;

  get errorClassName(): string {
    return this.valid ? `` : `error`;
  }

  // TODO: validation messages must be provided by functions
  get errorMessage(): string {
    if(this.field === 'Eメールアドレス') return `${this.field}を正しいフォーマットで入力してください`;
    return `${this.field}を入力してください`;
  }
}
</script>
<style lang="scss" scoped>
  @keyframes blink {
    0% { opacity: 0; }
    1% { opacity: 1; }
    25% { opacity: 0; }
    26% { opacity: 1; }
    50% { opacity: 0; }
    51% { opacity: 1; }
    75% { opacity: 0; }
    76% { opacity: 1; }
    100% { opacity: 1; }
  }
  .text-field {
    position: relative;

    .form-label {
      position: absolute;
      top: -9px;
    }

    .text-input {

    }
    .error-message {
      margin-top: 12px;
      color: #d40e0d;
      animation: blink .5s;
      display: block;
    }
  }
</style>