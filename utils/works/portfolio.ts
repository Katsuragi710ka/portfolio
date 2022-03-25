import { Work } from '@/utils/works';

const work: Work = {
  headline: 'ポートフォリオ',
  role: 'Web開発/設計(個人開発)',
  githubUrl: "https://github.com/Shantti-Y/Shantti-Y.github.io",
  websiteUrl: "https://shanttiy.netlify.com",
  screenShots: [
    { src: require('@/assets/images/works/portfolio/desktop1.jpg'), alt: 'portfolio-pic-1' },
    { src: require('@/assets/images/works/portfolio/desktop2.jpg'), alt: 'portfolio-pic-2' },
    { src: require('@/assets/images/works/portfolio/mobile1.jpg'), alt: 'portfolio-pic-3' },
    { src: require('@/assets/images/works/portfolio/mobile2.jpg'), alt: 'portfolio-pic-4' }
  ],
  overview: "私のポートフォリオサイトです。サイバーパンクをイメージしたデザインにしています。",
  background: "自分の履歴や開発実績についてただ載せるだけでなく、新しい技術・ツールの実験場としても運用しています。",
  techStacks: [
    "HTML5",
    "CSS3",
    "Sass/Scss",
    "JavaScript",
    "Babel",
    "Vue.js",
    "Nuxt.js",
    "TypeScript"
  ],
  roleShort: 'Web開発/設計',
  thumbnail: require('@/assets/images/works/portfolio/desktop1.jpg'),
};

export default work;