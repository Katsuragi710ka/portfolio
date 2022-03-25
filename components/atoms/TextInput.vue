<template>
  <input
    type="text"
    :name="field"
    :id="field"
    :class="classNames"
    class="text-input"
    cols="30"
    rows="10"
    autocomplete="off"
    :value="value"
    @change="e => handleChanged(e)"
    @input="e => handleChanged(e)"
  />
</template>
<script lang="ts">
import { Component, Prop, Mixins, Model, Emit } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';

@Component
export default class TextInput extends Mixins(ClassName) {
  @Model('change', { type: String }) readonly value!: String;
  @Prop({ type: String, required: true }) readonly field;

  @Emit('change')
  handleChanged(e){
    return e.target.value;
  }
}
</script>
<style lang="scss" scoped>
  .text-input {
    height: 45px;
    background-color: rgba(2, 0, 40, 0.85);
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid rgba(2, 0, 40, 0.85);
    color: #ffffff;
    padding: 13px 12px 11px 12px;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-bottom: 2px solid #00FF9F;
      transition: 0.6s ease all;
    }
  }
  .error {
    background-color: rgba(52, 7, 7, 0.85);
    border-bottom: 2px solid rgba(52, 7, 7, 0.85);
    &:focus {
      border-bottom: 2px solid #d40e0d;
    }
    
  }
  @media all and (max-width: 599px) {
    .text-input {
      width: 100%;
    }
  }
  @media all and (min-width: 600px) {
    .text-input {
      width: 520px;
    }
  }
</style>