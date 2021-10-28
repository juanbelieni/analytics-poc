import googleTagManager from '@analytics/google-tag-manager'

export const googleTagManagerPlugin = googleTagManager({
  containerId: process.env.GTM_ID,
})
