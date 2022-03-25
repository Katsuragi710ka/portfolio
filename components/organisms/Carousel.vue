<template>
  <div class="carousel">
    <div class="screen-shots" :style="screenShotsHeightStyle">
      <div class="slide-button prev-button" :class="{ clicked: leftButtonClicked }" @click="slideToPrev">
        <ion-icon name="ios-arrow-back" :size="45" />
      </div>
      <div class="slide-button next-button" :class="{ clicked: rightButtonClicked }" @click="slideToNext">
        <ion-icon name="ios-arrow-forward" :size="45" />
      </div>
      <figure
        class="shot"
        :class="{
          'with-slide-transition': isSlidable(idx),
          'prev-shot': isPrevShot(idx),
          'next-shot': isNextShot(idx)
        }"
        v-for="(shot, idx) in screenShots"
        :key="idx"
        :style="imagePositionStyle(idx)"
      >
        <work-image className="work-image" :src="shot.src" :alt="shot.alt" />
      </figure>
    </div>
    <div class="carousel-nav">
      <div
        v-for="(_, idx) in screenShots"
        :key="idx"
        class="carousel-nav-item"
        :class="{ active: isCurrentIdx(idx) }"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop, Emit } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import WorkImage from '@/components/atoms/WorkImage.vue';
import IonIcon from '@/components/atoms/IonIcon.vue';

enum Transition {
  Inactive, Active
}

@Component({
  components: {
    WorkImage,
    IonIcon
  }
})
export default class Carousel extends Mixins(ClassName) {
  @Prop({ type: Array, required: true }) readonly screenShots;
  currentShotIdx: number = 0;
  slideDirection: number = Transition.Inactive;
  elementWidth: number = 680;

  leftButtonClicked: boolean = false;
  rightButtonClicked: boolean = false;

  get screenShotsHeightStyle (): object {
    return {
      height: `${this.elementWidth * 0.66}px`
    };
  }

  get numberOfContent(){
    return Object.keys(this.$slots).length
  }
  get minShotIdx(){
    return 0;
  }
  get maxShotIdx(){
    return this.screenShots.length - 1;
  }
  get prevShotIdx(){
    return this.currentShotIdx === this.minShotIdx ? this.maxShotIdx : this.currentShotIdx - 1 ;
  }
  get nextShotIdx(){
    return this.currentShotIdx === this.maxShotIdx ? this.minShotIdx : this.currentShotIdx + 1 ;
  }

  @Emit()
  isPrevShot(idx: number): boolean {
    return idx === this.prevShotIdx;
  }

  @Emit()
  isNextShot(idx: number): boolean {
    return idx === this.nextShotIdx;
  }

  @Emit()
  handleWindowResize(){
    this.elementWidth = this.$el ? this.$el.clientWidth: this.elementWidth;
  }

  @Emit()
  isCurrentIdx(idx: Number){
    return idx === this.currentShotIdx;
  }
  @Emit()
  isSlidable(idx: number){
    return [this.prevShotIdx, this.nextShotIdx, this.currentShotIdx].includes(idx);
  }
  @Emit()
  imagePositionStyle(idx: number): object {
    const imageLeftPosition = () => {
      const diff = idx - this.currentShotIdx;
      if(diff === -1 || diff === this.maxShotIdx){
        return `${-1 * this.elementWidth}px`;
      }else if(diff <= -2){
        return `${(diff + this.screenShots.length) * this.elementWidth}px`;
      }else{
        return `${diff * this.elementWidth}px`;
      }
    }
    return {
      left: imageLeftPosition()
    };
  }
  @Emit()
  slideToPrev(){
    if(this.slideDirection === Transition.Active) return;
    this.leftButtonClicked = true;
    const newIdx = this.currentShotIdx - 1;
    this.currentShotIdx = newIdx < this.minShotIdx ? this.maxShotIdx : newIdx;
    this.slideDirection = Transition.Active;
    setTimeout(() => {
      this.slideDirection = Transition.Inactive;
      this.leftButtonClicked = false;
    }, 700);
  }
  @Emit()
  slideToNext(){
    if(this.slideDirection === Transition.Active) return;
    this.rightButtonClicked = true;
    const newIdx = this.currentShotIdx + 1;
    this.currentShotIdx = newIdx > this.maxShotIdx ? this.minShotIdx : newIdx;
    this.slideDirection = Transition.Active;
    setTimeout(() => {
      this.slideDirection = Transition.Inactive;
      this.rightButtonClicked = false;
    }, 700);
  }

  mounted() {
    window.addEventListener('resize', () => {
      this.handleWindowResize();
    });
    this.handleWindowResize();
  }

  beforeDestroy() {
    window.removeEventListener('resize', () => { 
      this.handleWindowResize();
    });
  }
}
</script>
<style lang="scss" scoped>

@keyframes pulse {
  from {
    box-shadow: 0 0 0 0 rgba(51,51,51,1);
  }
  to {
    box-shadow: 0 0 0 1em rgba(51,51,51,0);
  }
}


  .carousel {
    width: 100%;
    max-width: 680px;
    margin: 0 auto;
    .screen-shots {
      width: 100%;
      position: relative;
      overflow-x: hidden;
      display: flex;

      .slide-button {
        position: absolute;
        width: 50px;
        height: 50px;
        justify-content: center;
        display: flex;
        align-items: center;
        background-color: rgba(160, 160, 160, 0.6);
        bottom: 10px;
        z-index: 40;

        &:hover {
          transition: all .4s;
          cursor: pointer;
          background-color: rgba(100, 100, 100, 0.6);
        }
      }
      .prev-button { left: 0; }
      .next-button { right: 0; }
      .clicked {
        animation: pulse 1.0s;
      }

      .shot {
        position: absolute;
        display: flex;
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        z-index: -1;
      }
      .with-slide-transition {
        transition: all .7s;
        z-index: 10;
      }
      .prev-shot, .next-shot {
        z-index: 9;
      }
    }

    .carousel-nav {
      margin-top: 8px;
      text-align: center;
      width: 100%;
      .carousel-nav-item {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #cccccc;
        margin: 0 5px;
        transition: .3s;
      }
      .active {
        background: #565656;
      }
    }
  }
</style>