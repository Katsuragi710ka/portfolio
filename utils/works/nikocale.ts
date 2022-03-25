import { Work } from '@/utils/works';

const work: Work = {
  headline: 'ニコカレ',
  role: 'Web開発/DB含むアプリ設計(個人開発)',
  githubUrl: 'https://github.com/Shantti-Y/Chalendiary',
  websiteUrl: 'https://nikocale.com',
  screenShots: [
    { src: require('@/assets/images/works/nikocale/desktop1.jpg'), alt: 'nikocale-1' },
    { src: require('@/assets/images/works/nikocale/desktop2.jpg'), alt: 'nikocale-2' },
    { src: require('@/assets/images/works/nikocale/desktop3.jpg'), alt: 'nikocale-3' },
    { src: require('@/assets/images/works/nikocale/desktop4.jpg'), alt: 'nikocale-4' },
    { src: require('@/assets/images/works/nikocale/mobile1.jpg'), alt: 'nikocale-5' },
    { src: require('@/assets/images/works/nikocale/mobile2.jpg'), alt: 'nikocale-6' },
    { src: require('@/assets/images/works/nikocale/mobile3.jpg'), alt: 'nikocale-7' },
    { src: require('@/assets/images/works/nikocale/mobile4.jpg'), alt: 'nikocale-8' }
  ],
  overview: "ニコカレは'ニコニコカレンダー'の略称で、組織/チームの士気やメンバーの気持ちを見える化するツールです(wikipediaより)。",
  background: "Web系企業に勤務していた時に「社内の範囲であれば個人開発したツールを導入してもいい」という話があり、Firebase、WebSocker、React-Reduxのような普段業務で使わない技術・ツールを使うのにちょうどいい機会だと思い作りました。",
  techStacks: [
    "HTML5",
    "CSS3",
    "Sass/Scss",
    "JavaScript",
    "Babel",
    "Kotlin",
    "Spring Boot",
    "React",
    "Webpack",
    "PostgreSql",
    "Firebase",
    "Websocket"
  ],
  roleShort: 'Web開発/設計',
  thumbnail: require('@/assets/images/works/nikocale/desktop2.jpg'),
}

export default work;