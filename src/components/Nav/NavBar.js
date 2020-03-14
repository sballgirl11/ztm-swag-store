import React from 'react'
import styled from 'styled-components';
import {Link} from 'gatsby'
import Cart from './Cart'
import Logo from './Logo'

const NavContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  -moz-box-pack: justify;
  height: auto;
  width: 95vw;
`

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`

const NavRight = styled.div`
  display: flex;
  align-items: center
`

const NavBar = () => {
    return (
            <NavContainer>
                <NavLeft>
                    <Link to="/" >
                        <Logo />
                    </Link>
                </NavLeft>
                <NavRight>
                    <Link to="/cart" >
                        <Cart />
                    </Link>
                </NavRight>
            </NavContainer>
    )
}

export default NavBar