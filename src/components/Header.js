import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <div>
            <LinkContainer to='/'>
              <Navbar.Brand>ProShop</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
          </div>
          <div>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <LinkContainer to='/cart'>
                  <Nav.Link>
                    <i className='fas fa-shopping-cart'></i> Cart
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
