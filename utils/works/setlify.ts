import { Work } from '@/utils/works';

const work: Work = {
  headline: 'Setlify',
  role: 'フロントエンド中心のWeb開発(個人開発)',
  websiteUrl: 'https://setlify-236901.appspot.com',
  githubUrl: 'https://github.com/Shantti-Y/SetList',
  screenShots: [
    { src: require('@/assets/images/works/setlify/desktop1.jpg'), alt: 'setlify-pic-1' },
    { src: require('@/assets/images/works/setlify/desktop2.jpg'), alt: 'setlify-pic-2' },
    { src: require('@/assets/images/works/setlify/desktop3.jpg'), alt: 'setlify-pic-3' },
    { src: require('@/assets/images/works/setlify/mobile1.jpg'), alt: 'setlify-pic-4' },
    { src: require('@/assets/images/works/setlify/mobile2.jpg'), alt: 'setlify-pic-5' },
    { src: require('@/assets/images/works/setlify/mobile3.jpg'), alt: 'setlify-pic-6' }
  ],
  overview: "SetlifyはSpotify用のプレイリストを即席で作成してくれるツールです。必要なのはあなたのSpotifyアカウント、プレイリストの総再生時間、そして好きな言葉です。",
  background: "基本的に個人開発では普段業務で触れない・聞いたことないような技術やツールを使うのを目的としているのですが、Setlifyもその一つです。今回の場合、特にGCPにさわれたのが大きな成長かなと感じています。",
  techStacks: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Nodejs",
    "Express",
    "React",
    "Webpack",
    "Spotify API",
  ],
  roleShort: 'Web開発/設計',
  thumbnail: require('@/assets/images/works/setlify/desktop1.jpg'),
};

export default work;