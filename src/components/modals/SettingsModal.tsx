import {
  DARK_MODE_DESCRIPTION,
  DARK_MODE_TITLE,
  HARD_MODE_DESCRIPTION,
  HARD_MODE_TITLE,
  HIGH_CONTRAST_MODE_DESCRIPTION,
  HIGH_CONTRAST_TITLE,
  SETTINGS_TITLE,
} from '../../constants/strings'
import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'

type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
  isHighContrastMode: boolean
  handleHighContrastMode: Function
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isHardMode,
  handleHardMode,
  isDarkMode,
  handleDarkMode,
  isHighContrastMode,
  handleHighContrastMode,
}: Props) => {
  return (
    <BaseModal title={SETTINGS_TITLE} isOpen={isOpen} handleClose={handleClose}>
      <div className="flex flex-col divide-y">
        <SettingsToggle
          settingName={DARK_MODE_TITLE}
          flag={isDarkMode}
          handleFlag={handleDarkMode}
          description={DARK_MODE_DESCRIPTION}
        />
        <SettingsToggle
          settingName={HARD_MODE_TITLE}
          flag={isHardMode}
          handleFlag={handleHardMode}
          description={HARD_MODE_DESCRIPTION}
        />
        <SettingsToggle
          settingName={HIGH_CONTRAST_TITLE}
          flag={isHighContrastMode}
          handleFlag={handleHighContrastMode}
          description={HIGH_CONTRAST_MODE_DESCRIPTION}
        />
      </div>
    </BaseModal>
  )
}
