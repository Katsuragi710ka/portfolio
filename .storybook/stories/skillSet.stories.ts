import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import SkillSet from '@/components/organisms/SkillSet.vue';

storiesOf('organisms/SkillSet', module)
  .add('green', () => ({
    components: { SkillSet },
    data() {
      return {
        category: {
          name: 'JavaScript',
          icon: 'logo-javascript',
          color: 'rgba(67, 239, 107, 1)'
        },
        skills: [
          { name: 'JavaScript', percentage: 80 },
          { name: 'Vue.js', percentage: 70 },
          { name: 'React', percentage: 70 },
          { name: 'Webpack', percentage: 60 },
          { name: 'TypeScript', percentage: 60 }
        ],
      }
    },
    template: `<skill-set :category="category" :skills="skills" />`
  }))
  .add('red', () => ({
    components: { SkillSet },
    data() {
      return {
        category: {
          name: 'BackEnd',
          icon: 'md-cube',
          color: 'rgba(201, 53, 53, 1)'
        },
        skills: [
          { name: 'Ruby', percentage: 80 },
          { name: 'Kotlin', percentage: 60 },
          { name: 'Rails', percentage: 80 },
          { name: 'SpringBoot', percentage: 60 },
          { name: 'Postgresql', percentage: 70 }
        ]
      }
    },
    template: `<skill-set :category="category" :skills="skills" />`
  }))
  .add('orange', () => ({
    components: { SkillSet },
    data() {
      return {
        category: {
          name: 'Markup',
          icon: 'md-tv',
          color: 'rgba(241, 133, 51, 1)'
        },
        skills: [
          { name: 'HTML5', percentage: 80 },
          { name: 'CSS3', percentage: 80 },
          { name: 'Sass/Scss', percentage: 70 }
        ]
      }
    },
    template: `<skill-set :category="category" :skills="skills" />`
  }))
  .add('purple', () => ({
    components: { SkillSet },
    data() {
      return {
        category: {
          name: 'Others',
          icon: 'md-list',
          color: 'rgba(71, 66, 228, 1)'
        },
        skills: [
          { name: 'Git', percentage: 80 },
          { name: 'Github', percentage: 80 },
          { name: 'Gitlab', percentage: 70 },
          { name: 'Docker', percentage: 70 }
        ],
      }
    },
    template: `<skill-set :category="category" :skills="skills" />`
  }))
  ;