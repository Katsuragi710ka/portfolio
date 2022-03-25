import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import ContactForm from '@/components/organisms/ContactForm.vue';

storiesOf('organisms/ContactForm', module)
  .add('plane', () => ({
    components: { ContactForm },
    template: '<contact-form />'
  }))
  ;