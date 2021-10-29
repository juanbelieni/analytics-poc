import googleAnalytics from '@analytics/google-analytics';

export const googleAnalyticsPlugin = googleAnalytics({
  trackingId: process.env.GOOGLE_ANALYTICS_ID,
  autoTrack: false,
});
