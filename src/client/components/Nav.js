import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/nav.scss'

const Nav = ({ history }) => {

  const handleClick = () => {
    window.sessionStorage.clear()
    history.push('/login')
  }

  return (
    <nav className="nav">
      <Link className="nav_link" to="/home">Home</Link>
      <Link className="nav_link" to="/todos">Todos</Link>
      <span className="nav_spacer" />
      <button className={"logout"} onClick={handleClick}>Logout</button>
    </nav>
  )
}

export default Nav
