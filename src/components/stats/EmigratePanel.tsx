import { DuplicateIcon } from '@heroicons/react/outline'
import { useState } from 'react'

import {
  MIGRATE_COPIED,
  MIGRATE_COPY,
  MIGRATE_COPY_CODE,
} from '../../constants/strings'
import { copyTextToClipboard } from '../../lib/clipboard'
import { encrypt } from '../../lib/encryption'
import { loadGameStateFromLocalStorage } from '../../lib/localStorage'
import { loadStats } from '../../lib/stats'
import { MigrationStats } from '../modals/MigrateStatsModal'

export const EmigratePanel = () => {
  const [isCopyButtonEnabled, setIsCopyButtonEnabled] = useState(true)
  const [copyButtonText, setCopyButtonText] = useState(MIGRATE_COPY)
  const stats = loadStats()
  const gameState = loadGameStateFromLocalStorage(true)

  const migrationStats: MigrationStats = {
    statistics: stats,
    gameState: gameState,
  }

  const emigrationCode = encrypt(JSON.stringify(migrationStats))

  const copyEmigrationCodeToClipboard = () => {
    copyTextToClipboard(emigrationCode)
    setCopyButtonText(MIGRATE_COPIED)
    setIsCopyButtonEnabled(false)
  }

  return (
    <div className="text-sm text-gray-500 dark:text-gray-300">
      <label
        htmlFor="message"
        className="mb-2 block text-left text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {MIGRATE_COPY_CODE}
      </label>
      <textarea
        id="emigration-code"
        readOnly={true}
        rows={8}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        value={emigrationCode}
      />
      <button
        disabled={!isCopyButtonEnabled}
        onClick={copyEmigrationCodeToClipboard}
        type="button"
        className="mt-2 inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-left text-base font-medium text-white shadow-sm hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary-focus focus:ring-offset-2 disabled:border-gray-200
          disabled:bg-white disabled:text-gray-900 disabled:focus:outline-none dark:focus:ring-offset-neutral-900 disabled:dark:border-gray-600 disabled:dark:bg-gray-800 disabled:dark:text-gray-400 sm:text-sm"
      >
        {isCopyButtonEnabled && (
          <DuplicateIcon className="mr-2 h-6 w-6 cursor-pointer dark:stroke-white" />
        )}
        {copyButtonText}
      </button>
    </div>
  )
}
