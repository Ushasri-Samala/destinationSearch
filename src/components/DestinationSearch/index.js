// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="search-container">
          <h1 className="search-header">Destination Search</h1>
          <div className="search-input">
            <input
              type="search"
              value={searchInput}
              placeholder="search"
              className="search"
              onChange={this.onChangeSearchInput}
            />
            <img
              className="search-img"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <ul className="list-container">
            {searchResults.map(eachUser => (
              <DestinationItem key={eachUser.id} userDetails={eachUser} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
