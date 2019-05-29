
const u = navigator.userAgent
export const isAND = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 // 安卓
export const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
export const isWX = u.indexOf('MicroMessenger') > -1
export const isQQBrowser = u.indexOf('MQQBrowser') > -1
export const isUCBrowser = u.indexOf('UCBrowser') > -1