import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopNav from './components/TopNav'
import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'

const App = () => {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </Router>
  )
}

export default App
