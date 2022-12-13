// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItems, clickingArrow} = props
  const {suggestion} = suggestionItems

  const clickArrow = () => {
    clickingArrow(suggestion)
  }
  return (
    <li className="container">
      <p className="suggestion-para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-img-style"
        onClick={clickArrow}
      />
    </li>
  )
}
export default SuggestionItem
