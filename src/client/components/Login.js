import React, { useState } from 'react'

import '../styles/login.scss'

const Login = ({ keyConst, history }) => {
  // constants for name attribute of inputs
  const INPUT_CONSTS = {
    userName: 'userName',
    password: 'password'
  }
  // state of form input and event handlers
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isEmpty, setIsEmpty] = useState(true)

  const handleChange = (evt) => {
    if (evt.target.name === INPUT_CONSTS.userName) {
      setUserName(evt.target.value)
      if (!evt.target.value || !password) setIsEmpty(true)
      else setIsEmpty(false)
    } else {
      setPassword(evt.target.value)
      if (!evt.target.value || !userName) setIsEmpty(true)
      else setIsEmpty(false)
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    sessionStorage.setItem(keyConst, userName)
    setUserName('')
    setPassword('')
    setIsEmpty(true)
    history.push('/home')
  }

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form_input">
          <input className="input" type="text" placeholder="User Name" autoFocus name={INPUT_CONSTS.userName} value={userName} onChange={handleChange}/>
        </div>
        <div className="form_input">
          <input className="input" type="text" autoFocus placeholder="Password" name={INPUT_CONSTS.password} value={password} onChange={handleChange}/>
        </div>
        <button className="login" type="Submit" disabled={isEmpty}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
