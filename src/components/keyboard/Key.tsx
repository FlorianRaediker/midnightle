import classnames from 'classnames'
import { ReactNode } from 'react'

import { REVEAL_TIME_MS } from '../../constants/settings'
import { CharStatus } from '../../lib/statuses'
import { solution } from '../../lib/words'

type Props = {
  children?: ReactNode
  value: string
  grow?: string
  status?: CharStatus
  onClick: (value: string) => void
  isRevealing?: boolean
}

export const Key = ({
  children,
  status,
  grow = '1',
  value,
  onClick,
  isRevealing,
}: Props) => {
  const keyDelayMs = REVEAL_TIME_MS * solution.length

  const classes = classnames(
    'basis-0 xxshort:h-8 xxshort:text-xxs xshort:h-10 flex short:h-12 h-14 items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white',
    {
      'transition ease-in-out': isRevealing,

      'bg-key hover:bg-key-hover active:bg-key-active': !status,

      'bg-absent text-white': status === 'absent',

      'bg-present hover:bg-present-hover active:bg-present-active text-white':
        status === 'present',

      'bg-correct hover:bg-correct-hover active:bg-correct-active text-white':
        status === 'correct',
    }
  )

  const styles = {
    transitionDelay: isRevealing ? `${keyDelayMs}ms` : 'unset',
    flexGrow: grow,
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value)
    event.currentTarget.blur()
  }

  return (
    <button
      style={styles}
      aria-label={`${value}${status ? ' ' + status : ''}`}
      className={classes}
      onClick={handleClick}
    >
      {children || value}
    </button>
  )
}
