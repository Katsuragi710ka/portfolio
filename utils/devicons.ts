export interface Devicon {
  name: string,
  fontType: 'plain' | 'original' | 'none'
}

export const devIconList: { [key: string]: Devicon } = {
  // languages
  html5: { name: 'html5', fontType: 'plain' },
  css3: { name: 'css3', fontType: 'plain' },
  sass: { name: 'sass', fontType: 'original' },
  javascript: { name: 'javascript', fontType: 'plain' },
  nodejs: { name: 'nodejs', fontType: 'plain' },
  babel: { name: 'babel', fontType: 'plain' },
  ruby: { name: 'ruby', fontType: 'plain' },
  kotlin: { name: 'kotlin', fontType: 'none' },
  // frameworks
  rails: { name: 'rails', fontType: 'plain' },
  springboot: { name: 'springboot', fontType: 'none' },
  express: { name: 'express', fontType: 'original' },
  vuejs: { name: 'vuejs', fontType: 'plain' },
  nuxt: { name: 'nuxt', fontType: 'none' },
  react: { name: 'react', fontType: 'original' },
  webpack: { name: 'webpack', fontType: 'plain' },
  typescript: { name: 'typescript', fontType: 'plain' },
  // others
  postgresql: { name: 'postgresql', fontType: 'plain' },
  google: { name: 'google', fontType: 'plain' },
  firebase: { name: 'firebase', fontType: 'none' },
  spotify: { name: 'spotify', fontType: 'none' },
  git: { name: 'git', fontType: 'plain' },
  gitlab: { name: 'gitlab', fontType: 'plain' },
  github: { name: 'github', fontType: 'plain' },
  trello: { name: 'trello', fontType: 'plain' },
  docker: { name: 'docker', fontType: 'plain' },
  gradle: { name: 'gradle', fontType: 'plain' },
  websocket: { name: 'websocket', fontType: 'none' },

  intellij: { name: 'intellij', fontType: 'plain' },
  visualstudio: { name: 'visualstudio', fontType: 'plain' },
  slack: { name: 'slack', fontType: 'plain' }
}