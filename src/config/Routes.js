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
import Episodes from '../screens/Episodes'
import Characters from '../screens/Characters'
import CharacterDetails from '../screens/CharacterDetails'

const Routes = () => {
  const token = localStorage.getItem('token')

  const isLoggedIn = token

  return (
    <Router>
      {isLoggedIn ? <Header /> : null}
      <Switch>
        <Route path='/' exact component={Login} />
        <PrivateRoute path='/home' component={Home} exact />
        <PrivateRoute path='/episodes' component={Episodes} exact />
        <PrivateRoute path='/characters' component={Characters} exact />
        <PrivateRoute path='/favoris' component={Favoris} exact />
        <PrivateRoute
          path='/characters/:id'
          component={CharacterDetails}
          exact
        />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
