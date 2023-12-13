// @ts-nocheck

export const FB_PIXEL_ID = '598839573936811'

export const pageview = () => {
  window.fbq('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name : any, options : any = {}) => {
  window.fbq('track', name, options)
}