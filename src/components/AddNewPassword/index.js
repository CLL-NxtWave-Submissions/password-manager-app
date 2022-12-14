import {Component} from 'react'
import './index.css'

import {v4 as uuidv4} from 'uuid'

const domainInitialBackgroundColorClassList = [
  'domain-initial-background-violet',
  'domain-initial-background-gold',
  'domain-initial-background-green',
  'domain-initial-background-orange',
  'domain-initial-background-jade',
  'domain-initial-background-red',
  'domain-initial-background-blue',
]

const RANDOM_MAX_NUM = 1000
const getRandomDomainInitialBackgroundColorClass = () => {
  const randomBackgroundColorClassListIndex =
    Math.floor(Math.random() * RANDOM_MAX_NUM) %
    domainInitialBackgroundColorClassList.length

  return domainInitialBackgroundColorClassList[
    randomBackgroundColorClassListIndex
  ]
}

export default class AddNewPassword extends Component {
  state = {
    domainName: '',
    username: '',
    password: '',
  }

  onDomainNameChange = domainChangeEvent => {
    const updatedDomainName = domainChangeEvent.target.value

    this.setState({
      domainName: updatedDomainName,
    })
  }

  onUsernameChange = usernameChangeEvent => {
    const updatedUsername = usernameChangeEvent.target.value

    this.setState({
      username: updatedUsername,
    })
  }

  onPasswordChange = passwordChangeEvent => {
    const updatedPassword = passwordChangeEvent.target.value

    this.setState({
      password: updatedPassword,
    })
  }

  onAddNewPassword = addNewPasswordEvent => {
    addNewPasswordEvent.preventDefault()

    const uniqueIdForNewPasswordEntry = uuidv4()
    const randomDomainInitialBackgroundColorClass = getRandomDomainInitialBackgroundColorClass()
    const newPasswordData = {
      id: uniqueIdForNewPasswordEntry,
      ...this.state,
      domainInitialBackgroundColor: randomDomainInitialBackgroundColorClass,
    }

    const {addNewPasswordHandler} = this.props

    addNewPasswordHandler(newPasswordData)

    this.setState({
      domainName: '',
      username: '',
      password: '',
    })
  }

  onRender() {
    const {domainName, username, password} = this.state
    const currentViewportWidth = window.innerWidth

    return (
      <div className="add-new-password-bg-container">
        <img
          className="add-new-password-img"
          src={
            currentViewportWidth < 768
              ? 'https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'
          }
          alt="password manager"
        />
        <form
          className="add-new-password-form-input-container"
          onSubmit={this.onAddNewPassword}
        >
          <h1 className="form-input-header">Add New Password</h1>
          <div className="form-input-container">
            <div className="form-input-img-container">
              <img
                className="form-input-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
            </div>
            <input
              className="form-input"
              type="text"
              placeholder="Enter Website"
              onChange={this.onDomainNameChange}
              value={domainName}
            />
          </div>

          <div className="form-input-container">
            <div className="form-input-img-container">
              <img
                className="form-input-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
            </div>
            <input
              className="form-input"
              type="text"
              placeholder="Enter Username"
              onChange={this.onUsernameChange}
              value={username}
            />
          </div>

          <div className="form-input-container">
            <div className="form-input-img-container">
              <img
                className="form-input-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
            </div>
            <input
              className="form-input"
              type="password"
              placeholder="Enter Password"
              onChange={this.onPasswordChange}
              value={password}
            />
          </div>

          <button className="form-submit-button" type="submit">
            Add
          </button>
        </form>
      </div>
    )
  }
}
