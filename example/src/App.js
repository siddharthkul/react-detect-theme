import React from 'react'
import { useIsDark } from 'react-detect-theme'

const App = () => {
  const theme = useIsDark()
  return (
    <div className={`container ${theme ? 'dark' : 'light'}`}>
      <h1 className='text'>
        {theme ? 'dark' : 'light'}
      </h1>
    </div>
  )
}
export default App
