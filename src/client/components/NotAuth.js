import React from 'react'

import '../styles/notfound.scss'

const NotAuth = ({ keyConst, history }) => {
  const handleClick = () => {
    if (window.sessionStorage.getItem(keyConst) === null) history.push('/login')
    else history.push('/home')
  }
  return (
    <main className="wrapper">
      <div className="box">
        <h3>Please Log In</h3>
        <button className="login" onClick={handleClick}>
            Login
        </button>
      </div>
    </main>
  )
}

export default NotAuth
