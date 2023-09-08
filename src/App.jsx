import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import First from './components/First'
import Second from './components/Second'

const App = () => {
  return (
    <>
      <First/>
      <Second/>
    </>
  )
}

export default App
