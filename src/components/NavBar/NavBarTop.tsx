import * as React from 'react'

import {
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
} from '@blueprintjs/core'

export default class NavbarTop extends React.PureComponent {
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
