import React from 'react'

import '../styles/notfound.scss'

const NotFound = ({ keyConst, history }) => {
  const buttonText = window.sessionStorage.getItem(keyConst) === null ? "Login" : "Home"

  const handleClick = () => {
    if (window.sessionStorage.getItem(keyConst) === null) history.push('/login')
    else history.push('/home')
  }
  return (
    <main className="wrapper">
      <div className="box">
        <h3>Url not found</h3>
        <button className="login" onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </main>
  )
}

export default NotFound
