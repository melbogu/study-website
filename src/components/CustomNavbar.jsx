import * as React from 'react';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function CustomNavbar() {
  return (
    <>
      <Header />
      {/* <ul className="nav nav-underline">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/myCourses">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/">Disabled</a>
        </li>
      </ul> */}
      <Navbar expand="lg" className="navbar-color">
        <Container>
          <Navbar.Brand href="dashboard">Study World</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Meine Kurse</Nav.Link>
              <Nav.Link href="#link">Alle Kurse</Nav.Link>
              <Nav.Link href="#link">Mein Profil</Nav.Link>
              <Nav.Link href="#link">Konto-Einstellungen</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <div className="navbar-space">
              <Navbar.Text>
                Hallo, Melissa!
              </Navbar.Text>
              <Navbar.Text>
                <a href="/">Abmelden</a>
              </Navbar.Text>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}