import React from 'react'
import UserCreate from './UserCreate'
import { LanguageStore } from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'
import LanguageSelector from '../components/LanguageSelector'

import '../style/App.css'

class App extends React.Component {
  render() {
    return (
      <LanguageStore>
        <div className="ui container">
          <LanguageSelector />

          <ColorContext.Provider value="primary">
            <UserCreate />
          </ColorContext.Provider>
        </div>
      </LanguageStore>
    )
  }
}

export default App
