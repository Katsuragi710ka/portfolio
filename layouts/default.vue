<template>
<transition name="television">
  <div id="default"  v-show="transitioning >= 1">
    <desktop-nav-menu
      :navs="navs"
      :socials="socials"
      :copyright="copyright"
      v-show="transitioning >= 2"
    />
    <mobile-nav-menu
      :navs="navs"
      :socials="socials"
      :copyright="copyright"
    />
    
      <div id="page-contents" :style="backgroundStyle" v-show="transitioning >= 2">
        <nuxt />
      </div>
    
  </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import DesktopNavMenu from '@/components/organisms/DesktopNavMenu.vue';
import MobileNavMenu from '@/components/organisms/MobileNavMenu.vue';
import { setTimeout } from 'timers';

const maxTransitionStepNumber = 2;

@Component({
  components: {
    DesktopNavMenu,
    MobileNavMenu
  }
})
export default class DefaultLayout extends Vue {
  @Getter('background/currentImage') readonly currentImage;

  transitioning: number = maxTransitionStepNumber;

  @Watch('currentImage')
  async onImageChanged() {
    this.transitioning = 0;
    const wait = (ms: number, callback: () => void ) => new Promise(resolve => {
      setTimeout(resolve, ms);
    }).then(() => callback());
    await wait(750, () => { this.transitioning = 1 });
    await wait(500, () => { this.transitioning = maxTransitionStepNumber });
  }

  get backgroundStyle(): object {
    return {
      backgroundImage: `linear-gradient(rgba(2, 0, 40, 0.88), rgba(2, 0, 40, 0.88)), url(${this.currentImage})`
    };
  }

  get navs(): { to: string, text: string }[] {
    return [
      { to: '/', text: 'HOME' },
      { to: '/about', text: 'ABOUT' },
      { to: '/skills', text: 'SKILLS' },
      { to: '/works', text: 'WORKS' },
      { to: '/contact', text: 'CONTACT' }
    ];
  }

  get socials(): { name: string, url: string }[] {
    return [
      { name: 'twitter', url: 'https://twitter.com/Shantti_Y' },
      { name: 'facebook', url: 'https://www.facebook.com/hammpilot' },
      { name: 'octocat', url: 'https://github.com/Shantti-Y' },
      { name: 'linkedin', url: 'https://www.linkedin.com/in/takahiro-yoshioka-a4207a141/' }
    ];
  }

  get copyright(): { from: number, to: number } {
    return {
      from: 2019,
      to: 2019
    }
  }
}

</script>
<style lang="scss">

@keyframes televisionOut {
  0% { transform: scale(1, 0.25); }
  5% { transform: scale(1, 0.15); }
  10% { transform: scale(1, 0.07); }
  15% { transform: scale(1, 0.01); }
  20% { transform: scale(0.2, 0.002); }
  90% { transform: scale(0.0, 0.001); }
  100% { transform: scale(0.0, 0.000); opacity: 0; }
}
@keyframes televisionIn {
  0% { transform: scale(0.0, 0.000); opacity: 0; }
  10% { transform: scale(0.2, 0.002); opacity: 1; }
  20% { transform: scale(0.5, 0.006); }
  30% { transform: scale(1, 0.006); }
  50% { transform: scale(1, 0.55); }
}

.television-enter-active, .television-leave-active {
  animation: televisionIn .7s;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: white;
}
.television-enter, .television-leave-to {
  animation: televisionOut .5s;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: white;
}

.fade-enter-active, .fade-leave-active {
  transition: 2.0s;
  opacity: 1;
}
.fade-enter, .fade-leave-to {
  transition: .3s;
  opacity: 0;
}

#default {
  min-height: 100vh;
  width: 100vw;
  position: relative;

  #page-contents {
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    box-sizing: border-box;
    min-height: 100vh;
    width: 100vw;
  }
}

@media all and (max-width: 599px) {
  #default {
    #page-contents {
      padding: 100px 20px;
    }
  }
}

@media all and (min-width: 600px) and (max-width: 959px) {
  #default {
    #page-contents {
      padding: 130px 32px;
    }
  }
}

@media all and (min-width: 960px) {
  #default {
    #page-contents {
      width: 100%;
      padding: 110px 108px 110px 190px;;
    }
  }
}

@media all and (min-width: 1200px) {
  #default {
    #page-contents {
      width: 100%;
      padding: 110px 178px 110px 260px;
    }
  }
}
</style>