import Plausible, { EventOptions, PlausibleOptions } from 'plausible-tracker'

import {
  PLAUSIBLE_ENABLED,
  PLAUSIBLE_OPTIONS,
  PLAUSIBLE_TRACK_OUTBOUND,
} from './constants/settings'

let plausibleTrackEvent: (
  eventName: string,
  options?: EventOptions,
  eventData?: PlausibleOptions
) => void = () => {}

export function initPlausible() {
  if (!PLAUSIBLE_ENABLED) return
  const { trackEvent, enableAutoPageviews, enableAutoOutboundTracking } =
    Plausible(PLAUSIBLE_OPTIONS)
  plausibleTrackEvent = trackEvent

  enableAutoPageviews()
  if (PLAUSIBLE_TRACK_OUTBOUND) enableAutoOutboundTracking()
}

function plausible(
  eventName: string,
  options?: EventOptions,
  eventData?: PlausibleOptions
) {
  plausibleTrackEvent(eventName, options, eventData)
}

export default plausible
