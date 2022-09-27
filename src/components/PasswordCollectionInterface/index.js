import {Component} from 'react'
import './index.css'

import PasswordItem from '../PasswordItem'

export default class PasswordCollectionInterface extends Component {
  state = {
    searchQuery: '',
    showPasswords: false,
  }

  onSearchQueryChange = searchQueryChangeEvent => {
    const updatedSearchQuery = searchQueryChangeEvent.target.value

    this.setState({
      searchQuery: updatedSearchQuery,
    })
  }

  onShowPasswords = showPasswordsEvent => {
    const isChecked = showPasswordsEvent.target.checked

    this.setState({
      showPasswords: isChecked,
    })
  }

  getFilteredPasswords = searchInput => {
    const {listOfPasswords} = this.props
    const filteredPasswords = listOfPasswords.filter(passwordDataEntry =>
      passwordDataEntry.domainName.includes(searchInput),
    )

    return filteredPasswords
  }

  render() {
    const {searchQuery, showPasswords} = this.state
    const {deletePasswordHandler} = this.props

    const filteredPasswords = this.getFilteredPasswords(searchQuery)
    const noPasswords = filteredPasswords.length === 0

    return (
      <div className="password-collection-interface-bg-container">
        <div className="password-collection-interface-header">
          <div className="password-header-count-display-search-container">
            <div className="password-header-count-display-container">
              <h1 className="password-header-text">Your Passwords</h1>
              <p className="password-count">{filteredPasswords.length}</p>
            </div>

            <div className="password-search-container">
              <div className="password-search-icon-img-container">
                <img
                  className="password-search-icon-img"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
              </div>
              <input
                type="search"
                className="password-search-input"
                placeholder="Search"
                value={searchQuery}
                onChange={this.onSearchQueryChange}
              />
            </div>
          </div>

          <hr className="horizontal-separator" />

          <div className="show-passwords-action-container">
            <input
              id="show-passwords"
              className="show-passwords-checkbox"
              type="checkbox"
              onChange={this.onShowPasswords}
            />
            <label htmlFor="show-passwords" className="show-passwords-label">
              Show Passwords
            </label>
          </div>
        </div>

        {noPasswords ? (
          <div className="no-passwords-content-container">
            <img
              className="no-passwords-img"
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
            />
            <p className="no-passwords-text">No Passwords</p>
          </div>
        ) : (
          <ul className="password-list">
            {filteredPasswords.map(filteredPasswordData => (
              <PasswordItem
                key={filteredPasswordData.id}
                itemData={filteredPasswordData}
                onItemDelete={deletePasswordHandler}
                revealPassword={showPasswords}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
