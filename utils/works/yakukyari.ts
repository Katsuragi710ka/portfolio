import { Work } from '@/utils/works';

const work: Work = {
  headline: '薬キャリ',
  role: 'フロント・バックエンド開発、データメンテナンス、リリース含む全体的なアプリの運用',
  websiteUrl: 'https://pcareer.m3.com',
  screenShots: [
    { src: require('@/assets/images/works/yakukyari/desktop1.jpg'), alt: 'yakukyari-pic-1' },
    { src: require('@/assets/images/works/yakukyari/desktop2.jpg'), alt: 'yakukyari-pic-2' },
    { src: require('@/assets/images/works/yakukyari/desktop3.jpg'), alt: 'yakukyari-pic-3' },
    { src: require('@/assets/images/works/yakukyari/mobile1.jpg'), alt: 'yakukyari-pic-4' },
    { src: require('@/assets/images/works/yakukyari/mobile2.jpg'), alt: 'yakukyari-pic-5' },
    { src: require('@/assets/images/works/yakukyari/mobile3.jpg'), alt: 'yakukyari-pic-6' }
  ],
  overview: "薬キャリは日本で規模の大きい薬剤師専門転職サイトの一つです。主に自社含めた多くの薬剤師専門転職エージェント企業の求人を掲載しているのが最大の特徴です。",
  background: "私がM3キャリアで携わっている中で最もビジネスインパクトの大きいアプリです。ここでは主により多くの薬剤師に訪問してもらう為の新機能開発や運用工数削減の為の改善施策を担当しています。その中でも規模の大きかった開発はレガシーjsの撤廃と新サービスの立ち上げです。前者はknockout.js -> vue.jsのリプレースをメインに、後者はDB設計や複数アプリと連携する為の機構作りを担当していました。",
  techStacks: [
    "HTML5",
    "CSS3",
    "Sass/Scss",
    "JavaScript",
    "Babel",
    "Ruby",
    "Ruby on Rails",
    "Vue.js",
    "Webpack",
    "PostgreSql"
  ],
  roleShort: 'Web開発',
  thumbnail: require('@/assets/images/works/yakukyari/desktop1.jpg'),
};

export default work;