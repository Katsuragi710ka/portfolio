<template>
  <div class="contact-form">
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="/"
    >
      <text-field
        className="field"
        field="氏名"
        :valid="isValidName"
        :value="form.name"
        @update:value="newValue => updateValue('name', newValue)"
      />
      <text-field
        className="field"
        field="Eメールアドレス"
        :valid="isValidEmail" 
        :value="form.email"
        @update:value="newValue => updateValue('email', newValue)"
      />
      <textarea-field
        className="field"
        field="メッセージ"
        :valid="isValidMessage"
        :value="form.message"
        @update:value="newValue => updateValue('message', newValue)"
      />
      <submit-button text="メール送信" @submit="() => sendMailToMe()" />
    </form>
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop, Emit } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import TextField from '@/components/molecules/TextField.vue';
import TextareaField from '@/components/molecules/TextareaField.vue';
import SubmitButton from '@/components/molecules/SubmitButton.vue';

@Component({
  components: {
    TextField,
    TextareaField,
    SubmitButton
  }
})
export default class ContactForm extends Mixins(ClassName) {
  form: { name: string, email: string, message: string } = {
    name: '',
    email: '',
    message: ''
  }

  sendButtonPushed: boolean = false;

  get isValidName(){
    const name = this.form.name;
    return !this.sendButtonPushed || name.length > 0;
  }

  get isValidEmail(){
    const email = this.form.email;
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return !this.sendButtonPushed || (email.length > 0 && emailRegex.test(email));
  }

  get isValidMessage(){
    const message = this.form.message;
    return !this.sendButtonPushed || message.length > 0;
  }

  get isAllValid(){
    return this.isValidName && this.isValidEmail && this.isValidMessage;
  }

  @Emit()
  updateValue(key, newValue){
    this.form[key] = newValue;
  }

  @Emit()
  sendMailToMe(){
    this.sendButtonPushed = true;
    if(this.isAllValid){
      const formElement = this.$el.querySelector('form');
      if(formElement) formElement.submit();
    }
  }
}
</script>
<style lang="scss" scoped>
  .contact-form {
    .field {
      margin-bottom: 40px;
    }
  }
</style>