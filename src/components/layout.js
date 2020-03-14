import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/globalStyle';

import NavBar from './Nav/NavBar'
import HeaderMain from './Headers/HeaderMain';

import Andrei from '../images/andrei.png'


const PageWrapper = styled.div`
  font-family: 'Barlow', sans-serif;
  display: grid;
  grid-template-rows: 80px 1fr 50px;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`

const NavStyled = styled.nav`
  position: sticky;
  padding: 0 20px;
  top: 0px;
  height: 80px;
  width: 98;
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  z-index: 1000;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: justify;
  justify-content: space-between;
`

const MainSection = styled.main`
  background: url(${Andrei}) no-repeat fixed bottom left;
  height: 100%;
`

const FooterStyled = styled.footer`
  height: 50px;
  width: 100vw;
  background: rgb(0, 0, 0) none repeat scroll 0% 0%;
  color: rgb(255, 255, 255);
  display: grid;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 0px;
  grid-row: 3/-1;
`


class Layout extends React.Component {

  componentDidMount() {
    if (window.Snipcart) {
      window.Snipcart.api.configure('show_continue_shopping', true);
    }
  }


  render() {
    const { location, children } = this.props
    const siteName = "ZTM Swag Shop"   

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <PageWrapper>
            <NavStyled>
              <NavBar />
            </NavStyled>
                   
            <MainSection><HeaderMain shopName={siteName} />  {children}</MainSection>
            <FooterStyled>
              COPYRIGHT © {new Date().getFullYear()}, ZERO TO MASTERY INC.
            </FooterStyled>
          </PageWrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
