import './index.css'

const PasswordItem = props => {
  const {itemData, onItemDelete, revealPassword} = props
  const {
    id,
    domainName,
    username,
    password,
    domainInitialBackgroundColor,
  } = itemData
  const domainNameInitial = domainName.slice(0, 1).toUpperCase()

  const onPasswordDeleteAction = () => onItemDelete(id)

  return (
    <li className="password-item-container">
      <div className="password-item-content-container">
        <div
          className={`password-item-domain-initial-container ${domainInitialBackgroundColor}`}
        >
          <p className="password-item-domain-initial">{domainNameInitial}</p>
        </div>

        <div className="password-item-data-container">
          <p className="domain-name">{domainName}</p>
          <p className="username">{username}</p>
          {revealPassword ? (
            <p className="password-text">{password}</p>
          ) : (
            <img
              className="password-stars-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </div>
      </div>

      <button
        // testid="delete"
        type="button"
        className="password-item-delete-button"
        onClick={onPasswordDeleteAction}
      >
        <img
          className="password-item-delete-button-img"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
