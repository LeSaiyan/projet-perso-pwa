import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Header from '../components/header'
import Login from '../screens/Login'
import Home from '../screens/Home'
import PrivateRoute from './PrivateRoute'
import Favoris from '../screens/Favoris'
import Soon from '../screens/Soon'
import Albums from '../screens/Albums'

const Routes = () => {
  const token = localStorage.getItem('token')

  const isLoggedIn = token

  return (
    <Router>
      {isLoggedIn ? <Header /> : null}
      <Switch>
        <Route path='/' exact component={Login} />
        <PrivateRoute path='/home' component={Home} exact />
        <PrivateRoute path='/albums' component={Albums} exact />
        <PrivateRoute path='/favoris' component={Favoris} exact />
        <PrivateRoute path='/soon' component={Soon} exact />

        {/* <PrivateRoute
          path='/characters/:id'
          component={CharactersDetails}
          exact
        />
        <PrivateRoute path='/favoris' component={Favoris} exact /> */}
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
