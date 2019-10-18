import React from 'react'

import avatar from '../../public/favicon.ico'
import '../styles/home.scss'

const Home = () => {
  return (
    <main className="wrapper">
      <div className="box">
        <div>
          <img className="avatar" src={avatar} />
        </div>
        <h3>Hi, I'm Daniel Howard and I'd love to be your next frontend developer!</h3>
        <p>I've created a single-page app using React. Routing is done with react-router-dom. The home and todos routes require authentication. I've mocked authentication through the sessionStorage API. The todo app showcases state management through the useReducer hook.</p>
      </div>
    </main>
  )
}

export default Home
