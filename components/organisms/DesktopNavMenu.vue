<template>
  <div class="desktop-nav-menu" :class="classNames">
    <div class="bar left">
      <div class="element-container">
        <nuxt-link to="/"><logo className="element logo" /></nuxt-link>
        <div class="element nav-buttons">
          <nav-button
            v-for="(nav, idx) in navs"
            :key="idx"
            :to="nav.to"
            :text="nav.text"
          />
        </div>
        <copyright
          className="element copyright"
          :from="copyright.from"
          :to="copyright.to"
        />
      </div>
    </div>
    <div class="bar right">
      <div class="element-container">
        <div class="element social-icons">
          <social-button
            v-for="(social, idx) in socials"
            :key="idx"
            className="social-icon"
            :name="social.name"
            :url="social.url"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import Logo from '@/components/atoms/Logo.vue';
import NavButton from '@/components/atoms/NavButton.vue';
import SocialButton from '@/components/molecules/SocialButton.vue';
import Copyright from '@/components/molecules/Copyright.vue';

@Component({
  components: {
    // TODO: create a molecule that consists of IonIcon and Typography
    Logo,
    NavButton,
    SocialButton,
    Copyright
  }
})
export default class DesktopNavMenu extends Mixins(ClassName) {
  @Prop({ type: Array, required: true }) readonly navs;
  @Prop({ type: Array, required: true }) readonly socials;
  @Prop({ type: Object, required: true }) readonly copyright;
}
</script>
<style lang="scss" scoped>
  .desktop-nav-menu {
    
    .bar {
      position: fixed;
      z-index: 10;
      background: rgba(2, 0, 40, 1);

      .element-container {
        position: relative;
        height: 100vh;
      }

      .element {
        position: absolute;
        right: 0;
        left: 0;
        margin: 0 auto;
        text-align: center;
      }
    }

    .left {
      left: 0;
      width: 150px;
      
      .logo {
        width: 100px;
        height: 100px;
        top: 22px;
      }

      .nav-buttons {
        top: 160px;
      }

      .copyright {
        bottom: 36px;
      }
    }

    .right {
      right: 0;
      width: 68px;
      .social-icons {
        bottom: 36px;

        .social-icon {
          display: block;
          margin-bottom: 20px;
        }
      }
    }

    
  }

  @media all and (max-width: 959px) {
    .desktop-nav-menu {
      display: none;
    }
  }

  @media all and (min-width: 960px) {
    .desktop-nav-menu {
      display: block;
    }
  }
</style>