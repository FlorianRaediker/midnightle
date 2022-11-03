import { CharStatus } from '@/lib/statuses'

import {
  INFO_ABSENT,
  INFO_ABSENT_INDEX,
  INFO_ABSENT_WORD,
  INFO_CORRECT,
  INFO_CORRECT_INDEX,
  INFO_CORRECT_WORD,
  INFO_PRESENT,
  INFO_PRESENT_INDEX,
  INFO_PRESENT_WORD,
  INFO_TEXT,
  INFO_TITLE,
} from '../../constants/strings'
import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  const renderExample = (
    description: string,
    word: string,
    status: CharStatus,
    statusIndex: number
  ) => (
    <>
      <div className="mb-1 mt-4 flex justify-center">
        {Array.from(word).map((c, i) => (
          <Cell
            isRevealing={statusIndex === i}
            isCompleted={true}
            value={c}
            status={statusIndex === i ? status : undefined}
            key={i}
          />
        ))}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">{description}</p>
    </>
  )

  return (
    <BaseModal title={INFO_TITLE} isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">{INFO_TEXT}</p>

      {renderExample(
        INFO_CORRECT,
        INFO_CORRECT_WORD,
        'correct',
        INFO_CORRECT_INDEX
      )}
      {renderExample(
        INFO_PRESENT,
        INFO_PRESENT_WORD,
        'present',
        INFO_PRESENT_INDEX
      )}
      {renderExample(
        INFO_ABSENT,
        INFO_ABSENT_WORD,
        'absent',
        INFO_ABSENT_INDEX
      )}

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        This is a clone of the game Wordle themed around Taylor Swift's
        Midnights –{' '}
        <a
          href="https://github.com/FlorianRaediker/midnightle"
          className="font-bold underline"
        >
          check out the source code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
