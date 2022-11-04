import { LogoutIcon } from '@heroicons/react/outline'

import {
  MIGRATE_BUTTON_DESCRIPTION,
  MIGRATE_BUTTON_TEXT,
} from '../../constants/strings'

type Props = {
  handleMigrateStatsButton: () => void
}

export const MigrationIntro = ({ handleMigrateStatsButton }: Props) => {
  return (
    <div className="mt-5 columns-2 items-center justify-center text-center dark:text-white sm:mt-6">
      <div className="mt-3 text-xs">{MIGRATE_BUTTON_DESCRIPTION}</div>
      <button
        type="button"
        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-center text-base font-medium text-white shadow-sm hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary-focus focus:ring-offset-2 dark:focus:ring-offset-neutral-900 sm:text-sm"
        onClick={handleMigrateStatsButton}
      >
        <LogoutIcon className="mr-2 h-6 w-6 cursor-pointer dark:stroke-white" />
        {MIGRATE_BUTTON_TEXT}
      </button>
    </div>
  )
}
