import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

// this is the other way to get a value out of Context object
// by using the Consumer component instead

class ButtonWithConsumer extends React.Component {
  // we can use a helper method if we need more room for logic
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen'
  }

  // helper method to return the button with color
  // just helps make the code a little more clear
  renderButton(value) {
    return (
      <button className={`ui button ${value}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

// When we use the consumer approach we do not have to setup contextType

export default ButtonWithConsumer

// Why would we want to use Consumer instead of this.context?
// Answer: when accessing multiple
