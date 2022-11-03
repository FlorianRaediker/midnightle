export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

// ALERTS
export const WIN_MESSAGES = ['Great Job!', 'Awesome', 'Well done!']
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Not enough letters'
export const WORD_NOT_FOUND_MESSAGE = 'Word not found'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you rather to use your device's default browser."

// MODALS
export const INFO_TITLE = 'How to play'
export const INFO_TEXT =
  'Guess the word in 6 tries. After each guess, the color of the tiles will change to show how close your guess was to the word.'
export const INFO_CORRECT_WORD = 'WEARY'
export const INFO_CORRECT_INDEX = 0
export const INFO_CORRECT =
  'The letter W is in the word and in the correct spot.'
export const INFO_PRESENT_WORD = 'PILOT'
export const INFO_PRESENT_INDEX = 2
export const INFO_PRESENT = 'The letter L is in the word but in the wrong spot.'
export const INFO_ABSENT_WORD = 'VAGUE'
export const INFO_ABSENT_INDEX = 3
export const INFO_ABSENT = 'The letter U is not in the word in any spot.'

export const SETTINGS_TITLE = 'Settings'
export const HARD_MODE_TITLE = 'Hard Mode'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const DARK_MODE_TITLE = 'Dark Mode'
export const DARK_MODE_DESCRIPTION = ''
export const HIGH_CONTRAST_TITLE = 'High Contrast Mode'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'For improved color vision'

export const STATISTICS_TITLE = 'Statistics'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'New word in'
export const SHARE_TEXT = 'Share'
export const SHARE_FAILURE_TEXT =
  'Unable to share the results. This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.'
export const MIGRATE_BUTTON_TEXT = 'Transfer'
export const MIGRATE_BUTTON_DESCRIPTION =
  'Click here to transfer your statistics to a new device.'
export const TOTAL_TRIES_TEXT = 'Total tries'
export const SUCCESS_RATE_TEXT = 'Success rate'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'

export const MIGRATE_TITLE = 'Transfer your statistics'
export const MIGRATE_DESCRIPTION =
  'Copy the migration code on your old device and paste into the input on the new device.'
export const MIGRATE_SELECT_TEXT = 'This is my:'
export const MIGRATE_OLD = 'old device'
export const MIGRATE_NEW = 'new device'
export const MIGRATE_COPY_CODE = 'Copy your migration code:'
export const MIGRATE_PASTE_CODE = 'Paste your migration code:'
export const MIGRATE_COPY = 'Copy'
export const MIGRATE_COPIED = 'Copied!'
export const MIGRATE_SAVE = 'Save'
export const MIGRATE_CONFIRM =
  'Are you sure you want to override the statistics on this device? This action is not reversible.'
export const MIGRATE_RELOAD = 'The site will now reload.'

export const DATEPICKER_TITLE = 'Choose a past date'
export const DATEPICKER_CHOOSE_TEXT = 'Choose'
export const DATEPICKER_TODAY_TEXT = 'today'
export const ARCHIVE_GAMEDATE_TEXT = 'Game date'
