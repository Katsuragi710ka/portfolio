import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Copyright from '@/components/molecules/Copyright.vue';

storiesOf('molecules/Copyright', module)
  .add('differentFromTo', () => ({
    components: { Copyright },
    data(){
      return {
        from: 2015,
        to: 2019
      }
    },
    template: '<copyright :from="from" :to="to" />'
  }))
  .add('sameFromTo', () => ({
    components: { Copyright },
    data() {
      return {
        from: 2019,
        to: 2019
      }
    },
    template: '<copyright :from="from" :to="to" />'
  }))
;