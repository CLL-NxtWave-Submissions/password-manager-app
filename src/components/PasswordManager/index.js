import {Component} from 'react'
import 'index.css'

export default class PasswordManager extends Component {
  state = {
    listOfPasswords: [],
  }

  onAddNewPassword = newPasswordData => {
    this.setState(previousPasswordManagerState => {
      const {listOfPasswords} = previousPasswordManagerState
      const updatedListOfPasswords = [newPasswordData, ...listOfPasswords]

      const updatedPasswordManagerState = {
        listOfPasswords: updatedListOfPasswords,
      }

      return updatedPasswordManagerState
    })
  }

  onDeletePassword = deletedPasswordEntryId => {
    this.setState(previousPasswordManagerState => {
      const {listOfPasswords} = previousPasswordManagerState
      const filteredListOfPasswords = listOfPasswords.filter(
        passwordDataEntry => passwordDataEntry.id !== deletedPasswordEntryId,
      )

      const updatedPasswordManagerState = {
        listOfPasswords: filteredListOfPasswords,
      }

      return updatedPasswordManagerState
    })
  }

  render() {
    const {listOfPasswords} = this.state

    return (
      <div className="password-manager-bg-container">
        <img
          className="brand-image"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
      </div>
    )
  }
}
