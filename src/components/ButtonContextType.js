import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class ButtonContextType extends React.Component {
  // hooking up the LanguageContext in a class component
  // contextType property is a special name (must be called 'contextType')
  // static keyword adds a property directly to the class
  static contextType = LanguageContext
  render() {
    // console.log(this.context)
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
    return <button className="ui button primary">{text}</button>
  }
}
// alternatively, you can use the following syntax outside the class
// this is equivalent to doing it with static contextType = ...
// ButtonContextType.contextType = LanguageContext
// NOTE: the name "ButtonContextType" would normally just be "Button"

export default ButtonContextType
