import { Work } from '@/utils/works';

const work: Work = {
  headline: 'DealXpert',
  role: 'フロント・バックエンド開発、DB設計',
  screenShots: [
    { src: require('@/assets/images/works/dealxpert/desktop1.jpg'), alt: 'dealxpert-pic-1' },
    { src: require('@/assets/images/works/dealxpert/desktop2.jpg'), alt: 'dealxpert-pic-2' },
    { src: require('@/assets/images/works/dealxpert/desktop3.jpg'), alt: 'dealxpert-pic-3' },
    { src: require('@/assets/images/works/dealxpert/desktop4.jpg'), alt: 'dealxpert-pic-4' }
  ],
  overview: "DealXpertは法人向けの営業管理システムです。顧客情報の管理にとどまらず、彼らとの関係をよりよくし、利益を勝ち取る為の解決策を導き出していきます。",
  background: "転職活動をしていた半年間、知人を通してアルバイトとして参加していたプロジェクトです。ここで主に実施していたのはフロント・バックエンドの開発、初期段階のDB設計です。半年間の間でこのアプリをイベントに出店し、クローズドユーザを獲得するに至りました。",
  techStacks: [
    "HTML5",
    "CSS3",
    "Sass/Scss",
    "JavaScript",
    "Babel",
    "Ruby",
    "Ruby on Rails",
    "React",
    "Webpack",
    "PostgreSql"
  ],
  roleShort: 'Web開発',
  thumbnail: require('@/assets/images/works/dealxpert/desktop1.jpg'),
};

export default work;