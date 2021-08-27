import PropTypes from 'prop-types'
import React, { useState } from "react"
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap"
import { Link } from "react-router-dom"
import ScrollspyNav from "./scrollSpy"

//Import Images
import logodark from "../../assets/images/logo-dark.png"
import logolight from "../../assets/images/logo-light.png"

const navItems = [
  { id: 1, idnm: "home", navheading: "Home" },
  { id: 2, idnm: "about", navheading: "Our Service" },
  { id: 3, idnm: "features", navheading: "Our Story" },
  { id: 3, idnm: "roadmap", navheading: "Portofolio" },
  { id: 4, idnm: "team", navheading: "Contact" },
  // { id: 5, idnm: "news", navheading: "News" },
  { id: 6, idnm: "faqs", navheading: "FAQs" },
]

const Navbar_Page = props => {
  const [isOpenMenu, setisOpenMenu] = useState(false)

  //Store all NavigationbaFr Id into TargetID variable(Used for Scrollspy)
  let TargetId = navItems.map(item => {
    return item.idnm
  })

  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        fixed="top"
        className={`navigation sticky ${isOpenMenu == true? 'navigation-mobile' : null} ${props.navClass}`}
      >
        <Container>
          <NavbarBrand className={"navbar-logo"} href="/">
            {props.imglight !== true ? (
              <img
                src={logodark}
                alt=""
                height="24"
                className="logo logo-dark"
              />
            ) : (
              <img
                src={logolight}
                alt=""
                height="24"
                className="logo logo-light"
              />
            )}
          </NavbarBrand>

          <NavbarToggler
            className="m-2"
            onClick={() => {
              setisOpenMenu(!isOpenMenu)
            }}
          >
            <i className="fa fa-fw fa-bars"/>
          </NavbarToggler>

          <Collapse id="topnav-menu-content" isOpen={isOpenMenu} navbar>
            <ScrollspyNav
              scrollTargetIds={TargetId}
              scrollDuration="100"
              headerBackground="true"
              activeNavClass="active"
              className="navbar-collapse"
            >
              <Nav className="ms-auto navbar-nav" id="topnav-menu">
                {navItems.map((item, key) => (
                  <NavItem
                    key={key}
                    className={item.navheading === "Home" ? "active" : ""}
                  >
                    <NavLink href={"#" + item.idnm}> {item.navheading}</NavLink>
                  </NavItem>
                ))}
              </Nav>
            </ScrollspyNav>
          </Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

Navbar_Page.propTypes = {
  imglight: PropTypes.any,
  navClass: PropTypes.string
}

export default Navbar_Page
