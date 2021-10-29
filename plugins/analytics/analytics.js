import Analytics from 'analytics';
import { googleAnalyticsPlugin } from './google-analytics';
import { googleTagManagerPlugin } from './google-tag-manager';

const analytics = Analytics({
  app: 'website',
  plugins: [googleAnalyticsPlugin, googleTagManagerPlugin],
});

analytics.on('page', ({ payload }) => {
  console.log(`page listener ${payload.type}`)
})

export default (_context, inject) => {
  inject('analytics', analytics);
};
