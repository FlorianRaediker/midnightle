import { enUS } from 'date-fns/locale'
import { PlausibleInitOptions } from 'plausible-tracker/build/main/lib/tracker'

export const MAX_CHALLENGES = 6
export const ALERT_TIME_MS = 2000
export const LONG_ALERT_TIME_MS = 10000
export const REVEAL_TIME_MS = 350
export const WELCOME_INFO_MODAL_MS = 350
export const DISCOURAGE_INAPP_BROWSERS = true
export const ENABLE_MIGRATE_STATS = true
export const BLOWFISH_KEY = 'pWWcTC3f*KcIwpcy@Qp*=]`Hf&xFQR'
export const BLOWFISH_IV = 'n01S7}63'
export const ENABLE_ARCHIVED_GAMES = false
export const DATE_LOCALE = enUS
export const FIRST_GAME_DATE = new Date(2022, 10, 4)
export const GAME_PERIOD_IN_DAYS = 1
export const PLAUSIBLE_ENABLED = !!process.env.REACT_APP_PLAUSIBLE_DOMAIN
export const PLAUSIBLE_OPTIONS: PlausibleInitOptions = {
  trackLocalhost: true,
  domain: process.env.REACT_APP_PLAUSIBLE_DOMAIN,
  apiHost: process.env.REACT_APP_PLAUSIBLE_API_HOST || 'https://plausible.io',
}
export const PLAUSIBLE_TRACK_OUTBOUND = true
export const PLAUSIBLE_TRACK_GAMES = true
