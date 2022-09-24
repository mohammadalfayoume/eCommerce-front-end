import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <div>
            <Navbar.Brand href='/'>ProShop</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
          </div>
          <div>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <Nav.Link href='/cart'>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
                <Nav.Link href='/login'>
                  <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
