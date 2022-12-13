// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem/index'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  changeInInput = event => {
    this.setState({searchInput: event.target.value})
  }

  changingState = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filteredList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo-style"
        />
        <div className="search-suggestions-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
              className="search-style"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-input"
              value={searchInput}
              onChange={this.changeInInput}
            />
          </div>
          <ul>
            {filteredList.map(eachItem => (
              <SuggestionItem
                suggestionItems={eachItem}
                key={eachItem.id}
                clickingArrow={this.changingState}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
