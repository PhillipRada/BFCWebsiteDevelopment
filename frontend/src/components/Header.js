import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../gifs/Logo.gif";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar expand="lg" collapseOnSelect>
        <Container className="WIDTH">
          <img src={Logo} alt="Eagle" Height="92" width="100" />
          <a href="/">
            <Navbar.Brand>
              <h8>British Falocners Club </h8>
            </Navbar.Brand>
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/help">
                <Nav.Link>
                  <i className="fas fa-info-circle"></i>Help & Advice
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/forums">
                <Nav.Link>
                  <i className="fas fa-comments"></i>Forums
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/regions">
                <Nav.Link>
                  <i className="fas fa-comments"></i>BFC Regions
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>
                  <i className="fas fa-comments"></i>Contact
                </Nav.Link>
              </LinkContainer>
              <NavDropdown title="Become A Member Today">
                <LinkContainer to="/apply">
                  <NavDropdown.Item>
                    <h7>Apply To Join BFC</h7>
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/rules">
                  <NavDropdown.Item>
                    <h7>Code Of Conduct For BFC</h7>
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>
                      <h7>Profile</h7>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    <h7>Logout</h7>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>Login
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin Panel" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>
                      <h7>Users</h7>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>
                      <h7>Products</h7>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>
                      <h7>Orders</h7>
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
