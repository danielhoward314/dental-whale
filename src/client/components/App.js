import React from 'react'
import { Router } from 'react-router-dom'

import Routes from './Routes'
import history from '../history'
import Nav from './Nav'
import '../styles/base.scss'
import '../styles/app.scss'

const App = () => {
  // constant for sessionStorage key name
  const keyConst = 'dentalWhale'

  return (
    <Router history={history}>
      <div className="spacer" />
      <Nav history={history} />
      <Routes keyConst={keyConst} history={history} />
    </Router>
  )
}

export default App
