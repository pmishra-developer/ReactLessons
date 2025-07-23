import React from 'react'
import FirstComponent from './pages/FirstComponent'

const Main = () => {
  return (
    <div>
      <h1>Welcome to our application</h1>
      <FirstComponent userName = {'Srinivas'} />
    </div>
  )
}

export default Main