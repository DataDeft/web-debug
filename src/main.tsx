import { Alignment, Button, Navbar } from '@blueprintjs/core'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './index.css'

class NavBarTop extends React.PureComponent {
  public render() {
    return (
      <Navbar>
        <Navbar.Group align={Alignment.RIGHT}>
          <Navbar.Heading>Depoxy</Navbar.Heading>
          <Navbar.Divider />
          <Button className='bp4-minimal' icon='home' text='Home' />
          <Navbar.Divider />
          <Button className='bp4-minimal' icon='user' text='Profile' />
        </Navbar.Group>
      </Navbar>
    )
  }
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <NavBarTop />
      <div className='App'>
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
