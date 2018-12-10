import React from 'react'

// here we can see what the context object looks like
// const context = React.createContext('english')
// console.log(context)
// export default context

// passing in a default value of 'english' into LanguageContext
const Context = React.createContext('english')

export class LanguageStore extends React.Component {
  state = { language: 'english' }

  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context
