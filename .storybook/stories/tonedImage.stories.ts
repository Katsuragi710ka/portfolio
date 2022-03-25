import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import TonedImage from '@/components/molecules/TonedImage.vue';

storiesOf('molecules/TonedImage', module)
  .add('plane', () => ({
    components: { TonedImage },
    data() {
      return {
        imgSrc: require('@/assets/images/works/setlify/desktop1.jpg'),
        name: "Nikocale",
        role: "Design / Web Development"
      }
    },
    template: '<toned-image :imgSrc="imgSrc" :name="name" :role="role" />'
  }))
;