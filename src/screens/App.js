import React from 'react'
import './App.css'
import Routes from '../config/Routes'
import { Provider } from 'react-redux'
import { store } from '../config/store'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Routes></Routes>
      </div>
    </Provider>
  )
}

export default App
