import Analytics from 'analytics';
import { googleAnalyticsPlugin } from './google-analytics';
import { googleTagManagerPlugin } from './google-tag-manager';

const analytics = Analytics({
  app: 'website',
  debug: true,
  plugins: [googleAnalyticsPlugin, googleTagManagerPlugin],
});

export default (_context, inject) => {
  inject('analytics', analytics);
};
