import NuxtConfiguration from '@nuxt/config';

const metaDescription = "Takahiro Yoshioka (Shantti-Y), a back-end & front-end software developer who is eager to think about better UI, animations for creating applications with great UX. If you get curious about me, please check out my Portfolio and Github Repositories";

const config: NuxtConfiguration = {
  head: {
    titleTemplate: "%s | Takahiro Yoshioka (Shantti-Y) Portfolio Web Site",
    meta: [
      { charset: 'utf-8' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:description', content: metaDescription },
      { property: 'og:site_name', content: "Takahiro Yoshioka (Shantti-Y) Portfolio Web Site" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: metaDescription }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css' },
      // TODO: get favicon.ico
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: [
    '@/assets/stylesheets/main.css',
    '@/assets/stylesheets/reset.css',
    '@/assets/stylesheets/background.css'
  ],
  loaders: {
    scss: {
      indentedSyntax: true
    }
  },
  modules: [
    '@nuxtjs/dotenv',
    'nuxt-svg'
  ],
  generate: {
    routes: [
      '/works/nikocale',
      '/works/setlify',
      '/works/yakukyari',
      '/works/dealxpert',
      '/works/portfolio'
    ]
  }
};

export default config;
