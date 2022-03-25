import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ClassName extends Vue {
  @Prop({ type: String, required: false, default: '' }) readonly className;

  get classNames(){
    return this.className.split(/\s/);
  }
}