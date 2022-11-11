import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { AlertProvider } from './context/AlertContext'
import {
  gameModeSetting,
  isHighContrastSetting,
  isSystemDark,
  themeSetting,
} from './lib/localStorage'
import { initPlausible, plausibleSettings } from './plausible'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

initPlausible()

// send settings via Plausible once
const theme = themeSetting._getRaw()
plausibleSettings(
  theme != null ? theme : isSystemDark ? 'system dark' : 'system light',
  gameModeSetting.get(),
  isHighContrastSetting.get()
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
