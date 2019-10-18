import React from 'react'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from './Home'
import Todos from './Todos'
import Login from './Login'
import NotAuth from './NotAuth'
import NotFound from './NotFound'

const Routes = ({ keyConst, history }) => {
  const isLoggedIn = window.sessionStorage.getItem(keyConst) === null ? false : true

  return (
    <Switch>
      {isLoggedIn && (
        <Switch>
          {/* Routes placed here are only available after logging in */}
          <Route exact path="/" component={() => <Redirect to="/home" />} />
          <Route path="/login" component={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/todos" component={Todos} />
          {/* Displays our NotFound component as a fallback */}
          <Route path="*" component={() => <NotFound keyConst={keyConst} history={history} />} />
        </Switch>
      )}
      {!isLoggedIn && (
        <Switch>
          {/* Unauthenticated routes placed here */}
          <Route exact path="/" component={() => <Login keyConst={keyConst} history={history} />} />
          <Route path="/login" component={() => <Login keyConst={keyConst} history={history} />} />
          <Route path="/home" component={() => <NotAuth keyConst={keyConst} history={history} />} />
          <Route path="/todos" component={() => <NotAuth keyConst={keyConst} history={history} />} />
          {/* Displays our NotFound component as a fallback */}
          <Route path="*" component={() => <NotFound keyConst={keyConst} history={history} />} />
        </Switch>
      )}
    </Switch>
  )
}
// The `withRouter` wrapper makes sure that updates are not blocked when the url changes
export default withRouter(Routes)
