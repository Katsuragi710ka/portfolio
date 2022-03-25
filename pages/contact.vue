<template>
  <div id="contact" class="page">
    <headline text="CONTACT" />
    <contact-form />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import Headline from '@/components/molecules/Headline.vue';
import ContactForm from '@/components/organisms/ContactForm.vue';

@Component({
  head(){
    return {
      title: 'Contact'
    }
  },
  components: {
    Headline,
    ContactForm
  },
  transition: {
    name: 'fade'
  }
})
export default class ContactPage extends Vue {
  @Action('background/changeImage') readonly changeImage;

  get backgroundImage(): string {
    return require('@/assets/images/background/contact.jpg');
  }

  created(){
    this.changeImage(this.backgroundImage);
  }
}
</script>
<style lang="scss">
#contact {
  .contact-form {
    text-align: center;
  }
}
</style>