import { configure } from '@storybook/vue';
import '@/assets/stylesheets/reset.css';
import '@/assets/stylesheets/main.css';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module)