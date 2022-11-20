const gameStateKey = 'gameState'
const archiveGameStateKey = 'archiveGameState'

export type StoredGameState = {
  guesses: string[]
  solution: string
}

export const saveGameStateToLocalStorage = (
  isLatestGame: boolean,
  gameState: StoredGameState
) => {
  const key = isLatestGame ? gameStateKey : archiveGameStateKey
  localStorage.setItem(key, JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = (isLatestGame: boolean) => {
  const key = isLatestGame ? gameStateKey : archiveGameStateKey
  const state = localStorage.getItem(key)
  return state ? (JSON.parse(state) as StoredGameState) : null
}

const gameStatKey = 'gameStats_v2'

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}

export const saveStatsToLocalStorage = (gameStats: GameStats) => {
  localStorage.setItem(gameStatKey, JSON.stringify(gameStats))
}

export const loadStatsFromLocalStorage = () => {
  const stats = localStorage.getItem(gameStatKey)
  return stats ? (JSON.parse(stats) as GameStats) : null
}

function createSetting<T extends string>(
  key: string,
  defaultValue: T,
  allowedValues: T[]
) {
  return {
    get: (): T => {
      const value = localStorage.getItem(key) || defaultValue
      if ((allowedValues as string[]).includes(value)) {
        return value as T
      }
      return defaultValue
    },
    _getRaw: () => localStorage.getItem(key),
    set: (value: T) => {
      localStorage.setItem(key, value)
    },
  }
}

function createBooleanSetting(key: string, defaultValue: boolean = false) {
  return {
    get: (): boolean => localStorage.getItem(key) === '1' || defaultValue,
    set: (value: boolean) => {
      if (value) {
        localStorage.setItem(key, '1')
      } else {
        localStorage.removeItem(key)
      }
    },
  }
}

export const isSystemDark =
  'matchMedia' in window
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false

export const themeSetting = createSetting<'light' | 'dark'>(
  'theme',
  isSystemDark ? 'dark' : 'light',
  ['light', 'dark']
)

export const gameModeSetting = createSetting<'normal' | 'hard'>(
  'gameMode',
  'normal',
  ['normal', 'hard']
)

export const isHighContrastSetting = createBooleanSetting('highContrast', false)
